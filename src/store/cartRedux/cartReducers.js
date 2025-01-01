import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], notification: null };

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    clearNotification: (state) => {
      state.notification = null;
    },
    updateItemsRed: (state, action) => {
      state.items = action.payload.newItems;
    },
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex > -1) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex > -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else if (state.items[itemIndex].quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

const sendDataReq = async (cart) => {
  const response = await fetch(
    'https://cartdb-3bdd6-default-rtdb.firebaseio.com/cart.json',
    {
      method: 'PUT',
      body: JSON.stringify(cart),
      headers: { 'Content-Type': 'application/json' },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to send data.');
  }
};
// Redux Thunk action
export const sendData = (cart) => {
  return async (dispatch) => {
    // Dispatch notification: Sending
    dispatch(
      addNotification({
        status: 'sending',
        title: 'Data is Sending...',
        message: 'Cart data is being sent to Firebase.',
      })
    );

    try {
      // API call
      await sendDataReq(cart);

      // Dispatch notification: Success
      dispatch(
        addNotification({
          status: 'success',
          title: 'Data Sent!',
          message: 'Cart data was sent to the server successfully.',
        })
      );
    } catch (error) {
      // Dispatch notification: Error
      dispatch(
        addNotification({
          status: 'error',
          title: 'Data Failed to Send.',
          message: error.message,
        })
      );
    }
  };
};

export const {
  addItem,
  removeItem,
  updateItemsRed,
  addNotification,
  clearNotification,
} = cartSlice.actions;
export default cartSlice.reducer;
