import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  refreshOrdersRequest,
  refreshOrdersSuccess,
  refreshDeliverymenRequest,
  refreshDeliverymenSuccess,
  refreshRecipientsRequest,
  refreshRecipientsSuccess,
} from './actions';

// ORDERS -------------------------------------------------------

export function* refreshOrders({ payload }) {
  try {
    const { search } = payload;

    const response = yield call(api.get, '/orders', {
      params: {
        product_name: search,
      },
    });

    yield put(refreshOrdersSuccess(response.data));
  } catch (err) {
    toast.error('Não há encomendas cadastradas.');
  }
}

export function* deleteOrder({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/orders/${id}`);

    yield put(refreshOrdersRequest(''));
  } catch (err) {
    toast.error('Não há encomendas cadastradas.');
  }
}

// DELIVERYMEN ---------------------------------------------------

export function* refreshDeliverymen({ payload }) {
  try {
    const { search } = payload;

    const response = yield call(api.get, '/deliverymen', {
      params: {
        deliveryman: search,
      },
    });

    yield put(refreshDeliverymenSuccess(response.data));
  } catch (err) {
    toast.error('Não há entregadores cadastrados.');
  }
}

export function* deleteDeliveryman({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/deliverymen/${id}`);

    yield put(refreshDeliverymenRequest(''));
  } catch (err) {
    toast.error('Não há entregadores cadastrados.');
  }
}

// RECIPIENTS ---------------------------------------------------

export function* refreshRecipients({ payload }) {
  try {
    const { search } = payload;

    const response = yield call(api.get, '/recipients', {
      params: {
        recipient: search,
      },
    });

    yield put(refreshRecipientsSuccess(response.data));
  } catch (err) {
    toast.error('Não há destinatários cadastrados.');
  }
}

export function* deleteRecipient({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/recipients/${id}`);

    yield put(refreshRecipientsRequest(''));
  } catch (err) {
    toast.error('Não há destinatários cadastrados.');
  }
}

export default all([
  takeLatest('@auth/DELETE_RECIPIENT', deleteRecipient),
  takeLatest('@auth/REFRESH_RECIPIENTS_REQUEST', refreshRecipients),
  takeLatest('@auth/DELETE_DELIVERYMAN', deleteDeliveryman),
  takeLatest('@auth/REFRESH_DELIVERYMEN_REQUEST', refreshDeliverymen),
  takeLatest('@auth/DELETE_ORDER', deleteOrder),
  takeLatest('@auth/REFRESH_ORDERS_REQUEST', refreshOrders),
]);
