import * as d3 from 'd3';

const popoverClass = 'popover';

export const mountPopover = targetElement => {
  return targetElement
    .append('div')
    .attr('class', popoverClass)
    .attr('style', 'display: none;');
};
