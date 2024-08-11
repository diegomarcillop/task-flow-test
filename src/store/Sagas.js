import { all, fork } from 'redux-saga/effects'
import TaskSaga from '../services/Task/TaskSagas'

export function* rootSagas() {
  yield all([fork(TaskSaga)])
}
