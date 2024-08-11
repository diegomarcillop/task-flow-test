import { combineReducers } from 'redux'
import AuthReducer from '../services/Auth/AuthReducer'
import TaskReducer from '../services/Task/TaskReducer'

const appReducers = combineReducers({
  task: TaskReducer,
  auth: AuthReducer
})

const rootReducers = () => {
  return (state, action) => {
    if (action.type === 'LOGOUT') {
      state = undefined
    }
    return appReducers(state, action)
  }
}

export default rootReducers
