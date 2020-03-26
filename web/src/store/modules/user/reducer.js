import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  orders: [],
  oneOrder: null,
  deliverymen: [],
  oneDeliveryman: null,
  recipients: [],
  oneRecipient: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@auth/REFRESH_ORDERS_SUCCESS': {
        draft.orders = action.payload.orders;
        draft.oneOrder = null;
        break;
      }
      case '@auth/CREATE_ONEORDER': {
        draft.oneOrder = action.payload.data;
        break;
      }
      case '@auth/REMOVE_ONEORDER': {
        draft.oneOrder = null;
        break;
      }
      case '@auth/REFRESH_DELIVERYMEN_SUCCESS': {
        draft.deliverymen = action.payload.deliverymen;
        draft.oneDeliveryman = null;
        break;
      }
      case '@auth/CREATE_ONEDELIVERYMAN': {
        draft.oneDeliveryman = action.payload.data;
        break;
      }
      case '@auth/REMOVE_ONEDELIVERYMAN': {
        draft.oneDeliveryman = null;
        break;
      }
      case '@auth/REFRESH_RECIPIENTS_SUCCESS': {
        draft.recipients = action.payload.recipients;
        draft.oneRecipient = null;
        break;
      }
      case '@auth/CREATE_ONERECIPIENT': {
        draft.oneRecipient = action.payload.data;
        break;
      }
      case '@auth/REMOVE_ONERECIPIENT': {
        draft.oneRecipient = null;
        break;
      }
      default:
    }
  });
}
