const barClass = 'bar';

export const mountBars = (
  data, targetElement, xScale, yScale, height, handlers = null, applyPadding = true
) => {
  const bars = targetElement
    .append('g')
    .selectAll(`.${barClass}`)
    .data(data.data);

  const enterGroups = bars.enter();
  const compensation = applyPadding ? 0 : xScale.step() * xScale.paddingInner() / 2;
  const enterBars = enterGroups
    .append('g')
    .attr('class', barClass)
    .append('rect')
    .attr('x', (d, i) => xScale(i) - compensation)
    .attr('y', d => yScale(d))
    .attr('width', xScale.bandwidth() + 2 * compensation)
    .attr('height', d => height - yScale(d))
    .attr('data-index', (d, i) => i)
    .attr('fill', data.fill || 'blue')
    .attr('stroke', data.stroke || 'black');

  if (data.opacity || data.opacity === 0) {
    enterBars.attr('opacity', data.opacity);
  }

  if (handlers) {
    handlers.forEach(handler => {
      enterBars.on(handler.event, handler.fn);
    });
  }

  return bars;
};
