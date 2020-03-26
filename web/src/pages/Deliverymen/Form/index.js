import React, { useState } from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form } from '@rocketseat/unform';

import { toast } from 'react-toastify';

import { Container, FormDeliverymanEdit } from './styles';
import AvatarInput from '../AvatarInput';

import history from '~/services/history';
import api from '~/services/api';

export default function DeliverymenForm() {
  const [deliverymanName, setDeliverymanName] = useState('');
  const [deliverymanEmail, setDeliverymanEmail] = useState('');

  async function updateDeliveryman({ avatar_id }) {
    try {
      let newDeliveryman = {};

      if (deliverymanName !== '') {
        newDeliveryman = { name: deliverymanName };
      } else {
        toast.error('É preciso definir um nome para o entregador.');
      }

      if (deliverymanEmail !== '') {
        newDeliveryman = {
          ...newDeliveryman,
          email: deliverymanEmail,
        };
      } else {
        toast.error('É preciso definir um e-mail para o entregador.');
        return;
      }

      newDeliveryman = { ...newDeliveryman, avatar_id };

      const response = await api.post(`deliverymen`, newDeliveryman);

      if (response) {
        toast.success('Cadastro de entregador criado com sucesso!');
        history.push('/deliverymenlist');
      }
    } catch (error) {
      toast.error('Não foi possível criar o cadastro.');
    }
  }

  return (
    <Container>
      <Form onSubmit={updateDeliveryman}>
        <header>
          <strong>Edição de entregadores</strong>
          <div>
            <button
              type="button"
              onClick={() => {
                history.push('/deliverymenlist');
              }}
            >
              <MdChevronLeft size={16} color="#fff" />
              VOLTAR
            </button>
            <button type="submit">
              <MdCheck size={16} color="#fff" />
              SALVAR
            </button>
          </div>
        </header>
        <FormDeliverymanEdit>
          <AvatarInput name="avatar_id" />
          <div>
            <span>Nome</span>
            <input
              type="text"
              placeholder="Digite um nome..."
              value={deliverymanName}
              onChange={(e) => [setDeliverymanName(e.target.value)]}
            />
            <span>Email</span>
            <input
              type="text"
              placeholder="Digite um e-mail..."
              value={deliverymanEmail}
              onChange={(e) => [setDeliverymanEmail(e.target.value)]}
            />
          </div>
        </FormDeliverymanEdit>
      </Form>
    </Container>
  );
}
