import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './Reducers'
import { rootSagas } from './Sagas'

const sagaMiddleware = createSagaMiddleware()
let middleware = [sagaMiddleware]

const store = createStore(rootReducer(), composeWithDevTools(applyMiddleware(...middleware)))
sagaMiddleware.run(rootSagas)

export default store
