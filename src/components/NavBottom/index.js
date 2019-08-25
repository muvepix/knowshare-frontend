import React from 'react';
import { Link } from 'react-router-dom';

import { NavBottom, NavBottomContainer } from './styles';

export default function index() {
  return (
    <NavBottom>
      <div className="container">
        <NavBottomContainer>
          <Link to>
            <p className="selected">Desenvolvimento Web</p>
          </Link>
          <Link to>
            <p>Javascript</p>
          </Link>
          <Link to>
            <p>PHP</p>
          </Link>
          <Link to>
            <p>React</p>
          </Link>
          <Link to>
            <p>Node</p>
          </Link>
          <Link to>
            <p>Banco de dados</p>
          </Link>
          <Link to>
            <p>Utilidades</p>
          </Link>
          <Link to>
            <p>Outros</p>
          </Link>
        </NavBottomContainer>
      </div>
    </NavBottom>
  );
}
