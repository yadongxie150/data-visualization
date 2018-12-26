import React, { Component } from 'react';
import { Chart, Axis, Geom, Tooltip, Coord } from 'bizcharts'
import './index.css'

class ColumnChart extends Component {
  render() {
    const { title, data, type } = this.props
    const scales = {
      year: {
        alias: '年份',
        formatter: item => `${item}年`,
      },
      value: {
        tickInterval: 4,
      }
    }
    const isBar = type === 'bar'
    return (
      <div>
        <div>{title}</div>
        <Chart height={400} data={data} scale={scales} forceFit>
          {isBar && <Coord transpose />}
          <Axis name="year" />
          <Axis name="value" visible={false} />
          <Geom type="interval" position="year*value" />
          <Tooltip />
        </Chart>
      </div>
    )
  }
}

export default ColumnChart
