import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header'
import Home from './pages/home'
import ECharts from './pages/echarts'
import ReCharts from './pages/recharts'
import BizCharts from './pages/bizcharts'
import Example from './pages/example'

const AppRouter = () => (
  <Router>
    <div className="box">
      <Header />

      <Route path="/" exact component={Home} />
      <Route path="/echarts" component={ECharts} />
      <Route path="/recharts" component={ReCharts} />
      <Route path="/bizcharts" component={BizCharts} />
      <Route path="/example" component={Example} />
    </div>
  </Router>
);

export default AppRouter;
