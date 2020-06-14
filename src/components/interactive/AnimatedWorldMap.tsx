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
      if (Number(index) + 1 !== info.travel.places.length) {
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

    // map.zoomControl = new am4maps.ZoomControl();

    // let button = map.chartContainer.createChild(am4core.Button);
    // button.padding(5, 5, 5, 5);
    // button.align = "left";
    // button.marginLeft = 10;
    // button.events.on("hit", function () {
    //   map.goHome();
    // });
    // button.icon = new am4core.Sprite();
    // button.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";

    // map.chartContainer.wheelable = false;


    // // Create first image container
    // var citySeries = map.series.push(new am4maps.MapImageSeries());
    // map.homeZoomLevel = 5;

    // // Singapore properties
    // var city1 = citySeries.mapImages.create();
    // // Singapore's latitude/longitude
    // city1.latitude = 1.2789;
    // city1.longitude = 103.8536;
    // // prevent from scaling when zoomed
    // city1.nonScaling = true;

    // // Milan properties
    // var city2 = citySeries.mapImages.create();
    // // Milan latitude/longitude
    // city2.latitude = 45.4642;
    // city2.longitude = 9.1900;
    // // Prevent scaling when zoomed
    // city2.nonScaling = true;

    // var lineSeries = map.series.push(new am4maps.MapLineSeries());
    // var mapLine = lineSeries.mapLines.create();

    // // Tell the line to connect the two cities (latitudes/longitudes an be used alternatively)
    // mapLine.imagesToConnect = [city1, city2]

    // // Draw the line in dashes
    // mapLine.line.strokeDasharray = "1,1";
    // mapLine.line.strokeOpacity = 0.2;

    // // Create the plane container
    // var planeContainer = mapLine.lineObjects.create();

    // planeContainer.position = 0;
    // // Set the SVG path of a plane for the sprite
    // var plane = planeContainer.createChild(am4core.Sprite);
    // planeContainer.nonScaling = false;
    // planeContainer.scale = 0.015;

    // // SVG plane illustration
    // plane.path = "M71,515.3l-33,72.5c-0.9,2.1,0.6,4.4,2.9,4.4l19.7,0c2.8,0,5.4-1,7.5-2.9l54.1-39.9c2.4-2.2,5.4-3.4,8.6-3.4 l103.9,0c1.8,0,3,1.8,2.3,3.5l-64.5,153.7c-0.7,1.6,0.5,3.3,2.2,3.3l40.5,0c2.9,0,5.7-1.3,7.5-3.6L338.4,554c3.9-5,9.9-8,16.2-8c24.2,0,85.5-0.1,109.1-0.2c21.4-0.1,41-6.3,59-17.8c4.2-2.6,7.9-6.1,11.2-9.8c2.6-2.9,3.8-5.7,3.7-8.5c0.1-2.8-1.1-5.5-3.7-8.5c-3.3-3.7-7-7.2-11.2-9.8c-18-11.5-37.6-17.7-59-17.8c-23.6-0.1-84.9-0.2-109.1-0.2c-6.4,0-12.3-2.9-16.2-8L222.6,316.6c-1.8-2.3-4.5-3.6-7.5-3.6l-40.5,0c-1.7,0-2.9,1.7-2.2,3.3L237,470c0.7,1.7-0.5,3.5-2.3,3.5l-103.9,0c-3.2,0-6.2-1.2-8.6-3.4l-54.1-39.9c-2.1-1.9-4.7-2.9-7.5-2.9l-19.7,0c-2.3,0-3.8,2.4-2.9,4.4l33,72.5C72.6,507.7,72.6,511.8,71,515.3z";
    // plane.fill = am4core.color("#000000");

    // plane.horizontalCenter = "middle";
    // plane.verticalCenter = "middle";

    // map.events.on("ready", goForward);

    // function goForward() {
    //   // var animation = planeContainer.animate({ property: "position", from: 0, to: 1 }, 3000).delay(300);
    //   plane.rotation = 0;
    //   var animation = planeContainer.animate(
    //     { property: "position", from: 0, to: 1 },
    //     5000,
    //     am4core.ease.polyInOut3
    //   );
    //   animation.events.on("animationprogress", function (event) {
    //     var point = mapLine.positionToPoint(event.progress);
    //     var geoPoint = map.seriesPointToGeo(point);

    //     map.zoomToGeoPoint(geoPoint, map.zoomLevel, true, 0);
    //     map.seriesContainer.validatePosition();
    //   });
    //   map.seriesContainer.validatePosition();
    //   animation.events.on("animationended", goForward);
    // }

    // // make the plane to be bigger in the middle of the line
    // planeContainer.adapter.add("scale", function (scale, target) {
    //   return (0.07 - 0.10 * (Math.abs(0.5 - target.position))) / map.zoomLevel;
    // })


    // // Make the plane to be bigger in the middle of the line
    // planeContainer.adapter.add("scale", function (scale, target) {
    //   return (0.07 - 0.10 * (Math.abs(0.5 - target.position))) / map.zoomLevel;
    // })

    // // Milan properties
    // var city3 = citySeries.mapImages.create();
    // // Milan latitude/longitude
    // city3.latitude = 34.0522;
    // city3.longitude = -118.2437;
    // // Prevent scaling when zoomed
    // city3.nonScaling = true;

    // var mapLine2 = lineSeries.mapLines.create();

    // // Tell the line to connect the two cities (latitudes/longitudes an be used alternatively)
    // mapLine.imagesToConnect = [city2, city3]

    // // Draw the line in dashes
    // mapLine.line.strokeDasharray = "1,1";
    // mapLine.line.strokeOpacity = 0.2;



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