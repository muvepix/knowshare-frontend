import styled from 'styled-components';

export const Filter = styled.div`
  width: 100%;
  height: 6vh;
  min-height: 6vh;
  padding: 0 !important;
  box-shadow: 0px 1px 1px rgba(190, 190, 190, 0.5),
    inset 0px 4px 4px rgba(0, 0, 0, 0);
  min-height: 40px;
`;

export const FilterContainer = styled.div`
  height: 6vh;
  min-height: 40px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: start;
  a {
    text-decoration: none;
  }
  a p {
    font-size: 14px;
    font-weight: 500;
    color: #1f1f1f;
    margin-right: 16px;
  }
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    flex-wrap: wrap;
    a p {
      font-size: 12px !important;
      font-weight: 500;
      color: #1f1f1f;
    }
  }
`;

export const FilterSelect = styled.select`
  font-family: 'Raleway', sans-serif;
  margin-left: 12px;
  width: 120px;
  height: 28px;
  background: transparent;
  border: none;
  box-shadow: 0 15px 10px -10px rgba(0, 0, 0, 0.1);
  border: 0.5px solid rgba(190, 190, 190, 0.35);
`;
