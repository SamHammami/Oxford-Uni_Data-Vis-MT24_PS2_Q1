colourLegend.js
import { colourLegend } from './colourLegend.js';
import { sizeLegend } from './sizeLegend.js';

const svg = d3.select('svg');

const colourScale = d3.scaleOrdinal()
  .domain(['apple','lemon', 'lime', 'orange'])
  .range(['#c11d1d','#eae600', 'green', 'orange']);

svg.append('g')
    .attr('transform', `translate(100,150)`)
    .call(colourLegend, { 
      colourScale, 
      circleRadius: 20,
      spacing: 55,
      textOffset: 35
    });


const sizeScale = d3.scaleSqrt()
  .domain([0, 10])
  .range([0, 30]);

svg.append('g')
  .attr('transform', `translate(300,150)`)
  .call(sizeLegend, { 
    sizeScale, 
    numTicks: 5,
    spacing: 45,
    textOffset: 10,
    circleFill: 'rgba(0, 0, 0, 0.5)'
  });