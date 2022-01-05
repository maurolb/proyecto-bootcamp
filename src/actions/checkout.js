import { types } from "../types/types";

export const newOrder = (newOrder) => ({
  type: types.checkoutOrder,
  payload: newOrder
})


export const cleanOrder = () => ({
  type: types.cleanOrder
})

