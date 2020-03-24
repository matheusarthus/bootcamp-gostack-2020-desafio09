import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, MoreOptions } from './styles';

import { showDetails } from '~/store/modules/auth/actions';

export default function ActionMenu({ order }) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleDetails() {
    dispatch(showDetails(order));
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
          <Link to="/">
            <MdCreate size={16} color="#4D85EE" />
            <span>Editar</span>
          </Link>
        </div>
        <div>
          <button type="button">
            <MdDeleteForever size={16} color="#DE3B3B" />
            <span>Excluir</span>
          </button>
        </div>
      </MoreOptions>
    </Container>
  );
}
