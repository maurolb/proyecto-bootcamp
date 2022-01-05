import { types } from "../types/types"

const initialState = {
  items: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case types.cartAddItem:
      const item = payload
      let newItems = state.items
      const founded = newItems.find((i) => i.id === item.id);
      if (founded)
				newItems = newItems.map((i) => {
					if (i.id === item.id) {
						return {
							...item,
							quantity: ++i.quantity,
						};
					} else {
						return i;
					}
				});
      else
      newItems.push({
        ...item,
        quantity: 1,
      });

      return {
        ...state,
        items: newItems
      }

    case types.cartUpdateItem:
      return {
        ...state,
				items: state.items
					.map((it) => (it.id === payload.id ? payload : it))
					.filter((it) => it.quantity > 0),
      }

    case types.cartDeleteItem:
      return {
				...state,
				items: state.items.filter((it) => it.id !== payload),
			};

    case types.cartClearItems:
      return {
        ...state,
        items: []
      }

    default:
      return state
  }
}
