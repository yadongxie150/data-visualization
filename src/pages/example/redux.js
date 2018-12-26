import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

class Index extends Component {
  componentDidMount() {
    this.props.fetchList()
  }

  render() {
    const { isLoading, list } = this.props
    return (
      <div className="redux-box">
        {
          isLoading ? <div>正在加载中。。。</div> :
            <div>
              {
                list.map(({ title, id }) => <div key={id}>{title}</div>)
              }
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.redux.isLoading,
  list: state.redux.list,
})

const mapDispatchToProps = (dispatch) => ({
  fetchList: () => dispatch({ type: 'Fetch_List' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
