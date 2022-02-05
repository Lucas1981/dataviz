import * as d3 from 'd3';
import { mountBars } from './bar.js';

const overlayClass = 'overlay';
const renderHandlers = customHandlers => [
  {
    event: 'mouseenter',
    fn: function(...args) {
      d3.select(this).attr('opacity', 0.2);
      if ('mouseenter' in customHandlers) customHandlers.mouseenter(this, ...args);
    }
  },
  {
    event: 'mouseleave',
    fn: function(...args) {
      d3.select(this).attr('opacity', 0);
      if ('mouseleave' in customHandlers) customHandlers.mouseleave(this, ...args);
    }
  }
];

export const mountOverlays = (data, targetElement, xScale, yScale, width, height, customHandlers = {}) => {
  const top = Math.max(...yScale.domain());

  return mountBars(
    { data: data.map(() => top), fill: 'rgba(0, 0, 0)', stroke: 'none', opacity: 0 },
    targetElement, xScale, yScale, height, renderHandlers(customHandlers), false
  );
};
