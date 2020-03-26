export function refreshOrdersRequest(search) {
  return {
    type: '@auth/REFRESH_ORDERS_REQUEST',
    payload: { search },
  };
}

export function refreshOrdersSuccess(orders) {
  return {
    type: '@auth/REFRESH_ORDERS_SUCCESS',
    payload: { orders },
  };
}

export function deleteOrder(id) {
  return {
    type: '@auth/DELETE_ORDER',
    payload: { id },
  };
}

export function refreshDeliverymenSuccess(deliverymen) {
  return {
    type: '@auth/REFRESH_DELIVERYMEN_SUCCESS',
    payload: { deliverymen },
  };
}

export function refreshDeliverymenRequest(search) {
  return {
    type: '@auth/REFRESH_DELIVERYMEN_REQUEST',
    payload: { search },
  };
}

export function deleteDeliveryman(id) {
  return {
    type: '@auth/DELETE_DELIVERYMAN',
    payload: { id },
  };
}

export function createOneOrder(data) {
  return {
    type: '@auth/CREATE_ONEORDER',
    payload: { data },
  };
}

export function removeOneOrder() {
  return {
    type: '@auth/REMOVE_ONEORDER',
  };
}

export function createOneDeliveryman(data) {
  return {
    type: '@auth/CREATE_ONEDELIVERYMAN',
    payload: { data },
  };
}

export function removeOneDeliveryman() {
  return {
    type: '@auth/REMOVE_ONEDELIVERYMAN',
  };
}
