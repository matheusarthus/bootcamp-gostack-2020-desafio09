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

export function deleteOrderRequest(id) {
  return {
    type: '@auth/DELETE_ORDER_REQUEST',
    payload: { id },
  };
}

export function createDetails(order) {
  return {
    type: '@auth/CREATE_DETAILS',
    payload: { order },
  };
}

export function removeDetails() {
  return {
    type: '@auth/REMOVE_DETAILS',
  };
}
