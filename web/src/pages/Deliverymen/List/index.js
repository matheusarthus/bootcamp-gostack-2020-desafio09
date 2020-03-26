/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAdd, MdSearch } from 'react-icons/md';

import history from '~/services/history';

import { ActionMenuDeliverymen } from '~/components/ActionMenu';

import { refreshDeliverymenRequest } from '~/store/modules/user/actions';

import { Container, OrderTable, SubHeader } from './styles';

export default function DeliverymenList() {
  const [search, setSearch] = useState(['']);

  const deliverymen = useSelector((state) => state.user.deliverymen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshDeliverymenRequest(search));
  }, [dispatch, search]);

  return (
    <>
      <Container>
        <header>
          <strong>Gerenciando entregadores</strong>
          <SubHeader>
            <form>
              <MdSearch size={20} color="#999999" />
              <input
                type="text"
                placeholder="Buscar por entregadores"
                value={search}
                onChange={(e) => [setSearch(e.target.value)]}
              />
            </form>
            <button
              type="button"
              onClick={() => {
                history.push('/deliverymenform');
              }}
            >
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
            {deliverymen.map((deliveryman) => (
              <tr key={deliveryman.id}>
                <td>#{deliveryman.id}</td>
                <td>
                  <img
                    src={
                      deliveryman.avatar.url ||
                      'https://api.adorable.io/avatars/50/abott@adorable.png'
                    }
                    alt="img"
                  />
                </td>
                <td>{deliveryman.name}</td>
                <td>{deliveryman.email}</td>
                <td>
                  <ActionMenuDeliverymen deliverymen={deliveryman} />
                </td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
      </Container>
    </>
  );
}
