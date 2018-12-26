import React, { Component } from 'react'

// 1. const Clock = ({ time }) => (<div>{time}</div>)

// 2. class Clock extends React.PureComponent {
//   render() {
//     const {time} = this.props
//     return (
//       <div>{time}</div>
//     )
//   }
// }

// 3. v16.6.0以后版本可用
const Clock = React.memo(({ time }, context) => {
  return (<div>{time || '开始启动'}</div>)
})

// 高阶组件
const withLogin = (Component) => {
  const NewComponent = (props) => {
    // props为 高阶组件包裹后返回组件 的props
    const { isLogin } = props
    if (!isLogin) {
      return null
    }
    return (
      <Component {...props} />
    )
  }
  return NewComponent
}

// context模式
const ThemeContext = React.createContext()
const ThemeProvider = ThemeContext.Provider
const ThemeConsumer = ThemeContext.Consumer

const Control = ({ actived, onStart, onPause, onInit, onCount }) => {
  if (actived) {
    return (
      <React.Fragment>
        <button onClick={onCount}>计次</button>
        <button onClick={onPause}>停止</button>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <button onClick={onInit}>复位</button>
        <button onClick={onStart('d-start')}>启动</button>
      </React.Fragment>
    )
  }
}
const List = ({ list }) => list.map((item, i) => <div key={i}>{i + 1}: {item}</div>)

const IsLoginClock = withLogin(Clock)
const IsLoginControl = withLogin(Control)

class Home extends Component {
  state = {
    isActive: false,
    currentTime: null,
    list: [],
  }

  start = a => e => {
    console.log('start')
    this.setState({
      isActive: true,
      currentTime: new Date().getTime(),
    })
    this.interval = setInterval(() => {
      this.setState({ currentTime: new Date().getTime() })
    }, 1)
  }

  pause = () => {
    console.log('pause')
    clearInterval(this.interval)
    this.setState({
      isActive: false,
    })
  }

  init = () => {
    console.log('init')
    this.setState({
      isActive: false,
      currentTime: null,
    })
  }

  count = () => {
    console.log('count')
    const { list, currentTime } = this.state
    this.setState({
      list: [...list, currentTime],
    })
  }

  render() {
    const { isActive, currentTime, list } = this.state
    return (
      <div>
        <IsLoginClock isLogin={true} time={currentTime} />
        <IsLoginControl
          isLogin={true}
          actived={isActive}
          onStart={this.start}
          onPause={this.pause}
          onInit={this.init}
          onCount={this.count}
        />
        <List list={list} />
      </div>
    )
  }
}

export default Home
