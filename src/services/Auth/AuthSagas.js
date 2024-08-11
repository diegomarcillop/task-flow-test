import { all, put, select, takeLatest } from 'redux-saga/effects'

import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
import { auth as AuthActions } from './AuthActions'

function* getUsers() {
  yield put(AuthActions.setLoading('getUsers', true))

  let users = yield getDocs(collection(db, 'users'))
  users = users.docs?.map(doc => ({ ...doc.data(), id: doc.id }))

  yield put(AuthActions.setState('users', users || []))
  yield put(AuthActions.setLoading('getUsers', false))
}

function* login({ payload }) {
  yield put(AuthActions.setLoading('getUsers', true))
  yield put(AuthActions.setSuccess('getUsers', false))

  const { users } = yield select(state => state.auth)

  const user = users?.find(e => e.email === payload.email && e.password === payload.password)

  if (user) {
    yield put(AuthActions.setState('isAuth', true))
    yield put(AuthActions.setState('user', user))
    yield put(AuthActions.setSuccess('login', true))
    yield put(AuthActions.setError('login', false))
  } else {
    yield put(AuthActions.setSuccess('login', false))
    yield put(AuthActions.setError('login', true))
  }

  yield put(AuthActions.setLoading('login', false))
}

function* register({ payload }) {
  yield put(AuthActions.setLoading('register', true))
  yield put(AuthActions.setSuccess('register', false))

  yield addDoc(collection(db, 'users'), payload)

  yield put(AuthActions.setLoading('register', false))
  yield put(AuthActions.setSuccess('register', true))
}

function* actionWatcher() {
  yield takeLatest(AuthActions.getUsers, getUsers)
  yield takeLatest(AuthActions.login, login)
  yield takeLatest(AuthActions.register, register)
}

export default function* AuthSaga() {
  yield all([actionWatcher()])
}
