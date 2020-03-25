import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  signInSuccess,
  signFailure,
  refreshOrdersRequest,
  refreshOrdersSuccess,
} from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/orderslist');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

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

    console.tron.log(response);

    yield put(refreshOrdersRequest(''));
  } catch (err) {
    toast.error('Não há encomendas cadastradas.');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/DELETE_ORDER_REQUEST', deleteOrder),
  takeLatest('@auth/REFRESH_ORDERS_REQUEST', refreshOrders),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
