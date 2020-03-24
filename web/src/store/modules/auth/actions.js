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

export function showDetails(order) {
  return {
    type: '@auth/SHOW_DETAILS',
    payload: { order },
  };
}

export function removeDetails() {
  return {
    type: '@auth/REMOVE_DETAILS',
  };
}
