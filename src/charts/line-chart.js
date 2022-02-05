import * as d3 from 'd3';
import { mountSvg } from '../parts/svg.js';
import { mountXAxisBand, mountYAxisLinear } from '../parts/axis.js';
import { directions } from '../constants.js';
import { mountLines } from '../parts/line.js';
import { mountBars } from '../parts/bar.js';
import { mountOverlays } from '../parts/overlays.js';
import { mountPopover } from '../parts/popover.js';

const lineChartClass = 'line-chart';
const padding = { top: 10, right: 30, bottom: 30, left: 60 };

export const mountLineChart = (data, target, width, height, labels = null, yTicks = 7) => {
  const root = d3.select(target).append('div').attr('class', 'chart-wrapper');
  const svg = mountSvg(root, width, height, padding);
  const lineChart = svg.append('g').attr('class', lineChartClass);
  const finalLabels = labels || data[0].data.map((value, index) => index);
  const flat = data.reduce((acc, { data }) => [...acc, ...data], []);
  const yScale = mountYAxisLinear(flat, lineChart, width, height, directions.left, yTicks);
  const xScale = mountXAxisBand(
    data[0].data.map((value, index) => index),
    lineChart, width, height, directions.bottom, finalLabels.length,
    (d, i) => finalLabels[i]
  );

  const popover = mountPopover(root);
  mountLines(data, lineChart, xScale, yScale);
  mountOverlays(finalLabels, lineChart, xScale, yScale, width, height, {
    mouseenter: element => {
      const { x, y } = element.getBoundingClientRect();
      const index = d3.select(element).attr('data-index');
      const values = data.reduce((acc, curr) => [...acc, curr.data[index]], []);
      popover
        .attr('style', `display: inline-block; left: ${x}px; top: ${y}px;`)
        .html(values
          .map((value, index) =>
            `<div style="color: ${data[index].color}">${data[index].label ? `${data[index].label}: `: ''}${value}</div>`
          )
          .join('')
        );
    },
    mouseleave: () => {
      popover.attr('style', 'display: none;');
    }
  });

  return lineChart;
};
