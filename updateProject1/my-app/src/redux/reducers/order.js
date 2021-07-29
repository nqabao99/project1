import produce from "immer";
import { SELECT_PRODUCT, CLOSE_MODAL_ORDER } from "../constants/order";

export const initialState = {
  listProductOrder: [],
  infoProductSelect: {},
  statusFlags: {
    openModal: false,
  },
  log: {
    error: "",
  },
};

/* eslint-disable default-case, no-param-reassign */
const orderReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case SELECT_PRODUCT: {
        draft.statusFlags.openModal = true;
        draft.infoProductSelect = action.product;
        break;
      }

      case CLOSE_MODAL_ORDER: {
        draft.statusFlags.openModal = false;
        draft.infoProductSelect = {};
        break;
      }
    }
  });

export default orderReducer;
