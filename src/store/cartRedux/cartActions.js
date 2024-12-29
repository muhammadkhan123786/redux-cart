//const are defined to use in reducers functions.
export const addItem = 'ADD_ITEM';
export const removeItem = 'REMOVE_ITEM';

export const ADD_ITEM = (item) => ({ type: addItem, item });
export const REMOVE_ITEM = (id) => ({ type: removeItem, id });
