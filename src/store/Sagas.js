import { all, fork } from 'redux-saga/effects'
import AuthSaga from '../services/Auth/AuthSagas'
import TaskSaga from '../services/Task/TaskSagas'

export function* rootSagas() {
  yield all([fork(TaskSaga), fork(AuthSaga)])
}
