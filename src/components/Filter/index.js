import React from 'react';
import { Filter, FilterContainer, FilterSelect } from './styles';
import './Filter.css';

export default function index() {
  return (
    <Filter>
      <div className="container">
        <FilterContainer>
          Ordenar por:
          <FilterSelect name="">
            <option value="">Recomendados</option>
            <option value="">Tendências</option>
            <option value="">Adicionados Recentemente</option>
            <option value="">Melhor avaliação</option>
            <option value="">Mais Comentados</option>
          </FilterSelect>
        </FilterContainer>
      </div>
    </Filter>
  );
}
