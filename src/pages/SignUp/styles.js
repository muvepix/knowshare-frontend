import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #7054be, #54b1be);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  width: 40%;
  max-width: 315px;
  text-align: center;

  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #fff;
  margin: 0 0 10px;
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const SubmitButton = styled.button`
  margin: 5px 0 0;
  height: 44px;
  background: #7054be;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#7054be')};
  }
`;

export const LoginButton = styled.a`
  color: #fff;
  margin-top: 15px;
  font-size: 16px;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
