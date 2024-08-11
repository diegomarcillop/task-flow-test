import { combineReducers } from 'redux'
import TaskReducer from '../services/Task/TaskReducer'

const appReducers = combineReducers({
  task: TaskReducer
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
