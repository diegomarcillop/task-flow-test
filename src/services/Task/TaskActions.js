import { createActions } from 'redux-actions'

export const { task } = createActions({
  TASK: {
    CREATE: params => params,

    UPDATE: params => params,

    GET_ALL: () => ({}),

    SET_STATE: (keyState, newValue) => ({ keyState, newValue }),
    SET_ERROR: (keyState, error) => ({ keyState, error }),
    SET_LOADING: (keyLoading, newValue) => ({ keyLoading, newValue }),
    SET_SUCCESS: (keySuccess, newValue) => ({ keySuccess, newValue })
  }
})
