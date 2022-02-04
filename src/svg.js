export const mountSvg = (targetElement, width, height, padding) =>
  targetElement
    .append('svg')
    .attr('width', width + padding.left + padding.right)
    .attr('height', height + padding.top + padding.bottom)
    .append('g')
    .attr('transform', `translate(${padding.left}, ${padding.top})`);
