import React, { Component } from 'react';
import { Chart, Geom, Tooltip, Coord, Legend, View, Label } from 'bizcharts'
import './index.css'

class PieChart extends Component {
  render() {
    const { title, data } = this.props
    return (
      <div>
        <div>{title}</div>
        <Chart height={400} data={data} forceFit>
          <Legend />
          <Coord type="theta" />
          <Geom type="intervalStack" position="value" color="year" />
          <Tooltip />
        </Chart>
      </div>
    )
  }
}

export default PieChart
