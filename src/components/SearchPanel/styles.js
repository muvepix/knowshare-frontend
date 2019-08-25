import styled from 'styled-components';

export const SearchPanel = styled.div`
  width: 100%;
  height: 15vh;
  min-height: 200px;
  background: linear-gradient(
    68.23deg,
    #7054be 12.15%,
    rgba(84, 177, 190, 0.8) 129.28%
  );
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    height: 25vh;
  }
`;
export const SearchPanelTitle = styled.div`
  p {
    color: #f1f1f1;
    font-size: 1.2em;
  }
  h1 {
    color: #f1f1f1;
    font-size: 2.6em;
    font-weight: 500;
  }
`;
export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const InputFilled = styled.input`
  width: 420px;
  height: 52px;
  border-radius: 37px;
  min-height: 42px;
  ::placeholder {
    font-family: 'Raleway', sans-serif;
    padding-left: 22px;
  }
  @media only screen and (max-width: 1200px) {
    width: 320px;
    height: 42px;
    border-radius: 37px;
  }
`;
export const SearchIcon = styled.img`
  position: absolute;
  right: 22px;
  width: 30px;
  height: 22px;
`;
