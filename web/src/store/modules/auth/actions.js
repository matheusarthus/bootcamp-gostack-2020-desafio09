export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

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

export function createDetails(data) {
  return {
    type: '@auth/CREATE_DETAILS',
    payload: { data },
  };
}

export function removeDetails() {
  return {
    type: '@auth/REMOVE_DETAILS',
  };
}
