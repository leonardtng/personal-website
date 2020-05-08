import React, { Component } from 'react';
import 'core-js';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_singaporeHigh from '@amcharts/amcharts4-geodata/singaporeHigh';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { tooltipString } from '../utility/mapTooltip';
// import * as geodata from '@amcharts/amcharts4-geodata';

am4core.useTheme(am4themes_animated);

interface DataMapState {
  map: am4maps.MapChart;
}

class Map extends Component<{}, DataMapState> {
  componentDidMount() {
    var map = am4core.create('mapSG', am4maps.MapChart);
    map.geodata = am4geodata_singaporeHigh;
    map.projection = new am4maps.projections.Miller();
    var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    polygonSeries.data = [{
      "id": "SG-01",
      "name": "Central Singapore",
    }, {
      "id": "SG-02",
      "name": "North East",
    }, {
      "id": "SG-03",
      "name": "North West",
    }, {
      "id": "SG-04",
      "name": "South East",
    }, {
      "id": "SG-05",
      "name": "South West",
    }];

    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#CCCCCC");
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#12CBD6");
    polygonSeries.mapPolygons.template.events.on('hit', function (ev) {
      map.zoomToMapObject(ev.target);
    });

    let imageSeries = map.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    imageSeries.mapImages.template.tooltipHTML = tooltipString;
    // imageSeries.mapImages.template.propertyFields.url = "url";

    let circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle.radius = 8;
    circle.propertyFields.fill = "color";

    let circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle2.radius = 8;
    circle2.propertyFields.fill = "color";

    circle2.events.on("inited", function (event) {
      animateBullet(event.target);
    })

    function animateBullet(circle: any) {
      let animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
      animation.events.on("animationended", function (event: any) {
        animateBullet(event.target.object);
      })
    }

    let colorSet = new am4core.ColorSet();

    imageSeries.data = [{ longitude: 103.8536, latitude: 1.2789, color: colorSet.next() }];

    for (let object of imageSeries.data) {
      object.color = colorSet.next();
    }

    // map.zoomControl = new am4maps.ZoomControl();

    // let button = map.chartContainer.createChild(am4core.Button);
    // button.padding(5, 5, 5, 5);
    // button.align = "left";
    // button.marginLeft = 10;
    // button.events.on("hit", function () {
    //     map.goHome();
    // });
    // button.icon = new am4core.Sprite();
    // button.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";

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
      <div id='mapSG' style={{ width: '100%', height: '35vh' }}></div>
    );
  }
}

export default Map;