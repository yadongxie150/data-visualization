import React, {Component} from 'react'

export default class LoadingHOC extends Component {
  state = {
    isDelayed: false,
  }

  componentDidMount() {
    setTimeout(() => {
      if(this.props.loading) {
        this.setState({
          isDelayed: true
        })
      }
    }, 2000)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.loading !== this.props.loading){
      this.setState({
        isDelayed: false,
      })
    }
  }

  render(){
    if(this.state.isDelayed) {
      return <div>loading has being delayed</div>
    }
    if(this.props.loading) {
      return <div>Loading...</div>
    }
    return this.props.children
  }
}
