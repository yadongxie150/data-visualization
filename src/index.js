import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import Router from './routes'
import mySaga from './saga'
import './index.css'

const initialState = {
  redux: {
    isLoading: false,
    list: [],
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'Fetch_List':
      return {
        ...state,
        redux: {
          isLoading: true,
          list: [],
        }
      }
    case 'Save_List':
      return {
        ...state,
        redux: {
          isLoading: false,
          list: action.payload,
        }
      }
    default:
      return state
  }
}

const sagaMiddleware = createSagaMiddleware()


const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
