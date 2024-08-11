import { createActions } from 'redux-actions'

export const { auth } = createActions({
  AUTH: {
    LOGIN: params => params,

    GET_USERS: params => params,

    REGISTER: params => params,

    SET_STATE: (keyState, newValue) => ({ keyState, newValue }),
    SET_ERROR: (keyState, error) => ({ keyState, error }),
    SET_LOADING: (keyLoading, newValue) => ({ keyLoading, newValue }),
    SET_SUCCESS: (keySuccess, newValue) => ({ keySuccess, newValue })
  }
})
