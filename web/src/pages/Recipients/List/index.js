/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAdd, MdSearch } from 'react-icons/md';

import history from '~/services/history';

import { ActionMenuRecipients } from '~/components/ActionMenu';

import { refreshRecipientsRequest } from '~/store/modules/user/actions';

import { Container, OrderTable, SubHeader } from './styles';

export default function RecipientsList() {
  const [search, setSearch] = useState(['']);

  const recipients = useSelector((state) => state.user.recipients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshRecipientsRequest(search));
  }, [dispatch, search]);

  return (
    <>
      <Container>
        <header>
          <strong>Gerenciando destinatários</strong>
          <SubHeader>
            <form>
              <MdSearch size={20} color="#999999" />
              <input
                type="text"
                placeholder="Buscar por destinatário"
                value={search}
                onChange={(e) => [setSearch(e.target.value)]}
              />
            </form>
            <button
              type="button"
              onClick={() => {
                history.push('/recipientsform');
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
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {recipients.map((recipient) => (
              <tr key={recipient.id}>
                <td>#{recipient.id}</td>
                <td>{recipient.name}</td>
                <td>
                  {recipient.logradouro}, {recipient.numero}, {recipient.cidade}{' '}
                  - {recipient.estado}
                </td>
                <td>
                  <ActionMenuRecipients recipients={recipient} />
                </td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
      </Container>
    </>
  );
}
