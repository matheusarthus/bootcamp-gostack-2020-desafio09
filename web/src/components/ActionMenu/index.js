/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import history from '~/services/history';

import { Container, MoreOptions, MoreOptionsProblems } from './styles';

import {
  createOneOrder,
  deleteOrder,
  createOneDeliveryman,
  deleteDeliveryman,
  createOneRecipient,
  deleteRecipient,
  createOneProblem,
  deleteProblem,
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
      'Você realmente deseja cancelar esta encomenda?'
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
      'Você realmente deseja excluir este entregador?'
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

export function ActionMenuRecipients({ recipients }) {
  const [visible, setVisible] = useState(false);
  const { id } = recipients;

  const dispatch = useDispatch();

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleEdit() {
    dispatch(createOneRecipient(recipients));

    history.push('/recipientsedit');
  }

  function handleDelete() {
    const verify = window.confirm(
      'Você realmente deseja excluir este detinatário?'
    );

    if (verify) {
      dispatch(deleteRecipient(id));
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

export function ActionMenuProblems({ problem }) {
  const [visible, setVisible] = useState(false);
  const { id } = problem;

  const dispatch = useDispatch();

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleDetails() {
    dispatch(createOneProblem(problem));
  }

  function handleDelete() {
    const verify = window.confirm(
      'Você realmente deseja cancelar a encomenda relativa a esse problema?'
    );

    if (verify) {
      dispatch(deleteProblem(id));
    }
  }

  return (
    <Container>
      <button className="badge" onClick={handleToggleVisible} type="button">
        <MdMoreHoriz size={20} color="#c6c6c6" />
      </button>

      <MoreOptionsProblems visible={visible}>
        <div>
          <button type="button" onClick={handleDetails}>
            <MdVisibility size={16} color="#8E58E8" />
            <span>Visualizar</span>
          </button>
        </div>
        <div>
          <button type="button" onClick={handleDelete}>
            <MdDeleteForever size={16} color="#DE3B3B" />
            <span>Cancelar encomenda</span>
          </button>
        </div>
      </MoreOptionsProblems>
    </Container>
  );
}

ActionMenuOrders.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

ActionMenuDeliverymen.propTypes = {
  deliverymen: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

ActionMenuRecipients.propTypes = {
  recipients: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

ActionMenuProblems.propTypes = {
  problem: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
