import React, { Component } from 'react'
import echarts from 'echarts'

import './index.css'

class Chart extends Component {
  componentDidMount() {
    this.renderLine()
  }

  getOption = () => {
    const { type, data } = this.props
    switch (type) {
      case 'pie':
      case 'funnel':
        return {
          tooltip: {},
          series: [{
            data: data.map(item => ({
              ...item,
              name: item.year,
            })),
            type,
          }],
        }
      case 'radar':
        return {
          tooltip: {},
          radar: {
            // shape: 'circle',
            indicator: data.map(item => ({
              ...item,
              name: item.year,
              max: 16,
            }))
          },
          series: [{
            type,
            data: [
              {
                value: data.map(item => item.value + 6),
                name: '消费1',
              },
              {
                value: data.map(item => item.value),
                name: '消费2',
              },
            ]
          }],
        }
      default:
        return {
          tooltip: {},
          xAxis: {
            type: 'category',
            data: data.map(item => item.year),
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: data.map(item => item.value),
            type,
          }],
        }
    }
  }

  renderLine = () => {
    const option = this.getOption()
    echarts.init(this.container).setOption(option)
  }

  render() {
    const { title } = this.props
    return (
      <div>
        <div>{title}</div>
        <div ref={ref => this.container = ref} style={{ width: 500, height: 400 }} />
      </div>
    )
  }
}

export default Chart
