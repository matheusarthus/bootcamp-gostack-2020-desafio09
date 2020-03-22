import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/fastfeet-logo.svg';

export default function SigIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Fastfeet" />

      <Form onSubmit={handleSubmit}>
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
