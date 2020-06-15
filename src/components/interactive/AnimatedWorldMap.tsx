import React, { Component } from 'react';
import 'core-js';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldHigh from '@amcharts/amcharts4-geodata/worldHigh';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { vw } from '../../@utils/useScrollPosition';
import { info } from '../../assets/data/info';
import PIN_ICON from '../../assets/images/map/pin-icon.svg'
// import * as geodata from '@amcharts/amcharts4-geodata';

am4core.useTheme(am4themes_animated);

interface WorldMapProps {
  enter: boolean;
}

interface DataMapState {
  map: am4maps.MapChart;
}

class AnimatedWorldMap extends Component<WorldMapProps, DataMapState> {
  componentDidMount() {
    am4core.addLicense("CH224389178")
    am4core.addLicense("MP224380308");

    var map = am4core.create('mapWorld', am4maps.MapChart);
    map.geodata = am4geodata_worldHigh;
    map.projection = new am4maps.projections.Miller();
    var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ["AQ"];
    map.homeZoomLevel = 5;

    let polygonTemplate = polygonSeries.mapPolygons.template;
    // polygonTemplate.tooltipText = "{name}";

    polygonTemplate.fill = am4core.color("#CCCCCC");
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#12CBD6");
    polygonSeries.mapPolygons.template.events.on('hit', function (ev) {
      map.zoomToMapObject(ev.target);
    });

    let imageSeries = map.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    imageSeries.mapImages.template.tooltipText = "{title}";
    // imageSeries.mapImages.template.propertyFields.url = "url";

    let marker = imageSeries.mapImages.template.createChild(am4core.Image);
    marker.href = PIN_ICON;
    marker.width = 30;
    marker.height = 30;
    marker.nonScaling = true;
    marker.tooltipText = "{title}";
    marker.horizontalCenter = "middle";
    marker.verticalCenter = "bottom";

    marker.showOnInit = true;
    marker.defaultState.transitionEasing = am4core.ease.cubicIn;
    marker.defaultState.transitionDuration = 2500;
    marker.hiddenState.properties.dy = -300;
    marker.tooltipPosition = 'pointer';

    marker.events.on("inited", function (event) {
      animateBullet(event.target);
    })

    function animateBullet(marker: any) {
      let animation = marker.animate([{ property: "y", from: -3, to: 3 }], 1000, am4core.ease.circleIn);
      animation.events.on("animationended", function (event: any) {
        let nextAnimation = marker.animate([{ property: "y", from: 3, to: -3 }], 1000, am4core.ease.circleOut);
        nextAnimation.events.on("animationended", function (event: any) {
          animateBullet(event.target.object);
        })
      })
    }

    imageSeries.data = info.travel.places;

    // Add line bullets
    let cities = map.series.push(new am4maps.MapImageSeries());
    cities.mapImages.template.nonScaling = true;

    let city = cities.mapImages.template.createChild(am4core.Circle);
    city.radius = 6;
    city.fill = map.colors.getIndex(0).brighten(-0.2);
    city.strokeWidth = 2;
    city.stroke = am4core.color("#fff");

    function addCity(coords: any, title: any) {
      let city = cities.mapImages.create();
      city.latitude = coords.latitude;
      city.longitude = coords.longitude;
      city.tooltipText = title;
      return city;
    }

    // let singapore = addCity({
    //   longitude: info.travel.places[0].longitude,
    //   latitude: info.travel.places[0].latitude,
    // }, info.travel.places[0].title);

    // let bangkok = addCity({
    //   longitude: info.travel.places[1].longitude,
    //   latitude: info.travel.places[1].latitude,
    // }, info.travel.places[1].title);

    // let krabi = addCity({
    //   longitude: info.travel.places[2].longitude,
    //   latitude: info.travel.places[2].latitude,
    // }, info.travel.places[2].title);

    // let bali = addCity({
    //   longitude: info.travel.places[3].longitude,
    //   latitude: info.travel.places[3].latitude,
    // }, info.travel.places[3].title);

    // Add lines
    let lineSeries: any = map.series.push(new am4maps.MapArcSeries());
    lineSeries.mapLines.template.line.strokeWidth = 2;
    lineSeries.mapLines.template.line.strokeOpacity = 0.5;
    lineSeries.mapLines.template.line.stroke = city.fill;
    lineSeries.mapLines.template.line.nonScalingStroke = true;
    lineSeries.mapLines.template.line.strokeDasharray = "1,1";
    lineSeries.zIndex = 10;

    function addLine(from: any, to: any) {
      let line = lineSeries.mapLines.create();
      line.imagesToConnect = [from, to];
      line.line.controlPointDistance = -0.3;

      return line;
    }

    // addLine(singapore, bangkok);
    // addLine(bangkok, krabi);
    // addLine(krabi, bali);
    // addLine(bali, singapore);


    for (let index in info.travel.places) {
      if (Number(index) + 1 < info.travel.places.length) { // < ? change to less than
        addLine(
          addCity({
            longitude: info.travel.places[Number(index)].longitude,
            latitude: info.travel.places[Number(index)].latitude,
          }, info.travel.places[Number(index)].title),
          addCity({
            longitude: info.travel.places[Number(index) + 1].longitude,
            latitude: info.travel.places[Number(index) + 1].latitude,
          }, info.travel.places[Number(index) + 1].title))
      } else {
        addLine(
          addCity({
            longitude: info.travel.places[Number(index)].longitude,
            latitude: info.travel.places[Number(index)].latitude,
          }, info.travel.places[Number(index)].title),
          addCity({
            longitude: info.travel.places[0].longitude,
            latitude: info.travel.places[0].latitude,
          }, info.travel.places[0].title))
      }

    }


    // Add plane
    let plane = lineSeries.mapLines.getIndex(0).lineObjects.create();
    plane.position = 0;
    plane.width = 48;
    plane.height = 48;

    plane.adapter.add("scale", function (scale: any, target: any) {
      return 0.5 * (1 - (Math.abs(0.5 - target.position)));
    })

    let planeImage = plane.createChild(am4core.Sprite);
    planeImage.scale = 0.08;
    planeImage.horizontalCenter = "middle";
    planeImage.verticalCenter = "middle";
    planeImage.path = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
    planeImage.fill = map.colors.getIndex(2).brighten(-0.2);
    planeImage.strokeOpacity = 0;


    // Plane animation
    let currentLine = 0;
    let direction = 1;
    function flyPlane() {

      // Get current line to attach plane to
      plane.mapLine = lineSeries.mapLines.getIndex(currentLine);
      plane.parent = lineSeries;

      // Set up animation
      let from, to;
      let numLines = lineSeries.mapLines.length;
      if (direction === 1) {
        from = 0
        to = 1;
        if (planeImage.rotation !== 0) {
          planeImage.animate({ to: 0, property: "rotation" }, 1000).events.on("animationended", flyPlane);
          return;
        }
      }
      else {
        from = 1;
        to = 0;
        if (planeImage.rotation !== 180) {
          planeImage.animate({ to: 180, property: "rotation" }, 1000).events.on("animationended", flyPlane);
          return;
        }
      }



      // Start the animation
      let animation = plane.animate({
        from: from,
        to: to,
        property: "position"
      }, 5000, am4core.ease.sinInOut);

      animation.events.on("animationprogress", function (event: any) {
        var point = plane.mapLine.positionToPoint(event.progress);
        var geoPoint = map.seriesPointToGeo(point);

        map.zoomToGeoPoint(geoPoint, map.zoomLevel, true, 0);
        map.seriesContainer.validatePosition();
      });

      animation.events.on("animationended", flyPlane)
      /*animation.events.on("animationprogress", function(ev) {
        let progress = Math.abs(ev.progress - 0.5);
        //console.log(progress);
        //planeImage.scale += 0.2;
      });*/


      // Increment line, or reverse the direction
      currentLine += direction;
      if (currentLine < 0) {
        currentLine = 0;
        direction = 1;
      }
      else if ((currentLine + 1) > numLines) {
        currentLine = 0;
        // direction = -1;
      }

    }

    // Go!
    flyPlane();




    this.setState({
      map: map
    })
  }

  componentWillUnmount() {
    if (this.state.map) {
      this.state.map.dispose();
    }
  }

  render() {
    return (
      <div id='mapWorld' style={{ width: '100%', height: vw < 1200 ? '25vh' : '50vh' }}></div>
    );
  }
}

export default AnimatedWorldMap;