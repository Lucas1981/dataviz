# dataviz

Collection of all dataviz tools with d3

So I am trying to recreate most of the data visualisation tools I've worked on. It's good to see how things are built from scratch, to understand when what parts come into play and perhaps in the long run to turn it into a nice ecosystem of related classes. I thought I'd go for an approach that doesn't make use of any modern frameworks like Vue or React, but rather play around with d3.js itself.

To be honest, I forgot how intricate things can get. Something as elementary as a popover can still be quite a pain, having to figure out positioning for instance. Updating to dynamic screen size changes or updating due to new data coming in can also be a pain. First I'll start by setting up some static render-once types of charts, then gradually make them more flexible and dynamic.

The charts I want to build first are:
- Line chart
- Bar chart
- Stacked bar chart
- Horizontal bar chart
- Scatter plot
- Box plot
- Violin plot
- World map
- Hexagonal world map
- Graph
- Alluvial

The functionality I'd optimally want to realise is:
- Diagonal axis
- Vertical axis
- Bar renders
- Line renders
- Circle renders
- Popover functionality
- Screen resize reaction
- Data change reaction
- Zoom functionality
