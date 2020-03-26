import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SigIn from '../pages/SigIn';

import OrdersList from '../pages/Orders/List';
import OrdersForm from '../pages/Orders/Form';
import OrdersEdit from '../pages/Orders/Edit';

import DeliverymenList from '../pages/Deliverymen/List';
import DeliverymenForm from '../pages/Deliverymen/Form';
import DeliverymenEdit from '../pages/Deliverymen/Edit';

import RecipientsList from '../pages/Recipients/List';
import RecipientsForm from '../pages/Recipients/Form';
import RecipientsEdit from '../pages/Recipients/Edit';

import ProblemsList from '../pages/ProblemsList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      <Route path="/orderslist" component={OrdersList} isPrivate />
      <Route path="/deliverymenlist" component={DeliverymenList} isPrivate />
      <Route path="/recipientslist" component={RecipientsList} isPrivate />
      <Route path="/problemslist" component={ProblemsList} isPrivate />
      <Route path="/deliverymenform" component={DeliverymenForm} isPrivate />
      <Route path="/recipientsform" component={RecipientsForm} isPrivate />
      <Route path="/ordersform" component={OrdersForm} isPrivate />
      <Route path="/deliverymenedit" component={DeliverymenEdit} isPrivate />
      <Route path="/recipientsedit" component={RecipientsEdit} isPrivate />
      <Route path="/ordersEdit" component={OrdersEdit} isPrivate />
    </Switch>
  );
}
