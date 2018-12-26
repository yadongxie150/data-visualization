import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from "react-router-dom"
import cx from 'classnames'

import './index.css'
import Clock from './clock'
import Redux from './redux'
import Hook from './hook'

const navs = [
  { route: '/example/clock', title: 'Clock', des: '模拟一个时钟的实现' },
  { route: '/example/redux', title: 'Redux', des: '在React中使用Redux' },
  { route: '/example/hook', title: 'HOC-Hook', des: 'HOC(高阶组件)和hooks的练习' },
]
export default class Example extends Component {
  render() {
    const { location: { pathname } } = this.props
    return (
      <div className="example-box">
        <h2>React实践之路：</h2>
        <ul>
          {
            navs.map(({ title, des }) => (
              <li key={title}>
                {title}: {des}
              </li>
            ))
          }
        </ul>
        <ul>
          {
            navs.map(({ route, title }) => (
              <li key={route}>
                <Link to={route} className={cx({ active: pathname === route })}>{title}</Link>
              </li>
            ))
          }
        </ul>
        <div className="border-1px ex-test">实现绝对的1px</div>
        <Route exact path="/example/clock" component={Clock} />
        <Route path="/example/redux" component={Redux} />
        <Route path="/example/hook" component={Hook} />
      </div>
    )
  }
}

