import React, { Component } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

import './index.css'

class Chart extends Component {
  render() {
    const { title, data } = this.props
    return (
      <div>
        <div style={{ textAlign: 'center' }}>{title}</div>
        <ScatterChart width={500} height={400} data={data}>
          <XAxis dataKey="year" />
          <YAxis dataKey="value" />
          <Tooltip />
          <CartesianGrid />
          <Scatter data={data} fill='#8884d8' />
        </ScatterChart>
      </div>
    )
  }
}

export default Chart
