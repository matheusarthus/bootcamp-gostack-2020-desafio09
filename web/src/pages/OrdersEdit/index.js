import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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

export default function OrdersEdit() {
  const [deliverymanName, setDeliverymanName] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [productName, setProductName] = useState('');

  const details = useSelector((state) => state.auth.details);

  async function loadOptionsRecipients(inputValue, callback) {
    const response = await api.get('/recipients', {
      params: {
        recipient: '',
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

  async function updateOrder() {
    try {
      let newOrder = {};

      console.tron.log(deliverymanName, recipientName, productName);

      if (deliverymanName !== '') {
        newOrder = { deliveryman_name: deliverymanName.value };
      } else {
        newOrder = { deliveryman_name: details.deliveryman.name };
      }

      if (recipientName !== '') {
        newOrder = { ...newOrder, recipient_name: recipientName.value };
      } else {
        newOrder = { ...newOrder, recipient_name: details.recipient.name };
      }

      if (productName !== '') {
        newOrder = { ...newOrder, product_name: productName };
      } else {
        newOrder = { ...newOrder, product_name: details.product };
      }

      const response = await api.put(`/orders/${details.id}`, newOrder);

      if (response) {
        toast.success('Encomenda editada com sucesso!');
      }
    } catch (error) {
      toast.error('Não foi possível editar e encomenda.');
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
        <strong>Edição de encomendas</strong>
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
          <button type="button" onClick={updateOrder}>
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
              placeholder={details.recipient.name}
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
              placeholder={details.deliveryman.name}
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
            placeholder={details.product}
            value={productName}
            onChange={(e) => [setProductName(e.target.value)]}
          />
        </FormContainer>
      </FormOrderEdit>
    </Container>
  );
}
