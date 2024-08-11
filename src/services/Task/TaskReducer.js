import { handleActions } from 'redux-actions'

const INITIAL_STATE = {
  tasks: [],
  loading: {
    getAll: false
  },
  error: {
    getAll: false
  },
  success: {
    getAll: false
  }
}

const TaskReducer = handleActions(
  {
    TASK: {
      CREATE: state => ({ ...state }),

      UPDATE: state => ({ ...state }),

      GET_ALL: state => ({ ...state }),

      SET_STATE: (state, { payload: { keyState, newValue } }) => ({
        ...state,
        [keyState]: newValue
      }),
      SET_ERROR: (state, { payload: { keyState, error } }) => ({
        ...state,
        error: { ...state.error, [keyState]: error }
      }),
      SET_LOADING: (state, { payload: { keyLoading, newValue } }) => ({
        ...state,
        loading: { ...state.loading, [keyLoading]: newValue }
      }),
      SET_SUCCESS: (state, { payload: { keySuccess, newValue } }) => ({
        ...state,
        success: { ...state.success, [keySuccess]: newValue }
      })
    }
  },
  INITIAL_STATE
)

export default TaskReducer
