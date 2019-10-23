import styled from 'styled-components';

export const NavBottom = styled.div`
  width: 100%;
  height: 60px;
  min-height: 60px;
  padding: 0 !important;
  box-shadow: 0px 1px 1px rgba(190, 190, 190, 0.5),
    inset 0px 4px 4px rgba(0, 0, 0, 0);
  min-height: 40px;
`;

export const NavBottomContainer = styled.div`
  height: 60px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  a,
  p {
    width: 160px;
    font-size: 14px;
    font-weight: 500;
    color: #1f1f1f;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .selected {
    border-top: 3px solid #54b1be;
  }
  a {
    text-decoration: none;
  }
  a p:hover {
    border-top: 3px solid #54b1be;
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
