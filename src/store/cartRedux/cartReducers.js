import { addItem, removeItem } from './cartActions';
const initialState = { items: [] };

const cartReducers = (state = initialState, action) => {
  let Items = [...state.items];
  if (action.type === addItem) {
    //add item.

    const itemIndex = Items.findIndex((item) => item.id === action.item.id);

    if (itemIndex > -1) {
      //item in cart already.
      Items = state.items.map((item, index) =>
        index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      //item not in the cart.

      Items.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: Items };
  }
  if (action.type === removeItem) {
    const itemIndex = Items.findIndex((item) => item.id === action.id);

    if (itemIndex > -1) {
      const item = Items[itemIndex];
      if (item.quantity > 1) {
        Items = state.items.map((item, index) =>
          index === itemIndex ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else if (item.quantity === 1) {
        Items = state.items.filter((item) => item.id !== action.id);
      }
    }

    return { ...state, items: Items };
  }
  return state;
};

export default cartReducers;
