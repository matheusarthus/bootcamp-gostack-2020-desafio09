import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo.svg';

import history from '~/services/history';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content } from './styles';

export default function Header() {
  const userName = useSelector((state) => state.user.profile.name);

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
    history.push('/');
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />
          <Link to="/orderslist">ENCOMENDAS</Link>
          <Link to="/deliverymenlist">ENTREGADORES</Link>
          <Link to="/recipientslist">DESTINATÁRIOS</Link>
          <Link to="/problemslist">PROBLEMAS</Link>
        </nav>

        <aside>
          <h1>{userName}</h1>
          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
