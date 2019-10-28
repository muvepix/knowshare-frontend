import React from 'react';

import {
  Container,
  Form,
  Content,
  Input,
  SubmitButton,
  LoginButton,
} from './styles';

export default function SignUp() {
  return (
    <Container>
      <Form>
        <Input type="text" placeholder="Seu nome" />
        <Input type="email" placeholder="Seu e-mail" />
        <Input type="password" placeholder="Sua senha" />
        <SubmitButton>Criar conta</SubmitButton>
        <LoginButton>Já tenho uma conta</LoginButton>
      </Form>
    </Container>
  );
}
