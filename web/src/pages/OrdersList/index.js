/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAdd, MdSearch } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import history from '~/services/history';

import { Delivered, Pending, Started, Canceled } from '~/components/Status';
import ActionMenu from '~/components/ActionMenu';

import {
  refreshOrdersRequest,
  removeDetails,
} from '~/store/modules/auth/actions';

import white from '~/assets/white.png';

import {
  Container,
  OrderTable,
  SubHeader,
  FadeBoard,
  DetailsBoard,
} from './styles';

export default function OrdersList() {
  const [search, setSearch] = useState(['']);

  const orders = useSelector((state) => state.auth.orders);
  const details = useSelector((state) => state.auth.details);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshOrdersRequest(search));
  }, [dispatch, search]);

  function toggleVisibleFadeBoard() {
    dispatch(removeDetails());
  }

  const formattedDate = (fdate) =>
    fdate == null
      ? ''
      : format(parseISO(fdate), "dd '/' MMM '/' yyyy", { locale: pt });

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
            <button
              type="button"
              onClick={() => {
                history.push('/ordersform');
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
                  <ActionMenu order={order} />
                </td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
      </Container>
      <FadeBoard onClick={toggleVisibleFadeBoard} visible={details}>
        <DetailsBoard>
          <div>
            <strong>Informações da encomenda</strong>
            <span>
              {details ? details.recipient.logradouro : ''},{' '}
              {details ? details.recipient.numero : ''}
            </span>
            <span>
              {details ? details.recipient.cidade : ''}
              {' - '}
              {details ? details.recipient.estado : ''}
            </span>
            <span>CEP: {details ? details.recipient.cep : ''}</span>
          </div>
          <div>
            <strong>Datas</strong>
            {details && details.canceled_at ? (
              <span>ENCOMENDA CANCELADA</span>
            ) : (
              <>
                <span>
                  Retirada: {details ? formattedDate(details.start_date) : ''}
                </span>
                <span>
                  Entrega: {details ? formattedDate(details.end_date) : ''}
                </span>
              </>
            )}
          </div>
          <div>
            <strong>Assinatura do destinatário</strong>
            <img
              alt="signature"
              src={
                details
                  ? details.signature
                    ? details.signature.url
                    : white
                  : ''
              }
            />
          </div>
        </DetailsBoard>
      </FadeBoard>
    </>
  );
}
