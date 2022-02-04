import * as d3 from 'd3';
import { mountSvg } from './svg.js';
import { mountLineChart } from './line-chart.js';

const width = 640;
const height = 480;
const padding = { top: 10, right: 30, bottom: 30, left: 60 };
const svg = mountSvg(d3.select('#app'), width, height, padding);
const data = [
  { color: 'red', data: [0, 40, 20, 50, 30, 25, 12, 37] },
  { color: 'green', data: [37, 12, 25, 30, 50, 20, 40, 0] }
];

const lineChart = mountLineChart(data, svg, width, height)
