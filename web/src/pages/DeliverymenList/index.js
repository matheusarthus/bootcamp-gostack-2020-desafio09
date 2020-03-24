import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import {
  MdAdd,
  MdSearch,
  MdMoreHoriz,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import {
  Container,
  Badge,
  MoreOptions,
  Options,
  OrderTable,
  SubHeader,
} from './styles';

export default function DeliverymenList() {
  const [visible, setVisible] = useState(true);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando entregadores</strong>
        <SubHeader>
          <Form>
            <MdSearch size={20} color="#999999" />
            <Input name="search" placeholder="Buscar por entregadores" />
          </Form>
          <button type="button">
            <div>
              <MdAdd size={22} color="#fff" />
            </div>
            <span>CADASTRAR</span>
          </button>
        </SubHeader>
      </header>

      <OrderTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#01</td>
            <td>
              <img
                src="https://api.adorable.io/avatars/50/abott@adorable.png"
                alt="x"
              />
            </td>
            <td>Karneiro</td>
            <td>karneiro@gmail.com</td>
            <td>
              <div>
                <Badge onClick={handleToggleVisible}>
                  <MdMoreHoriz size={16} color="#c6c6c6" />
                </Badge>
                <MoreOptions visible={visible}>
                  <Options>
                    <button type="button">
                      <MdCreate size={16} color="#4D85EE" />
                      <span>Editar</span>
                    </button>
                    <button type="button">
                      <MdDeleteForever size={16} color="#DE3B3B" />
                      <span>Excluir</span>
                    </button>
                  </Options>
                </MoreOptions>
              </div>
            </td>
          </tr>
        </tbody>
      </OrderTable>
    </Container>
  );
}
