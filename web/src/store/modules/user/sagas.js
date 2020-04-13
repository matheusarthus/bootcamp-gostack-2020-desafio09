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
  refreshProblemsRequest,
  refreshProblemsSuccess,
} from './actions';

// ORDERS -------------------------------------------------------

export function* refreshOrders({ payload }) {
  try {
    const { search, page } = payload;

    const response = yield call(api.get, '/orders', {
      params: {
        product_name: search,
        page,
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

    if (response) {
      toast.success('Encomenda cancelada com sucesso!');
    }

    yield put(refreshOrdersRequest(''));
  } catch (err) {
    toast.error('Não foi possível cancelar a encomenda selecionada.');
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

    if (response) {
      toast.success('Entragador excluído com sucesso!');
    }

    yield put(refreshProblemsRequest(''));
  } catch (err) {
    toast.error('Não foi possível excluir o entregador selecionado.');
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

    if (response) {
      toast.success('Destinatário excluído com sucesso!');
    }

    yield put(refreshRecipientsRequest(''));
  } catch (err) {
    toast.error('Não foi possível excluir o destinatário selecionado.');
  }
}

// PROBLEMS ---------------------------------------------------

export function* refreshProblems() {
  try {
    const response = yield call(api.get, '/problems');

    yield put(refreshProblemsSuccess(response.data));
  } catch (err) {
    toast.error('Não há encomendas com problema');
  }
}

export function* deleteProblem({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `/problem/${id}/cancel-delivery`);

    if (response) {
      toast.success('Encomenda cancelada com sucesso!');
    }
  } catch (err) {
    toast.error('Não foi possível cancelar a encomenda.');
  }
}

export default all([
  takeLatest('@auth/DELETE_PROBLEM', deleteProblem),
  takeLatest('@auth/REFRESH_PROBLEMS_REQUEST', refreshProblems),
  takeLatest('@auth/DELETE_RECIPIENT', deleteRecipient),
  takeLatest('@auth/REFRESH_RECIPIENTS_REQUEST', refreshRecipients),
  takeLatest('@auth/DELETE_DELIVERYMAN', deleteDeliveryman),
  takeLatest('@auth/REFRESH_DELIVERYMEN_REQUEST', refreshDeliverymen),
  takeLatest('@auth/DELETE_ORDER', deleteOrder),
  takeLatest('@auth/REFRESH_ORDERS_REQUEST', refreshOrders),
]);
