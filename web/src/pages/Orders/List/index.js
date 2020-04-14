/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAdd, MdSearch, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import history from '~/services/history';

import { Delivered, Pending, Started, Canceled } from '~/components/Status';
import { ActionMenuOrders } from '~/components/ActionMenu';

import {
  refreshOrdersRequest,
  removeOneOrder,
} from '~/store/modules/user/actions';

import white from '~/assets/white.png';

import {
  Container,
  OrderTable,
  SubHeader,
  FadeBoard,
  DetailsBoard,
  DivButtons,
} from './styles';

export default function OrdersList() {
  const [search, setSearch] = useState(['']);
  const [problem, setProblem] = useState(false);
  const [page, setPage] = useState(1);

  const orders = useSelector((state) => state.user.orders);
  const oneOrder = useSelector((state) => state.user.oneOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshOrdersRequest(search, page, problem));
  }, [dispatch, search, page, problem]);

  function toggleVisibleFadeBoard() {
    dispatch(removeOneOrder());
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
            <div>
              <form>
                <MdSearch size={20} color="#999999" />
                <input
                  type="text"
                  placeholder="Buscar por encomendas"
                  value={search}
                  onChange={(e) => [setSearch(e.target.value)]}
                />
              </form>
              <form>
                <input
                  type="checkbox"
                  value={problem}
                  onChange={() => [setProblem(!problem)]}
                />
                <span>Somente encomendas com problema</span>
              </form>
            </div>
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
                  <ActionMenuOrders order={order} />
                </td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
        <DivButtons page={page} orders={Object.keys(orders).length}>
          <button
            id="left"
            type="button"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            <MdChevronLeft size={35} color="#999999" />
          </button>
          <span>{page}</span>
          <button
            id="right"
            type="button"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <MdChevronRight size={35} color="#999999" />
          </button>
        </DivButtons>
      </Container>
      <FadeBoard onClick={toggleVisibleFadeBoard} visible={oneOrder}>
        <DetailsBoard>
          <div>
            <strong>Informações da encomenda</strong>
            <span>
              {oneOrder ? oneOrder.recipient.logradouro : ''},{' '}
              {oneOrder ? oneOrder.recipient.numero : ''}
            </span>
            <span>
              {oneOrder ? oneOrder.recipient.cidade : ''}
              {' - '}
              {oneOrder ? oneOrder.recipient.estado : ''}
            </span>
            <span>CEP: {oneOrder ? oneOrder.recipient.cep : ''}</span>
          </div>
          <div>
            <strong>Datas</strong>
            {oneOrder && oneOrder.canceled_at ? (
              <span>ENCOMENDA CANCELADA</span>
            ) : (
              <>
                <span>
                  Retirada: {oneOrder ? formattedDate(oneOrder.start_date) : ''}
                </span>
                <span>
                  Entrega: {oneOrder ? formattedDate(oneOrder.end_date) : ''}
                </span>
              </>
            )}
          </div>
          <div>
            <strong>Assinatura do destinatário</strong>
            <img
              alt="signature"
              src={
                oneOrder
                  ? oneOrder.signature
                    ? oneOrder.signature.url
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
