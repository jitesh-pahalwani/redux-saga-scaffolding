import {all} from 'redux-saga/effects';
import actionWatcher from './details/saga.js';

export default function* rootSaga(){
  yield all([actionWatcher(),]);
}
