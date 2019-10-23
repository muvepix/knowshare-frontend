import React from 'react';

import {
  SearchPanel,
  SearchPanelTitle,
  SearchContainer,
  InputFilled,
  SearchIcon,
} from './styles';

import searchIcon from '../../images/search.svg';

// import './SearchPanel.css';

export default function index() {
  return (
    <SearchPanel>
      <SearchPanelTitle>
        <h1>Tá bombando!</h1>
        <p>Confira o ranking dos melhores conteúdos.</p>
      </SearchPanelTitle>

      <SearchContainer>
        <SearchIcon src={searchIcon} alt="" />
        <InputFilled
          type="text"
          name="search"
          placeholder="Faça sua busca aqui..."
        />
      </SearchContainer>
    </SearchPanel>
  );
}
