import React, { Component } from 'react';

import ReduxComponent from '../../components/Redux'
import DelayFunc from '../../components/Loading'

export default class Index extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 4000)
  }
  
  render() {
    const HOCComponent = DelayFunc('loading', 2000)(ReduxComponent)
    return (
      <div>
        <h2>React HOC 实现</h2>
        <HOCComponent loading={this.state.loading} />
        <h2>React Hook 实现</h2>
        <ReduxComponent />
      </div>
    )
  }
}
