import { colourLegend } from './colourLegend.js';
import { sizeLegend } from './sizeLegend.js';

// Create an SVG element
const svg = d3.select('svg')
    .attr('viewBox', '0 40 440 400')
    .attr('width', 400)
    .attr('height', 390);

// Define a colour scale for the colour legend
const colourScale = d3
    .scaleOrdinal()
    .domain(['apple', 'lemon', 'lime', 'orange'])
    .range(['#c11d1d', '#eae600', 'green', 'orange']);

// The SVG legend for colourLegend
svg.append('g')
    .attr('transform', 'translate(100,150)')
    .call(
        colourLegend, {
            colourScale,
            circleRadius: 20,
            spacing: 55,
            textOffset: 35
});


// Define a size scale for the size legend
const sizeScale = d3
    .scaleSqrt()
    .domain([0, 10])
    .range([0, 30]);

// The SVG legend for sizeLegend
svg.append('g')
    .attr('transform', 'translate(300,150)')
    .call(
        sizeLegend, {
            sizeScale,
            numTicks: 5,
            spacing: 45,
            textOffset: 55,
            circleFill: 'rgba(0, 0, 0, 0.5)'
})