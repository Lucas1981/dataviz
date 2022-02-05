import * as d3 from 'd3';

const lineClass = 'line';

export const mountLines = (data, targetElement, xScale, yScale) => {
  const lines = targetElement
    .selectAll(`.${lineClass}`)
    .data(data);

  const enterGroups = lines.enter();

  enterGroups
    .append('path')
    .attr('stroke', d => d.color)
    .attr('fill', 'none')
    .datum(d => d.data)
    .attr('d', d3.line()
      .x((d, i) => xScale(i) + xScale.bandwidth() / 2 )
      .y(d => yScale(d))
    );
};
