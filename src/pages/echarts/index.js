import React, { Component } from 'react';

import Chart from '../../components/ECharts/Chart'
import './index.css'
import {data} from '../../mocks'

class EchartsPage extends Component {
  render() {
    return (
      <div className="echarts-box">
        <Chart title="线性图" type="line" data={data} />
        <Chart title="散点图" type="scatter" data={data} />
        <Chart title="柱状图" type="bar" data={data} />
        <Chart title="饼图" type="pie" data={data} />
        <Chart title="漏斗图" type="funnel" data={data} />
        <Chart title="雷达图" type="radar" data={data} />
      </div>
    )
  }
}

export default EchartsPage
