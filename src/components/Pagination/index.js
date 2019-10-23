import React from 'react';

import { PaginationContainer, Pagination } from './styles';

export default function index() {
  return (
    <PaginationContainer>
      <Pagination>
        <p>&laquo;</p>
        <p className="active">1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>&raquo;</p>
      </Pagination>
    </PaginationContainer>
  );
}
