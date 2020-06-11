import * as am4core from '@amcharts/amcharts4/core';
import { Place } from '../../@types';

let colorSet = new am4core.ColorSet();

//some coordinates are altered to prevent overlap on map

export const places: Array<Place> = [
  {
    title: 'Singapore',
    longitude: 103.8536,
    latitude: 1.2789,
    color: colorSet.next()
  },
  {
    title: 'Bangkok',
    longitude: 100.5018,
    latitude: 13.7563,
    color: colorSet.next(),
  },
  {
    title: 'Krabi',
    longitude: 98.9063,
    latitude: 8.0863,
    color: colorSet.next(),
  },
  {
    title: 'Bali',
    longitude: 115.0920,
    latitude: -8.3405,
    color: colorSet.next(),
  },
  {
    title: 'Melbourne',
    longitude: 144.9631,
    latitude: -37.8136,
    color: colorSet.next(),
  },
  {
    title: 'Brisbane',
    longitude: 153.0251,
    latitude: -27.4698,
    color: colorSet.next(),
  },
  {
    title: 'Sydney',
    longitude: 151.2093,
    latitude: -33.8688,
    color: colorSet.next(),
  },
  {
    title: 'Beijing',
    longitude: 116.4074,
    latitude: 39.9042,
    color: colorSet.next(),
  },
  {
    title: 'Shanghai',
    longitude: 121.4737,
    latitude: 31.2304,
    color: colorSet.next(),
  },
  {
    title: 'The Great Wall of China',
    longitude: 119.5704, //longitude: 116.5704,
    latitude: 43.4319,    //latitude: 40.4319,
    color: colorSet.next(),
  },
  {
    title: 'Hong Kong',
    longitude: 114.1694,
    latitude: 22.3193,
    color: colorSet.next(),
  },
  {
    title: 'Taiwan',
    longitude: 120.9605,
    latitude: 23.6978,
    color: colorSet.next(),
  },
  {
    title: 'Tokyo',
    longitude: 140.6503,    //longitude: 139.6503,
    latitude: 38.6762,    //latitude: 35.6762,
    color: colorSet.next(),
  },
  {
    title: 'Kyoto',
    longitude: 135.7681,
    latitude: 35.0116,
    color: colorSet.next(),
  },
  {
    title: 'Osaka',
    longitude: 132.5023,  //longitude: 135.5023,
    latitude: 32.6937, //latitude: 34.6937,
    color: colorSet.next(),
  },
  {
    title: 'Mount Fuji',
    longitude: 138.7274,
    latitude: 35.3606,
    color: colorSet.next(),
  },
  {
    title: 'Seoul',
    longitude: 126.9780,
    latitude: 37.5665,
    color: colorSet.next(),
  },
  {
    title: 'Jeju Islands',
    longitude: 126.5312,
    latitude: 33.4996,
    color: colorSet.next(),
  },
  {
    title: 'Rome and Vatican City',
    longitude: 14.4964, //longitude: 12.4964
    latitude: 41.9028,
    color: colorSet.next(),
  },
  {
    title: 'Milan',
    longitude: 9.1900,
    latitude: 45.4642,
    color: colorSet.next(),
  },
  {
    title: 'Venice',
    longitude: 12.3155,
    latitude: 45.4408,
    color: colorSet.next(),
  },
  {
    title: 'Petra',
    longitude: 35.4444,
    latitude: 30.3285,
    color: colorSet.next()
  },
  {
    title: 'Amman',
    longitude: 40.2384, //longitude: 36.2384
    latitude: 31.5852, //latitude: 30.5852
    color: colorSet.next()
  },
  {
    title: 'Dubai',
    longitude: 55.2708,
    latitude: 25.2048,
    color: colorSet.next(),
  },
  {
    title: 'Los Angeles',
    longitude: -118.2437,
    latitude: 34.0522,
    color: colorSet.next()
  },
  {
    title: 'San Francsico',
    longitude: -122.4149,
    latitude: 37.7749,
    color: colorSet.next()
  },
  {
    title: 'Las Vegas',
    longitude: -115.1398,
    latitude: 36.1699,
    color: colorSet.next()
  },
  {
    title: 'The Grand Canyon',
    longitude: -110.1401, //longitude: -112.1401, 
    latitude: 36.0544,  //latitude: 36.0544,
    color: colorSet.next(),
  },
]


//  { 
//   title: '',
//   longitude: , 
//   latitude: , 
//   color: colorSet.next(), 
// },