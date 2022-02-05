import * as d3 from 'd3';
import { mountSvg } from '../parts/svg.js';
import { mountXAxisBand, mountYAxisLinear } from '../parts/axis.js';
import { directions } from '../constants.js';
import { mountBars } from '../parts/bar.js';
import { mountOverlays } from '../parts/overlays.js';
import { mountPopover } from '../parts/popover.js';

const barChartClass = 'bar-chart';
const padding = { top: 10, right: 30, bottom: 30, left: 60 };

export const mountBarChart = (data, target, width, height, labels = null, yTicks = 7) => {
  const root = d3.select(target).append('div').attr('class', 'chart-wrapper');
  const svg = mountSvg(root, width, height, padding);
  const barChart = svg.append('g').attr('class', barChartClass);
  const finalLabels = labels || data[0].data.map((value, index) => index);
  const yScale = mountYAxisLinear(data.data, barChart, width, height, directions.left, yTicks);
  const xScale = mountXAxisBand(
    data.data.map((value, index) => index),
    barChart, width, height, directions.bottom, finalLabels.length,
    (d, i) => finalLabels[i]
  );

  const popover = mountPopover(root);
  mountBars(data, barChart, xScale, yScale, height);
  mountOverlays(finalLabels, barChart, xScale, yScale, width, height, {
    mouseenter: element => {
      const { x, y } = element.getBoundingClientRect();
      const index = d3.select(element).attr('data-index');
      const value = data.data[index];
      popover
        .attr('style', `display: inline-block; left: ${x}px; top: ${y}px;`)
        .html(`${data.label ? `${data.label}: `: ''}${value}`);
    },
    mouseleave: () => {
      popover.attr('style', 'display: none;');
    }
  });

  return barChart;
};
