import React, { Component } from 'react';

import './index.css'
import LineChart from '../../components/BizCharts/LineChart'
import ColumnChart from '../../components/BizCharts/ColumnChart'
import StackChart from '../../components/BizCharts/ColumnChart/Stack'
import PieChart from '../../components/BizCharts/PieChart'
import SunburstChart from '../../components/BizCharts/PieChart/Sunburst'
import {data, stackData} from '../../mocks'

class BizChartsPage extends Component {
  render() {
    return (
      <div className="bizchart-box">
        <LineChart title="线性图" data={data} />
        <ColumnChart title="柱状图" data={data} />
        <ColumnChart title="条形图" type="bar" data={data} />
        <StackChart title="堆积图" data={stackData} />
        <PieChart title="饼图" data={data} />
        <SunburstChart title="旭日图" />
      </div>
    )
  }
}

export default BizChartsPage
