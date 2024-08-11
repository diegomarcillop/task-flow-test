import { handleActions } from 'redux-actions'

const INITIAL_STATE = {
  isAuth: false,
  users: [],
  user: undefined,
  loading: {
    register: false
  },
  error: {
    register: false
  },
  success: {
    register: false
  }
}

const AuthReducer = handleActions(
  {
    AUTH: {
      GET_USERS: state => ({ ...state }),

      REGISTER: state => ({ ...state }),

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

export default AuthReducer
