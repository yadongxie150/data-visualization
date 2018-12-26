import React, { Component } from 'react';
import { Chart, Axis, Geom, Tooltip } from 'bizcharts'
import './index.css'

class LineChart extends Component {
  render() {
    const { title, data } = this.props
    const scales = {
      year: {
        alias: '年份',
        formatter: item => `${item}年`,
      },
    }
    const label = '手机（行业）'
    return (
      <div>
        <div>{title}</div>
        <Chart onTooltipChange={
          e => {
            const items = e.items
            const origin = items[0]
            items.splice(0)
            items.push({
              label,
              ...origin,
              ...origin.point._origin,
              title: '',
              name: '',
            })
          }
        } renderer='svg' height={400} data={data} scale={scales} forceFit placeholder="line chart">
          <Axis name="year" />
          <Axis name="value" />
          <Geom type="line" position="year*value" size={2} />
          <Geom
            type="point"
            position="year*value"
            size={4}
            shape={"circle"}
          />
          <Tooltip
            itemTpl={
              `<div class="line-tooltip">
                  <div>{label}</div>
                  <div>{year}: {value} </div>
                </div>`
            }
          />
        </Chart>
      </div>
    )
  }
}

export default LineChart
