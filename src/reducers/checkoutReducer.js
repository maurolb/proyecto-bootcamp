import { types } from "../types/types"

const initialState = {
  order: ''
}

export const checkoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case types.checkoutOrder:
    return {
      ...state,
      order: payload
    }

  case types.cleanOrder:
    return {
      ...state,
      order: ''
    }

  default:
    return state
  }
}
