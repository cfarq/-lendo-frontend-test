import { CLEAR_SELECTED_ITEM, SELECT_ITEM } from "./selectedItem.actions";

export const selectedItemReducer = (state = { item: null }, action) => {
  switch (action.type) {
    case CLEAR_SELECTED_ITEM:
      return { item: null };
    case SELECT_ITEM:
      return { item: action.payload };

    default:
      return state;
  }
};
