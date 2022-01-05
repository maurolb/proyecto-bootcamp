import { types } from "../types/types"

const initialState = {
  checking: true
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case types.authLogin:
      return {
        ...state,
        ...payload,
        checking: false,
      }

    case types.authFinishChecking:
      return {
        ...state,
        checking: false
      }

    case types.authLogout:
      return {
          checking: false
      }

    default:
      return state
  }
}