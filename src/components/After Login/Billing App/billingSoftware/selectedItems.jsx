
// selectedItems.js
const SELECT_ITEM = 'SELECT_ITEM';
const CLEAR_SELECTED_ITEMS = 'CLEAR_SELECTED_ITEMS';

export const selectItem = (item) => ({
  type: SELECT_ITEM,
  payload: item,
});

export const clearSelectedItems = () => ({
  type: CLEAR_SELECTED_ITEMS,
});

const initialState = {
  selectedItems: [],
};

export const selectedItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    case CLEAR_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: [],
      };
    default:
      return state;
  }
};
