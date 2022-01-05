import { types } from "../types/types";

export const cartAddNew = (product) => ({
  type: types.cartAddItem,
  payload: product
})

export const cartUpdate = (product) => ({
  type: types.cartUpdateItem,
  payload: product
})

export const cartDelete = (productId) => ({
  type: types.cartDeleteItem,
  payload: productId
})

export const cartClear = () => ({
  type: types.cartClearItems
})