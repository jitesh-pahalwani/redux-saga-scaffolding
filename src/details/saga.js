import {put, takeEvery} from 'redux-saga/effects';

function* fetchString(data){
  const apiResult = yield fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => {
    return res.json();
  });
  yield put({type: 'RESULT_FETCHED', payload: apiResult});
}

export default function* actionWatcher(){
  yield takeEvery('FETCH_STRING_API', fetchString);
}
