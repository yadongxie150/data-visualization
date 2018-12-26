import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

import './index.css'

class Chart extends Component {
  render() {
    const { title, data } = this.props
    return (
      <div>
        <div style={{ textAlign: 'center' }}>{title}</div>
        <BarChart width={500} height={400} data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill='#8884d8' />
        </BarChart>
      </div>
    )
  }
}

export default Chart
