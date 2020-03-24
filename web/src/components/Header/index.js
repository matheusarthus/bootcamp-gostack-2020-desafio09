import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo.svg';

import { Container, Content } from './styles';

export default function Header() {
  const userName = useSelector((state) => state.user.profile.name);

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
          <button type="button">sair do sistema</button>
        </aside>
      </Content>
    </Container>
  );
}
