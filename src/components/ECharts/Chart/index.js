import React, { Component } from 'react'
import echarts from 'echarts'
import ChinaJson from 'echarts/map/json/china.json'

import './index.css'

class Chart extends Component {
  componentDidMount() {
    this.renderChart()
  }

  getStackSeries = (data, type) => {
    const TYPE_ENUM = {
      stackBar: 'bar',
      stackLine: 'line',
    }
    const stackNames = data.map(item => item.stack).filter((name, index, arr) => arr.indexOf(name) === index)
    const result = stackNames.map(name => ({
      name,
      type: TYPE_ENUM[type],
      stack: '总量', // 根据此字段判断哪些数据需要堆积
      areaStyle: {}, // 线性堆积图显示覆盖面积
      data: data.filter(item => item.stack === name).map(({ money }) => money),
    }))
    return result
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
      case 'stackBar':
      case 'stackLine':
        const AXIS_ENUM = {
          stackBar: 'shadow',
          stackLine: 'cross',
        }
        return {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: AXIS_ENUM[type],        // 默认为直线，可选为：'line' | 'shadow' | 'cross'
            },
          },
          legend: {
            data: data.map(item => item.stack).filter((name, index, arr) => arr.indexOf(name) === index),
          },
          xAxis: {
            type: 'category',
            boundaryGap: type !== 'stackLine', // false: 刻度和名字对齐, true：名字在刻度中居中
            data: data.map(item => item.year).filter((name, index, arr) => arr.indexOf(name) === index),
          },
          yAxis: {
            type: 'value'
          },
          series: this.getStackSeries(data, type),
        }
      case 'treemap':
        return {
          series: [
            {
              name: '树状图',
              leafDepth: 1, // 需要展开的层级，默认无需下坠
              roam: false,
              data,
              type,
            },
          ],
        }
      case 'map': // 需要主动引入地图的JSON数据
        return {
          tooltip: {
            trigger: 'item'
          },
          visualMap: {
            min: 0,
            max: 1,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],           // 文本，默认为数值文本
            calculable: true
          },
          series: [
            {
              name: '地图',
              type,
              map: 'china',
              roam: false,
              data,
            },
          ],
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

  renderChart = () => {
    const option = this.getOption()
    echarts.registerMap('china', ChinaJson)
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
