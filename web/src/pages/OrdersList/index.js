import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import {
  MdAdd,
  MdSearch,
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import { Delivered, Pending, Started, Canceled } from '~/components/Status';

import {
  Container,
  Badge,
  MoreOptions,
  Options,
  OrderTable,
  SubHeader,
} from './styles';

export default function OrdersList() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando encomendas</strong>
        <SubHeader>
          <Form>
            <MdSearch size={20} color="#999999" />
            <Input name="search" placeholder="Buscar por encomendas" />
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
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#01</td>
            <td>Matheus A. Arthus</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="x"
                />
                <span>Karneiro</span>
              </div>
            </td>
            <td>Rio Claro</td>
            <td>São Paulo</td>
            <td>
              <Delivered />
            </td>
            <td>
              <div>
                <Badge onClick={handleToggleVisible}>
                  <MdMoreHoriz size={16} color="#c6c6c6" />
                </Badge>
                <MoreOptions visible={visible}>
                  <Options>
                    <button type="button">
                      <MdVisibility size={16} color="#8E58E8" />
                      <span>Visualizar</span>
                    </button>
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
          <tr>
            <td>#02</td>
            <td>Matheus A. Arthus</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="x"
                />
                <span>Karneiro</span>
              </div>
            </td>
            <td>Rio Claro</td>
            <td>São Paulo</td>
            <td>
              <Pending />
            </td>
            <td>...</td>
          </tr>
          <tr>
            <td>#03</td>
            <td>Matheus A. Arthus</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="x"
                />
                <span>Karneiro</span>
              </div>
            </td>
            <td>Rio Claro</td>
            <td>São Paulo</td>
            <td>
              <Started />
            </td>
            <td>...</td>
          </tr>
          <tr>
            <td>#03</td>
            <td>Matheus A. Arthus</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="x"
                />
                <span>Karneiro</span>
              </div>
            </td>
            <td>Rio Claro</td>
            <td>São Paulo</td>
            <td>
              <Canceled />
            </td>
            <td>...</td>
          </tr>
        </tbody>
      </OrderTable>
    </Container>
  );
}
