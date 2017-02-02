<template>
    <svg class='line-chart'></svg>
</template>

<script>
    import * as d3 from 'd3'
    export default {
        name: 'line-chart',
        props: {
            width: {
                type: Number,
                default: 0
            },
            height: {
                type: Number,
                default: 0
            },
            data: {
                type: Array,
                default: []
            }
        },
        methods: {
            renderChart() {
                // NOTE: This code is based on https://gist.github.com/d3noob/402dd382a51a4f6eea487f9a35566de0
                let margin = {
                    top: 10,
                    right: 10,
                    bottom: 10,
                    left: 10
                }
                let width = 960 - margin.right - margin.left
                let height = 500 - margin.top - margin.bottom
                let svg = d3.select(this.$el)
                    .attr('width', width + margin.right + margin.left)
                    .attr('height', height + margin.top + margin.bottom)
                    .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

                let i = 0
                // let duration = 750

                let root = d3.hierarchy(this.data[0], d => {
                    return d.children
                })
                root.x0 = 0
                root.y0 = 0
                // Collapse after the second level
                root.children.forEach(collapse)

                let treemap = d3.tree().size([height, width])

                // Collapse the node and all it's children
                function collapse(d) {
                    if (d.children) {
                        d._children = d.children
                        d._children.forEach(collapse)
                        d.children = null
                    }
                }

                svg
                console.log(root)

                update(root)

                function update(source) {
                     // Assigns the x and y position for the nodes
                    let treeData = treemap(root)

                    // Compute the new tree layout.
                    let nodes = treeData.descendants()
                    // let links = treeData.descendants().slice(1)

                    // Normalize for fixed-depth.
                    nodes.forEach(d => { d.y = d.depth * 180 })

                    let node = svg.selectAll('g.node')
                        .data(nodes, d => { return d.id || (d.id = ++i) })

                    let nodeEnter = node.enter().append('g')
                        .attr('class', 'node')
                        .attr('transform', d => {
                            return 'translate(' + source.y0 + ',' + source.x0 + ')'
                        })

                    nodeEnter.append('rect')
                        .attr('class', 'node')
                        .attr('r', 1e-6)
                        .attr('height', 20)
                        .attr('width', 40)
                        .style('fill', d => {
                            return d._children ? 'lightsteelblue' : '#fff'
                        })
                    nodeEnter.append('text')
                        .attr('dy', '.35em')
                        .attr('x', d => {
                            return d.children || d._children ? -13 : 13
                        })
                        .attr('text-anchor', d => {
                            return d.children || d._children ? 'end' : 'start'
                        })
                        .text(d => { return d.data.name })
                }

                /*
                function update(source) {
                    // Assigns the x and y position for the nodes
                    let treeData = treemap(root)

                    // Compute the new tree layout.
                    let nodes = treeData.descendants()
                    let links = treeData.descendants().slice(1)

                    // Normalize for fixed-depth.
                    nodes.forEach(d => { d.y = d.depth * 180 })

                    // ****************** Nodes section ***************************

                    // Update the nodes...
                    let node = svg.selectAll('g.node')
                        .data(nodes, d => { return d.id || (d.id = ++i) })

                    // Enter any new modes at the parent's previous position.
                    let nodeEnter = node.enter().append('g')
                        .attr('class', 'node')
                        .attr('transform', d => {
                            return 'translate(' + source.y0 + ',' + source.x0 + ')'
                        })
                        .on('click', click)

                    // Add Circle for the nodes
                    nodeEnter.append('circle')
                        .attr('class', 'node')
                        .attr('r', 1e-6)
                        .style('fill', d => {
                            return d._children ? 'lightsteelblue' : '#fff'
                        })

                    // Add labels for the nodes
                    nodeEnter.append('text')
                        .attr('dy', '.35em')
                        .attr('x', d => {
                            return d.children || d._children ? -13 : 13
                        })
                        .attr('text-anchor', d => {
                            return d.children || d._children ? 'end' : 'start'
                        })
                        .text(d => { return d.data.name })

                    // UPDATE
                    let nodeUpdate = nodeEnter.merge(node)

                    // Transition to the proper position for the node
                    nodeUpdate.transition()
                        .duration(duration)
                        .attr('transform', d => {
                            return 'translate(' + d.x + ',' + d.y + ')'
                        })

                    // Update the node attributes and style
                    nodeUpdate.select('circle.node')
                        .attr('r', 10)
                        .style('fill', d => {
                            return d._children ? 'lightsteelblue' : '#fff'
                        })
                        .attr('cursor', 'pointer')

                    // Remove any exiting nodes
                    let nodeExit = node.exit().transition()
                        .duration(duration)
                        .attr('transform', d => {
                            return 'translate(' + source.x + ',' + source.y + ')'
                        })
                        .remove()

                    // On exit reduce the node circles size to 0
                    nodeExit.select('circle')
                        .attr('r', 1e-6)

                    // On exit reduce the opacity of text labels
                    nodeExit.select('text')
                        .style('fill-opacity', 1e-6)

                    // ****************** links section ***************************

                    // Update the links...
                    let link = svg.selectAll('path.link')
                        .data(links, d => { return d.id })

                    // Enter any new links at the parent's previous position.
                    let linkEnter = link.enter().insert('path', 'g')
                        .attr('class', 'link')
                        .attr('d', d => {
                            let o = { x: source.x0, y: source.y0 }
                            return diagonal(o, o)
                        })

                    // UPDATE
                    let linkUpdate = linkEnter.merge(link)

                    // Transition back to the parent element position
                    linkUpdate.transition()
                        .duration(duration)
                        .attr('d', d => { return diagonal(d, d.parent) })

                    // Remove any exiting links
                    link.exit().transition()
                        .duration(duration)
                        .attr('d', d => {
                            let o = { x: source.x, y: source.y }
                            return diagonal(o, o)
                        })
                        .remove()

                    // Store the old positions for transition.
                    nodes.forEach(d => {
                        d.x0 = d.x
                        d.y0 = d.y
                    })

                    // Creates a curved (diagonal) path from parent to the child nodes
                    function diagonal(s, d) {
                        let path = `M ${s.y} ${s.x}
                                C ${(s.y + d.y) / 2} ${s.x},
                                ${(s.y + d.y) / 2} ${d.x},
                                ${d.y} ${d.x}`

                        return path
                    }

                    // Toggle children on click.
                    function click(d) {
                        if (d.children) {
                            d._children = d.children
                            d.children = null
                        } else {
                            d.children = d._children
                            d._children = null
                        }
                        update(d)
                    }
                }

                */
            }
        },
        watch: {
            width: 'renderChart',
            height: 'renderChart',
            data: 'renderChart'
        }
    }
</script>

<style>
  .link {
    fill: none;
    stroke: steelblue;
    stroke-width: 2px;
  }
  .node{
    stroke: red;
    fill: white;
  }
</style>