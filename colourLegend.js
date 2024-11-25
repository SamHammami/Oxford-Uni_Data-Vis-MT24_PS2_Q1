export const colourLegend = (parent, props) => {

    // Unpack properties
    const { 
        colourScale, 
        circleRadius, 
        spacing, 
        textOffset 
    } = props;

    // Select all groups and bind data to each legend entry
    const groups = parent
        .selectAll('.legend')
        .data(colourScale.domain());

    // Handle the "enter" stage for new elements
    const groupsEnter = groups.enter()    
        .append('g')
        .attr('class', 'legend');

    groupsEnter.merge(groups) // Merge update and enter selections
        .attr('transform', (d, i) => `translate(0, ${i * spacing})`);

    groupsEnter.append('circle')
        .merge(groups.select('circle')) // Update existing circles
        .attr('r', circleRadius)
        .attr('fill', colourScale);

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

