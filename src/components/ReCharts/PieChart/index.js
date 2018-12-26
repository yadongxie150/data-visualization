import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts'

import './index.css'

class Chart extends Component {
  render() {
    const { title, data } = this.props
    const colors = ['red', 'yellow', 'blue', '#666']
    return (
      <div>
        <div style={{ textAlign: 'center' }}>{title}</div>
        <PieChart width={500} height={400}>
          <Pie nameKey="year" dataKey="value" data={data} label>
            {
              data.map((item, index) => (
                <Cell key={index} fill={colors[index] || 'black'} />
              ))
            }
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    )
  }
}

export default Chart
