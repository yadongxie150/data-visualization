import React, { Component } from 'react';

import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <ul className="home-list">
          <li>Echarts: 基于百度自己研发的Canvas类库ZRender，上手简单，文档清晰</li>
          <li>ReCharts 阿里集团数据技术和产品部开发，基于React 和 D3</li>
          <li>Antv: 蚂蚁金服体验技术部可视化方案</li>
          <li>BizCharts: Antv-G2基于React的封装</li>
          <li>Exmaple: 一些使用React的例子</li>
        </ul>
      </div>
    )
  }
}

export default Home
