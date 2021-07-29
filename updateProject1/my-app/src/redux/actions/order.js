import { SELECT_PRODUCT, CLOSE_MODAL_ORDER } from "../constants/order";

export function selectProduct(product) {
  return {
    type: SELECT_PRODUCT,
    product,
  };
}

export function CloseModalOrder() {
  return {
    type: CLOSE_MODAL_ORDER,
  };
}
