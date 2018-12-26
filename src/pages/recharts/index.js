import React, { Component } from 'react';

import './index.css'
import LineChart from '../../components/ReCharts/LineChart'
import BarChart from '../../components/ReCharts/BarChart'
import ScatterChart from '../../components/ReCharts/ScatterChart'
import PieChart from '../../components/ReCharts/PieChart'
import {data} from '../../mocks'

class ReChartsPage extends Component {
  render() {
    return (
      <div className="recharts-box">
        <LineChart title="线性图" data={data} />
        <BarChart title="柱状图" data={data} />
        <ScatterChart title="散点图" data={data} />
        <PieChart title="饼图" data={data} />
      </div>
    )
  }
}

export default ReChartsPage
