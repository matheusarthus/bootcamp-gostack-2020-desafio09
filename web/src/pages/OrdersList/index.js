import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Delivered, Pending, Started, Canceled } from '~/components/Status';
import ActionMenu from '~/components/ActionMenu';

import {
  Container,
  OrderTable,
  SubHeader,
  FadeBoard,
  DetailsBoard,
} from './styles';

import api from '~/services/api';

export default function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState(['']);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/orders', {
        params: {
          product_name: search,
        },
      });

      setOrders(response.data);
    }

    loadOrders();
  }, [search]);

  return (
    <>
      <Container>
        <header>
          <strong>Gerenciando encomendas</strong>
          <SubHeader>
            <form>
              <MdSearch size={20} color="#999999" />
              <input
                type="text"
                placeholder="Buscar por encomendas"
                value={search}
                onChange={(e) => [setSearch(e.target.value)]}
              />
            </form>
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
            {orders.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.recipient.name}</td>
                <td>
                  <div>
                    <img
                      src={
                        order.deliveryman.avatar.url ||
                        'https://api.adorable.io/avatars/50/abott@adorable.png'
                      }
                      alt="img"
                    />
                    <span>{order.deliveryman.name}</span>
                  </div>
                </td>
                <td>{order.recipient.cidade}</td>
                <td>{order.recipient.estado}</td>
                <td>
                  {order.start_date && order.end_date && !order.canceled_at ? (
                    <Delivered />
                  ) : null}
                  {order.start_date && !order.end_date && !order.canceled_at ? (
                    <Started />
                  ) : null}
                  {order.canceled_at ? <Canceled /> : null}
                  {!order.start_date &&
                  !order.end_date &&
                  !order.canceled_at ? (
                    <Pending />
                  ) : null}
                </td>
                <td>
                  <ActionMenu />
                </td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
      </Container>
      <FadeBoard visible>
        <DetailsBoard>
          <div>
            <strong>Informações da encomenda</strong>
            <span>Rua 8 JA, 449</span>
            <span>Rio Claro - São Paulo</span>
            <span>CEP: 13504-100</span>
          </div>
          <div>
            <strong>Datas</strong>
            <span>Retirada: 12/03/2020</span>
            <span>Entrega: 24/03/2020</span>
          </div>
          <div>
            <strong>Assinatura do destinatário</strong>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="empty espace"
            />
          </div>
        </DetailsBoard>
      </FadeBoard>
    </>
  );
}
