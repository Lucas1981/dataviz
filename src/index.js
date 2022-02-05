import { mountLineChart } from './charts/line-chart.js';
import { mountBarChart } from './charts/bar-chart.js';

const width = 640;
const height = 480;
const data = [
  { color: 'red', label: 'Lovers', data: [0, 40, 20, 50, 30, 25, 12, 37] },
  { color: 'green', label: 'Haters', data: [37, 12, 25, 30, 50, 20, 40, 0] }
];
const labels = ['Chicago', 'Los Angeles', 'New York', 'Atlanta', 'Miami', 'Albany', 'San Diego', 'Seattle'];

const lineChart = mountLineChart(data, '#app', width, height, labels);
const barChart = mountBarChart(data[0], '#app', width, height, labels);
