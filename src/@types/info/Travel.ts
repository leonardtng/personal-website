import * as am4core from '@amcharts/amcharts4/core';

export interface PlaceInterface {
    title: string;
    longitude: number;
    latitude: number;
    color:  am4core.Color;
};

export interface PictureInterface {
    img: string;
    title: string;
    cols: number;
};

export interface TravelInterface {
    title: string;
    description: string;
    places: Array<PlaceInterface>;
    pictures: Array<PictureInterface>;
};