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
    const ticks = sizeScale
        .ticks(numTicks)
        .filter(d => d > 0)
        .reverse();

    // Select all groups and bind data to each legend entry
    const groups = parent.selectAll('.legend')
        .data(ticks);

    // Handle the "enter" stage for new elements
    const groupsEnter = groups.enter()
        .append('g')
        .attr('class', 'legend');

    // Merge update and enter selections
    groupsEnter.merge(groups) 
        .attr('transform', (d, i) => `translate(0, ${i * spacing})`);

    // Update existing circles
    groupsEnter.append('circle')
        .merge(groups.select('circle')) 
        .attr('r', sizeScale) // Radius is set by the scale
        .attr('fill', circleFill);

    // Merge update and enter selections
    groupsEnter.append('text')
        .merge(groups.select('text')) // Update existing text
        .text(d => d)
        .attr('x', textOffset)
        .attr('y', 0)
        .attr('text-anchor', 'middle');

    // Remove any unwanted elements (exit)
    groups.exit().remove();
};