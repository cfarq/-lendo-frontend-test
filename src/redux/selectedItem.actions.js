export const SELECT_ITEM = "selectedItem/SELECT_ITEM";
export const CLEAR_SELECTED_ITEM = "selectedItem/CLEAR_SELECTED_ITEM";

export const selectItem = (selectedItem) => ({
  type: SELECT_ITEM,
  selectedItem,
});

export const clearSelectedItem = () => ({
  type: CLEAR_SELECTED_ITEM,
});
