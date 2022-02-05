import * as d3 from 'd3';
import { directions } from '../constants';

export const mountXAxis = (
  scaleType, data, targetElement, width, height, direction, ticks = null, tickFormat = null
) => {
  const scale = scaleType
    .range([0, width]);

  const g = targetElement.append("g");
  let axis = null;

  switch (direction) {
    case directions.top:
      axis = d3
        .axisTop(scale)
        .ticks(data.length);

      if (tickFormat) { axis.tickFormat(tickFormat); }

      g.call(axis);
      break;
    case directions.bottom:
      axis = d3
        .axisBottom(scale)
        .ticks(data.length);

      if (tickFormat) { axis.tickFormat(tickFormat); }

      g
        .attr("transform", `translate(0, ${height})`)
        .call(axis);
      break;
    default:
      throw new Error('No valid direction specified');
  }

  return scale;
};

export const mountYAxis = (
  scaleType, data, targetElement, width, height, direction, ticks = null, tickFormat = null
) => {
  const scale = scaleType
    .range([height, 0]);

  const g = targetElement.append("g");
  let axis = null;

  switch (direction) {
    case directions.left:

      axis = d3
        .axisLeft(scale)
        .ticks(ticks || data.length);

      if (tickFormat) { axis.tickFormat(tickFormat); }

      g.call(axis);
      break;
    case directions.right:
      axis = d3
        .axisRight(scale)
        .ticks(ticks || data.length);

      if (tickFormat) { axis.tickFormat(tickFormat); }

      g
        .attr("transform", `translate(${width}, 0)`)
        .call(axis);
      break;
    default:
      throw new Error('No valid direction specified');
  }

  return scale;
};

export const mountXAxisLinear = (
  data, targetElement, width, height, direction, ticks = null, tickFormat = null
) => mountXAxis(
  d3.scaleLinear()
    .domain([0, Math.max(...data)]),
  data, targetElement, width, height, direction, ticks, tickFormat);

export const mountYAxisLinear = (
  data, targetElement, width, height, direction, ticks = null, tickFormat = null
) => mountYAxis(
  d3.scaleLinear()
    .domain([0, Math.max(...data)]),
  data, targetElement, width, height, direction, ticks, tickFormat);

export const mountXAxisBand = (
  data, targetElement, width, height, direction, ticks = null, tickFormat = null, paddingInner = 0.2, paddingOuter = 0.1
) => mountXAxis(
  d3.scaleBand()
    .domain(data)
    .paddingInner(paddingInner)
    .paddingOuter(paddingOuter),
  data, targetElement, width, height, direction, ticks, tickFormat);

export const mountYAxisBand = (
  data, targetElement, width, height, direction, ticks = null, tickFormat = null, paddingInner = 0, paddingOuter = 0
) => mountYAxis(
  d3.scaleBand()
    .domain(data)
    .paddingInner(paddingInner)
    .paddingOuter(paddingOuter),
  data, targetElement, width, height, direction, ticks, tickFormat);
