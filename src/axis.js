import * as d3 from 'd3';
import { directions } from './constants';

export const mountXAxis = (data, targetElement, width, height, direction) => {
  console.log(direction);
  const scale = d3.scaleLinear()
    .domain([0, Math.max(...data)])
    .range([0, width]);

  const g = targetElement.append("g");

  switch (direction) {
    case directions.top:
      g.call(d3.axisTop(scale));
      break;
    case directions.bottom:
      g
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(scale));
      break;
    default:
      throw new Error('No valid direction specified');
  }

  return scale;
};

export const mountYAxis = (data, targetElement, width, height, direction) => {
  const scale = d3.scaleLinear()
    .domain([0, Math.max(...data)])
    .range([height, 0]);

  const g = targetElement.append("g");

  switch (direction) {
    case directions.left:
      g.call(d3.axisLeft(scale));
      break;
    case directions.right:
      g
        .attr("transform", `translate(${width}, 0)`)
        .call(d3.axisRight(scale));
      break;
    default:
      throw new Error('No valid direction specified');
  }

  return scale;
};
