import * as d3 from 'd3';

export const mountLine = (data, targetElement, xScale, yScale, color = 'red') =>
  targetElement
    .append('path')
    .datum(data)
    .attr('d', d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d))
    )
    .attr('stroke', color)
    .attr('fill', 'none');
