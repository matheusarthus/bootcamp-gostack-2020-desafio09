// ORDERS -------------------------------------------------------

export function refreshOrdersRequest(search, page, problem) {
  return {
    type: '@auth/REFRESH_ORDERS_REQUEST',
    payload: { search, page, problem },
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

// DELIVERYMEN ---------------------------------------------------

export function refreshDeliverymenRequest(search, page) {
  return {
    type: '@auth/REFRESH_DELIVERYMEN_REQUEST',
    payload: { search, page },
  };
}

export function refreshDeliverymenSuccess(deliverymen) {
  return {
    type: '@auth/REFRESH_DELIVERYMEN_SUCCESS',
    payload: { deliverymen },
  };
}

export function deleteDeliveryman(id) {
  return {
    type: '@auth/DELETE_DELIVERYMAN',
    payload: { id },
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

// RECIPIENTS ---------------------------------------------------

export function refreshRecipientsRequest(search, page) {
  return {
    type: '@auth/REFRESH_RECIPIENTS_REQUEST',
    payload: { search, page },
  };
}

export function refreshRecipientsSuccess(recipients) {
  return {
    type: '@auth/REFRESH_RECIPIENTS_SUCCESS',
    payload: { recipients },
  };
}

export function deleteRecipient(id) {
  return {
    type: '@auth/DELETE_RECIPIENT',
    payload: { id },
  };
}

export function createOneRecipient(data) {
  return {
    type: '@auth/CREATE_ONERECIPIENT',
    payload: { data },
  };
}

export function removeOneRecipient() {
  return {
    type: '@auth/REMOVE_ONERECIPIENT',
  };
}

// PROBLEMS ---------------------------------------------------

export function refreshProblemsRequest(page) {
  return {
    type: '@auth/REFRESH_PROBLEMS_REQUEST',
    payload: { page },
  };
}

export function refreshProblemsSuccess(problems) {
  return {
    type: '@auth/REFRESH_PROBLEMS_SUCCESS',
    payload: { problems },
  };
}

export function deleteProblem(id) {
  return {
    type: '@auth/DELETE_PROBLEM',
    payload: { id },
  };
}

export function createOneProblem(data) {
  return {
    type: '@auth/CREATE_ONEPROBLEM',
    payload: { data },
  };
}

export function removeOneProblem() {
  return {
    type: '@auth/REMOVE_ONEPROBLEM',
  };
}
