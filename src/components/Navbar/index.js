import React from 'react';

import Button from '../Button';

import {
  Nav,
  Navbar,
  Logo,
  NavLinksLeft,
  LoginLink,
  NavLinksRight,
  Burger,
} from './styles';

import logo from '../../images/logo.png';

import './Navbar.css';

function index() {
  return (
    <div className="container-full">
      <Nav>
        <Navbar className="container">
          <div>
            <Logo to="">
              <img src={logo} alt="" />
              <h4>KnowShare</h4>
            </Logo>
          </div>
          <NavLinksLeft>
            <li>
              <a href="">Quem somos</a>
            </li>
            <li>
              <a href="">Como contribuir</a>
            </li>
            <li>
              <a href="">Ajuda</a>
            </li>
          </NavLinksLeft>
          <NavLinksRight>
            <li>
              <LoginLink to="/login">Login</LoginLink>
            </li>
            <li>
              <Button outline linkTo="/register">
                Cadastrar
              </Button>
            </li>
          </NavLinksRight>
          <Burger>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </Burger>
        </Navbar>
      </Nav>
    </div>
  );
}
export default index;
