import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  orders: [],
  details: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/REFRESH_ORDERS_SUCCESS': {
        draft.orders = action.payload.orders;
        draft.details = null;
        break;
      }
      case '@auth/CREATE_DETAILS': {
        draft.details = action.payload.order;
        break;
      }
      case '@auth/REMOVE_DETAILS': {
        draft.details = null;
        break;
      }
      default:
    }
  });
}
