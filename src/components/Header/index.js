import React from 'react'
import cx from 'classnames'
import { Link, withRouter } from "react-router-dom"

import './index.css'

const Header = props => {
  const {location: {pathname}} = props
  const navs = [
    {route: '/', title: 'Home'},
    {route: '/echarts', title: 'ECharts'},
    {route: '/recharts', title: 'ReCharts'},
    {route: '/bizcharts', title: 'BizCharts'},
    {route: '/example', title: 'Example'},
  ]
  return (
    <nav className="nav">
      <ul>
        {
          navs.map(({route, title}) => (
            <li key={route}>
              <Link to={route} className={cx({ active: pathname === route })}>{title}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default withRouter(Header)
