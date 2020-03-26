import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form } from '@rocketseat/unform';

import { toast } from 'react-toastify';

import { Container, FormDeliverymanEdit } from './styles';
import AvatarInput from '../AvatarInput';

import history from '~/services/history';
import api from '~/services/api';

export default function DeliverymenEdit() {
  const [deliverymanName, setDeliverymanName] = useState('');
  const [deliverymanEmail, setDeliverymanEmail] = useState('');

  const oneDeliveryman = useSelector((state) => state.user.oneDeliveryman);

  async function updateDeliveryman({ avatar_id }) {
    try {
      let newDeliveryman = {};

      if (deliverymanName !== '') {
        newDeliveryman = { name: deliverymanName };
      } else {
        newDeliveryman = { name: oneDeliveryman.name };
      }

      if (deliverymanEmail !== '') {
        newDeliveryman = {
          ...newDeliveryman,
          email: deliverymanEmail,
        };
      }

      newDeliveryman = { ...newDeliveryman, avatar_id };

      const response = await api.put(
        `deliverymen/${oneDeliveryman.id}`,
        newDeliveryman
      );

      if (response) {
        toast.success('Cadastro de entregador atualizado com sucesso!');
      }
    } catch (error) {
      toast.error('Não foi possível editar o cadastro deste entregador.');
    }
  }

  return (
    <Container>
      <Form initialData={oneDeliveryman} onSubmit={updateDeliveryman}>
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
              placeholder={oneDeliveryman.name}
              value={deliverymanName}
              onChange={(e) => [setDeliverymanName(e.target.value)]}
            />
            <span>Email</span>
            <input
              type="text"
              placeholder={oneDeliveryman.email}
              value={deliverymanEmail}
              onChange={(e) => [setDeliverymanEmail(e.target.value)]}
            />
          </div>
        </FormDeliverymanEdit>
      </Form>
    </Container>
  );
}
