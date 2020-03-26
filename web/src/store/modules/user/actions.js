// ORDERS -------------------------------------------------------

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

export function refreshDeliverymenRequest(search) {
  return {
    type: '@auth/REFRESH_DELIVERYMEN_REQUEST',
    payload: { search },
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

export function refreshRecipientsRequest(search) {
  return {
    type: '@auth/REFRESH_RECIPIENTS_REQUEST',
    payload: { search },
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
