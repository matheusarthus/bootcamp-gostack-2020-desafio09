import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/fastfeet-logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SigIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Fastfeet" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <div>
          <h1>SEU E-MAIL</h1>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <h1>SUA SENHA</h1>
          <Input
            name="password"
            type="password"
            placeholder="***************"
          />
        </div>

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
