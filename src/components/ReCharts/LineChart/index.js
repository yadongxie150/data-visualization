import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

import './index.css'


const Content = ({label, payload}) => {
  if(!payload || payload.length === 0) return null
  return (
    <div className="ToolTip">
      <div>年份：{label}</div>
      <div>对应的数值：{payload[0].value}</div>
    </div>
  )
}
class Chart extends Component {
  render() {
    const { title, data } = this.props
    return (
      <div>
        <div style={{ textAlign: 'center' }}>{title}</div>
        <LineChart width={500} height={400} data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip content={<Content />} />
          <Line dataKey="value" fill='#8884d8' />
        </LineChart>
      </div>
    )
  }
}

export default Chart
