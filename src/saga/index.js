import { takeEvery, put, call, select, fork } from 'redux-saga/effects'


function request(url, options) {
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response
    })
    .then(res => res.json())
    .catch(error => console.log(error))
}

const testUrl = '/api/v2/question/hot?period=P1D'
const testData = {
  question: [
    {
      id: 26197689,
      title: "有哪些你准备藏一辈子的秘密？",
      url: "https://www.zhihu.com/question/287642868",
      url_token: "287642868",
      value: 3260707,
    },
    {
      id: 261976891,
      title: "有哪些你准备藏一辈子的秘密3？",
      url: "https://www.zhihu.com/question/287642868",
      url_token: "2876428682",
      value: 32607073,
    },
  ]
}
function* fetchList() {
  try {
    // const res = yield call (
    //   (url) => fetch(url).then(res => res.json()),
    //   testUrl,
    // )

    yield put({
      type: 'Save_List',
      payload: testData.question || [],
    })
  } catch (error) {
    yield put({
      type: 'Save_List',
      payload: [],
    })
  }

  // const state = yield select(state => state.redux)
  // console.log(state)
}

function* mySaga() {
  yield takeEvery('Fetch_List', fetchList)
}

export default mySaga
