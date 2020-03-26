/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ActionMenuProblems } from '~/components/ActionMenu';

import {
  refreshProblemsRequest,
  removeOneProblem,
} from '~/store/modules/user/actions';

import { Container, OrderTable, FadeBoard, DetailsBoard } from './styles';

export default function ProblemsList() {
  const problems = useSelector((state) => state.user.problems);
  const oneProblem = useSelector((state) => state.user.oneProblem);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshProblemsRequest());
  }, [dispatch]);

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
