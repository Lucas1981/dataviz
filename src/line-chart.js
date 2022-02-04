import { mountXAxis, mountYAxis } from './axis.js';
import { directions } from './constants.js';
import { mountLine } from './line.js';

export const mountLineChart = (data, svg, width, height) => {
  const lineChart = svg.append('g');
  const flat = data.reduce((acc, { data }) => [...acc, ...data], []);
  const yScale = mountYAxis(flat, lineChart, width, height, directions.left);
  const xScale = mountXAxis(data[0].data.map((value, index) => index), lineChart, width, height, directions.bottom);

  for (const dataSet of data) {
    mountLine(dataSet.data, lineChart, xScale, yScale, dataSet.color);
  }
  return lineChart;
};
