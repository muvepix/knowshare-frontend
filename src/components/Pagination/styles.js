import styled from 'styled-components';

export const PaginationContainer = styled.div`
  width: 100%;
  height: 40px;
  background: #eaeaea;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 5rem;
`;

export const Pagination = styled.div`
  display: inline-block;
  p {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
  }
  .active {
    background-color: #7054be;
    color: white;
    border: 1px solid #7054be;
  }
`;
