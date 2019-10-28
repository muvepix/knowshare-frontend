import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import PostState from './context/post/PostState';

import './App.css';

function App() {
  return (
    <PostState>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </PostState>
  );
}

export default App;
