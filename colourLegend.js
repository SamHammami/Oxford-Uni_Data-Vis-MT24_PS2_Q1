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

    // Merge update and enter selections
    groupsEnter.merge(groups) 
        .attr('transform', (d, i) => `translate(0, ${i * spacing})`);

    // Update existing circles
    groupsEnter.append('circle')
        .merge(groups.select('circle')) 
        .attr('r', circleRadius)
        .attr('fill', colourScale);

    // Update existing text
    groupsEnter
        .append('text')
        .merge(groups.select('text')) 
        .text(d => d)
        .attr('x', textOffset)
        .attr('y', 0);

    // Remove any unwanted elements (exit)
    groups.exit().remove();
};

