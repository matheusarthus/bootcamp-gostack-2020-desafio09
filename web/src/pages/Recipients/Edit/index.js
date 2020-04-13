import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import { toast } from 'react-toastify';

import { Container, FormRecipientEdit } from './styles';

import history from '~/services/history';
import api from '~/services/api';

export default function RecipientsEdit() {
  const [recipientName, setRecipientName] = useState('');
  const [recipientStreet, setRecipientStreet] = useState('');
  const [recipientNumber, setRecipientNumber] = useState('');
  const [recipientComplement, setRecipientComplement] = useState('');
  const [recipientCity, setRecipientCity] = useState('');
  const [recipientCountry, setRecipientCountry] = useState('');
  const [recipientZipcode, setRecipientZipcode] = useState('');

  const oneRecipient = useSelector((state) => state.user.oneRecipient);

  async function updateRecipient() {
    try {
      let newRecipient = {};

      if (recipientName !== '') {
        newRecipient = { name: recipientName };
      } else {
        newRecipient = { name: oneRecipient.name };
      }

      if (recipientStreet !== '') {
        newRecipient = { ...newRecipient, logradouro: recipientStreet };
      } else {
        newRecipient = {
          ...newRecipient,
          logradouro: oneRecipient.logradouro,
        };
      }

      if (recipientComplement !== '') {
        newRecipient = { ...newRecipient, complemento: recipientComplement };
      } else {
        newRecipient = {
          ...newRecipient,
          complemento: oneRecipient.complemento,
        };
      }

      if (recipientNumber !== '') {
        newRecipient = { ...newRecipient, numero: recipientNumber };
      } else {
        newRecipient = {
          ...newRecipient,
          numero: oneRecipient.numero,
        };
      }

      if (recipientCity !== '') {
        newRecipient = { ...newRecipient, cidade: recipientCity };
      } else {
        newRecipient = {
          ...newRecipient,
          cidade: oneRecipient.cidade,
        };
      }

      if (recipientCountry !== '') {
        newRecipient = { ...newRecipient, estado: recipientCountry };
      } else {
        newRecipient = {
          ...newRecipient,
          estado: oneRecipient.estado,
        };
      }

      if (recipientZipcode !== '') {
        newRecipient = { ...newRecipient, cep: recipientZipcode };
      } else {
        newRecipient = {
          ...newRecipient,
          cep: oneRecipient.cep,
        };
      }

      console.tron.log(newRecipient);

      const response = await api.put(
        `recipients/${oneRecipient.id}`,
        newRecipient
      );

      if (response) {
        toast.success('Cadastro de destinatário atualizado com sucesso!');
      }
    } catch (error) {
      toast.error('Não foi possível editar o cadastro deste destinatário.');
    }
  }

  return (
    <Container>
      <header>
        <strong>Edição de destinatários</strong>
        <div>
          <button
            type="button"
            onClick={() => {
              history.push('/recipientslist');
            }}
          >
            <MdChevronLeft size={16} color="#fff" />
            VOLTAR
          </button>
          <button type="button" onClick={updateRecipient}>
            <MdCheck size={16} color="#fff" />
            SALVAR
          </button>
        </div>
      </header>
      <FormRecipientEdit>
        <div className="name">
          <span>Nome</span>
          <input
            type="text"
            placeholder={oneRecipient.name}
            value={recipientName}
            onChange={(e) => [setRecipientName(e.target.value)]}
          />
        </div>
        <div className="adressOne">
          <div id="street">
            <span>Logradouro</span>
            <input
              type="text"
              placeholder={oneRecipient.logradouro}
              value={recipientStreet}
              onChange={(e) => [setRecipientStreet(e.target.value)]}
            />
          </div>
          <div id="number">
            <span>Número</span>
            <input
              type="text"
              placeholder={oneRecipient.numero}
              value={recipientNumber}
              onChange={(e) => [setRecipientNumber(e.target.value)]}
            />
          </div>
          <div id="complement">
            <span>Complemento</span>
            <input
              type="text"
              placeholder={oneRecipient.complemento}
              value={recipientComplement}
              onChange={(e) => [setRecipientComplement(e.target.value)]}
            />
          </div>
        </div>
        <div className="adressTwo">
          <div id="city">
            <span>Cidade</span>
            <input
              type="text"
              placeholder={oneRecipient.cidade}
              value={recipientCity}
              onChange={(e) => [setRecipientCity(e.target.value)]}
            />
          </div>
          <div id="country">
            <span>Estado</span>
            <input
              type="text"
              placeholder={oneRecipient.estado}
              value={recipientCountry}
              onChange={(e) => [setRecipientCountry(e.target.value)]}
            />
          </div>
          <div id="zipcode">
            <span>CEP</span>
            <input
              type="text"
              placeholder={oneRecipient.cep}
              value={recipientZipcode}
              onChange={(e) => [setRecipientZipcode(e.target.value)]}
            />
          </div>
        </div>
      </FormRecipientEdit>
      <h1>EU AMO A RAPHAELLA</h1>
      <h2>by Sbuck</h2>
    </Container>
  );
}
