import React, { useState } from 'react';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import MaskedInput from 'react-text-mask';

import { toast } from 'react-toastify';

import { Container, FormRecipientEdit } from './styles';

import history from '~/services/history';
import api from '~/services/api';

export default function RecipientsForm() {
  const [recipientName, setRecipientName] = useState('');
  const [recipientStreet, setRecipientStreet] = useState('');
  const [recipientNumber, setRecipientNumber] = useState('');
  const [recipientComplement, setRecipientComplement] = useState('');
  const [recipientCity, setRecipientCity] = useState('');
  const [recipientCountry, setRecipientCountry] = useState('');
  const [recipientZipcode, setRecipientZipcode] = useState('');

  console.tron.log(recipientZipcode);

  async function updateRecipient() {
    try {
      let newRecipient = {};

      if (recipientName !== '') {
        newRecipient = { name: recipientName };
      } else {
        toast.error('É preciso digitar um nome para destinatário.');
      }

      if (recipientStreet !== '') {
        newRecipient = { ...newRecipient, logradouro: recipientStreet };
      } else {
        toast.error('É preciso digitar um logradouro.');
      }

      if (recipientComplement !== '') {
        newRecipient = { ...newRecipient, complemento: recipientComplement };
      } else {
        toast.error('É preciso digitar um complemento.');
      }

      if (recipientNumber !== '') {
        newRecipient = { ...newRecipient, numero: recipientNumber };
      } else {
        toast.error('É preciso digitar um número.');
      }

      if (recipientCity !== '') {
        newRecipient = { ...newRecipient, cidade: recipientCity };
      } else {
        toast.error('É preciso digitar uma cidade.');
      }

      if (recipientCountry !== '') {
        newRecipient = { ...newRecipient, estado: recipientCountry };
      } else {
        toast.error('É preciso digitar um estado');
      }

      if (recipientZipcode !== '') {
        newRecipient = { ...newRecipient, cep: recipientZipcode };
      } else {
        toast.error('É preciso digitar um CEP');
      }

      const response = await api.post('recipients', newRecipient);

      if (response) {
        toast.success('Cadastro de destinatário atualizado com sucesso!');
        history.push('/recipientslist');
      }
    } catch (error) {
      toast.error('Não foi possível editar o cadastro deste destinatário.');
    }
  }

  return (
    <Container>
      <header>
        <strong>Cadastro de destinatários</strong>
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
            placeholder=""
            value={recipientName}
            onChange={(e) => [setRecipientName(e.target.value)]}
          />
        </div>
        <div className="adressOne">
          <div id="street">
            <span>Logradouro</span>
            <input
              type="text"
              placeholder=""
              value={recipientStreet}
              onChange={(e) => [setRecipientStreet(e.target.value)]}
            />
          </div>
          <div id="number">
            <span>Número</span>
            <input
              type="text"
              placeholder=""
              value={recipientNumber}
              onChange={(e) => [setRecipientNumber(e.target.value)]}
            />
          </div>
          <div id="complement">
            <span>Complemento</span>
            <input
              type="text"
              placeholder=""
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
              placeholder=""
              value={recipientCity}
              onChange={(e) => [setRecipientCity(e.target.value)]}
            />
          </div>
          <div id="country">
            <span>Estado</span>
            <input
              type="text"
              placeholder=""
              value={recipientCountry}
              onChange={(e) => [setRecipientCountry(e.target.value)]}
            />
          </div>
          <div id="zipcode">
            <span>CEP</span>
            <MaskedInput
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
              placeholder=""
              onChange={(e) => [
                setRecipientZipcode(e.target.value.replace('-', '')),
              ]}
            />
          </div>
        </div>
      </FormRecipientEdit>
    </Container>
  );
}
