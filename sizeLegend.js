export const sizeLegend = (parent, props) => {
    // Unpack properties
    const { 
        sizeScale, 
        numTicks, 
        spacing, 
        textOffset, 
        circleFill 
    } = props;

    // Generate tick values from the size scale
    const ticks = sizeScale.ticks(numTicks).filter(d => d > 0).reverse();

    // Select all groups and bind data to each legend entry
    const groups = parent
        .selectAll('.legendEntry')
        .data(ticks);

    // Handle the "enter" stage for new elements
    const groupsEnter = groups
        .enter()
        .append('g')
        .attr('class', 'legendEntry');

    groupsEnter
        .merge(groups) // Merge update and enter selections
        .attr('transform', (d, i) => `translate(0, ${i * spacing})`)
        ;

    groupsEnter
        .append('circle')
        .merge(groups.select('circle')) // Update existing circles
        .attr('r', sizeScale) // Radius is set by the scale
        .attr('fill', circleFill);

    groupsEnter
        .append('text')
        .merge(groups.select('text')) // Update existing text
        .attr('x', textOffset)
        .attr('y', 0)
        .attr('dominant-baseline', 'central') // Align text vertically with circles
        .text(d => d);

    // Remove any unwanted elements (exit)
    groups.exit().remove();

    
};



