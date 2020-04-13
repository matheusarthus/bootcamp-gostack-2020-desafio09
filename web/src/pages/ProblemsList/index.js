/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { ActionMenuProblems } from '~/components/ActionMenu';

import {
  refreshProblemsRequest,
  removeOneProblem,
} from '~/store/modules/user/actions';

import {
  Container,
  OrderTable,
  FadeBoard,
  DetailsBoard,
  DivButtons,
} from './styles';

export default function ProblemsList() {
  const [page, setPage] = useState(1);

  const problems = useSelector((state) => state.user.problems);
  const oneProblem = useSelector((state) => state.user.oneProblem);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshProblemsRequest(page));
  }, [dispatch, page]);

  function toggleVisibleFadeBoard() {
    dispatch(removeOneProblem());
  }

  return (
    <>
      <Container>
        <header>
          <strong>Problemas na entrega</strong>
        </header>

        <OrderTable>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {problems.map((problem) => (
              <tr key={problem.id}>
                <td>#{problem.delivery_id}</td>
                <td>{problem.description}</td>
                <td>
                  <ActionMenuProblems problem={problem} />
                </td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
        <DivButtons page={page} problems={Object.keys(problems).length}>
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
      <FadeBoard onClick={toggleVisibleFadeBoard} visible={oneProblem}>
        <DetailsBoard>
          <div>
            <strong>Informações da encomenda</strong>
            <span>
              ID da encomenda: {oneProblem ? oneProblem.delivery_id : ''}
            </span>
            <span>
              Produto: {oneProblem ? oneProblem.delivery.product : ''}
            </span>
            <span>
              Entregador:{' '}
              {oneProblem ? oneProblem.delivery.deliveryman.name : ''}
            </span>
            <span>
              Destinatário:{' '}
              {oneProblem ? oneProblem.delivery.recipient.name : ''}
            </span>
            <span>
              Endereço:{' '}
              {oneProblem ? oneProblem.delivery.recipient.logradouro : ''},{' '}
              {oneProblem ? oneProblem.delivery.recipient.numero : ''} /{' '}
              {oneProblem ? oneProblem.delivery.recipient.cidade : ''} -{' '}
              {oneProblem ? oneProblem.delivery.recipient.estado : ''}
            </span>
          </div>
          <div>
            <strong>Descrição do problema</strong>
            <span>{oneProblem ? oneProblem.description : ''}</span>
          </div>
        </DetailsBoard>
      </FadeBoard>
    </>
  );
}
