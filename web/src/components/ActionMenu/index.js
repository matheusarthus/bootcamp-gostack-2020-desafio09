/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import history from '~/services/history';

import { Container, MoreOptions } from './styles';

import {
  createOneOrder,
  createOneDeliveryman,
  deleteOrder,
  deleteDeliveryman,
} from '~/store/modules/user/actions';

export function ActionMenuOrders({ order }) {
  const [visible, setVisible] = useState(false);
  const { id } = order;

  const dispatch = useDispatch();

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleDetails() {
    dispatch(createOneOrder(order));
  }

  function handleEdit() {
    dispatch(createOneOrder(order));

    history.push('/ordersedit');
  }

  function handleDelete() {
    const verify = window.confirm(
      'Você realmente deseja cancelar essa encomenda?'
    );

    if (verify) {
      dispatch(deleteOrder(id));
    }
  }

  return (
    <Container>
      <button className="badge" onClick={handleToggleVisible} type="button">
        <MdMoreHoriz size={20} color="#c6c6c6" />
      </button>

      <MoreOptions visible={visible}>
        <div>
          <button type="button" onClick={handleDetails}>
            <MdVisibility size={16} color="#8E58E8" />
            <span>Visualizar</span>
          </button>
        </div>
        <div>
          <button type="button" onClick={handleEdit}>
            <MdCreate size={16} color="#4D85EE" />
            <span>Editar</span>
          </button>
        </div>
        <div>
          <button type="button" onClick={handleDelete}>
            <MdDeleteForever size={16} color="#DE3B3B" />
            <span>Excluir</span>
          </button>
        </div>
      </MoreOptions>
    </Container>
  );
}

export function ActionMenuDeliverymen({ deliverymen }) {
  const [visible, setVisible] = useState(false);
  const { id } = deliverymen;

  const dispatch = useDispatch();

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleEdit() {
    dispatch(createOneDeliveryman(deliverymen));

    history.push('/deliverymenedit');
  }

  function handleDelete() {
    const verify = window.confirm(
      'Você realmente deseja excluir esse entregador?'
    );

    if (verify) {
      dispatch(deleteDeliveryman(id));
    }
  }

  return (
    <Container>
      <button className="badge" onClick={handleToggleVisible} type="button">
        <MdMoreHoriz size={20} color="#c6c6c6" />
      </button>

      <MoreOptions visible={visible}>
        <div>
          <button type="button" onClick={handleEdit}>
            <MdCreate size={16} color="#4D85EE" />
            <span>Editar</span>
          </button>
        </div>
        <div>
          <button type="button" onClick={handleDelete}>
            <MdDeleteForever size={16} color="#DE3B3B" />
            <span>Excluir</span>
          </button>
        </div>
      </MoreOptions>
    </Container>
  );
}
