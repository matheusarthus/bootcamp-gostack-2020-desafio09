import React from 'react';

import { MdBrightness1 } from 'react-icons/md';

import {
  ContainerDelivered,
  ContainerPending,
  ContainerStarted,
  ContainerCanceled,
} from './styles';

export function Delivered() {
  return (
    <ContainerDelivered>
      <MdBrightness1 size={10} color="#2CA42B" />
      <span>ENTREGUE</span>
    </ContainerDelivered>
  );
}

export function Pending() {
  return (
    <ContainerPending>
      <MdBrightness1 size={10} color="#c1bc35" />
      <span>PENDENTE</span>
    </ContainerPending>
  );
}

export function Started() {
  return (
    <ContainerStarted>
      <MdBrightness1 size={10} color="#4d85ee" />
      <span>RETIRADA</span>
    </ContainerStarted>
  );
}

export function Canceled() {
  return (
    <ContainerCanceled>
      <MdBrightness1 size={10} color="#de3b3b" />
      <span>CANCELADA</span>
    </ContainerCanceled>
  );
}
