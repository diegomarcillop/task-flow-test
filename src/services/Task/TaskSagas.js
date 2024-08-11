import { all, put, putResolve, takeLatest } from 'redux-saga/effects'

import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
import { task as TaskActions } from './TaskActions'

function* create({ payload }) {
  yield put(TaskActions.setLoading('create', true))
  yield put(TaskActions.setSuccess('create', false))

  yield addDoc(collection(db, 'tasks'), payload)

  yield put(TaskActions.setLoading('create', false))
  yield put(TaskActions.setSuccess('create', true))
}

function* getAll() {
  yield putResolve(TaskActions.setLoading('getAll', true))

  let tasks = yield getDocs(collection(db, 'tasks'))
  tasks = tasks.docs?.map(doc => ({ ...doc.data(), id: doc.id }))

  yield put(TaskActions.setState('tasks', tasks || []))
  yield put(TaskActions.setLoading('getAll', false))
}
function* actionWatcher() {
  yield takeLatest(TaskActions.getAll, getAll)
  yield takeLatest(TaskActions.create, create)
}

export default function* TaskSaga() {
  yield all([actionWatcher()])
}
