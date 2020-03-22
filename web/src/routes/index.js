import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SigIn from '../pages/SigIn';
import OrdersList from '../pages/OrderList';
import DeliverymenList from '../pages/DeliverymenList';
import RecipientsList from '../pages/RecipientsList';
import ProblemsList from '../pages/ProblemsList';
import DeliverymenForm from '../pages/DeliverymenForm';
import RecipientsForm from '../pages/RecipientsForm';
import OrdersForm from '../pages/OrdersForm';
import DeliverymenEdit from '../pages/DeliverymenEdit';
import RecipientsEdit from '../pages/RecipientsEdit';
import OrdersEdit from '../pages/OrdersEdit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      <Route path="/orderslist" component={OrdersList} isPrivate />
      <Route path="/deliverymenlist" component={DeliverymenList} isPrivate />
      <Route path="/recipientlist" component={RecipientsList} isPrivate />
      <Route path="/problemslist" component={ProblemsList} isPrivate />
      <Route path="/deliverymenform" component={DeliverymenForm} isPrivate />
      <Route path="/recipientsform" component={RecipientsForm} isPrivate />
      <Route path="/OrdersForm" component={OrdersForm} isPrivate />
      <Route path="/deliverymenedit" component={DeliverymenEdit} isPrivate />
      <Route path="/recipientsedit" component={RecipientsEdit} isPrivate />
      <Route path="/ordersEdit" component={OrdersEdit} isPrivate />
    </Switch>
  );
}
