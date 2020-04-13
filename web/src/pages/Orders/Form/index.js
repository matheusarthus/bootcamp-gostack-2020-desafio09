import React, { useState } from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import { toast } from 'react-toastify';

import {
  Container,
  FormOrderEdit,
  SelectContainer,
  Select,
  FormContainer,
} from './styles';

import history from '~/services/history';
import api from '~/services/api';

export default function OrdersForm() {
  const [deliverymanName, setDeliverymanName] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [productName, setProductName] = useState('');

  async function loadOptionsRecipients(inputValue, callback) {
    const response = await api.get('/recipients', {
      params: {
        recipient: '',
        noLimit: 'true',
      },
    });

    const data = response.data.map((recipient) => ({
      value: recipient.name,
      label: recipient.name,
    }));

    setTimeout(() => {
      callback(data, 1000);
    }, 1000);
  }

  async function loadOptionsDeliverymen(inputValue, callback) {
    const response = await api.get('/deliverymen', {
      params: {
        deliveryman: '',
        noLimit: 'true',
      },
    });

    const data = response.data.map((deliveryman) => ({
      value: deliveryman.name,
      label: deliveryman.name,
    }));

    setTimeout(() => {
      callback(data, 1000);
    }, 1000);
  }

  async function createNewOrder() {
    try {
      let newOrder = {};

      console.tron.log(deliverymanName, recipientName, productName);

      if (deliverymanName !== '') {
        newOrder = { deliveryman_name: deliverymanName.value };
      } else {
        toast.error('É preciso selecionar um entregador.');
      }

      if (recipientName !== '') {
        newOrder = { ...newOrder, recipient_name: recipientName.value };
      } else {
        toast.error('É preciso selecionar um destinatário.');
      }

      if (productName !== '') {
        newOrder = { ...newOrder, product_name: productName };
      } else {
        toast.error('É preciso definir um nome para o produto.');
        return;
      }

      const response = await api.post(`/orders`, newOrder);

      if (response) {
        toast.success('Encomenda criada com sucesso!');
        history.push('/orderslist');
      }
    } catch (error) {
      toast.error('Não foi possível criar a nova encomenda.');
    }
  }

  function getSelectRecipient(id) {
    setRecipientName(id);
  }

  function getSelectDeliveryMan(id) {
    setDeliverymanName(id);
  }

  return (
    <Container>
      <header>
        <strong>Cadastro de encomendas</strong>
        <div>
          <button
            type="button"
            onClick={() => {
              history.push('/orderslist');
            }}
          >
            <MdChevronLeft size={16} color="#fff" />
            VOLTAR
          </button>
          <button type="button" onClick={createNewOrder}>
            <MdCheck size={16} color="#fff" />
            SALVAR
          </button>
        </div>
      </header>
      <FormOrderEdit>
        <SelectContainer>
          <div>
            <span>Destinatário</span>
            <Select
              cacheOptions
              placeholder="Selecione..."
              noOptionsMessage={() => 'Nenhum destinatário encontrado'}
              defaultOptions
              loadOptions={loadOptionsRecipients}
              onChange={(option) => getSelectRecipient(option)}
            />
          </div>
          <div>
            <span>Entregador</span>
            <Select
              cacheOptions
              placeholder="Selecione..."
              noOptionsMessage={() => 'Nenhum destinatário encontrado'}
              defaultOptions
              loadOptions={loadOptionsDeliverymen}
              onChange={(option) => getSelectDeliveryMan(option)}
            />
          </div>
        </SelectContainer>
        <FormContainer>
          <span>Nome do Produto</span>
          <input
            type="text"
            placeholder="Digite o nome do produto"
            value={productName}
            onChange={(e) => [setProductName(e.target.value)]}
          />
        </FormContainer>
      </FormOrderEdit>
    </Container>
  );
}
