import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  refreshOrdersRequest,
  refreshOrdersSuccess,
  refreshDeliverymenRequest,
  refreshDeliverymenSuccess,
} from './actions';

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
    toast.error('Não há encomendas cadastradas.');
  }
}

export function* deleteOrder({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/orders/${id}`);

    console.tron.log(response);

    yield put(refreshOrdersRequest(''));
  } catch (err) {
    toast.error('Não há encomendas cadastradas.');
  }
}

export function* deleteDeliveryman({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/deliverymen/${id}`);

    console.tron.log(response);

    yield put(refreshDeliverymenRequest(''));
  } catch (err) {
    toast.error('Não há encomendas cadastradas.');
  }
}

export default all([
  takeLatest('@auth/DELETE_DELIVERYMAN', deleteDeliveryman),
  takeLatest('@auth/DELETE_ORDER', deleteOrder),
  takeLatest('@auth/REFRESH_DELIVERYMEN_REQUEST', refreshDeliverymen),
  takeLatest('@auth/REFRESH_ORDERS_REQUEST', refreshOrders),
]);
