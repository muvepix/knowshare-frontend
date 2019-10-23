import styled from 'styled-components';

import background from '../../images/laptop-2557466_1920.jpg';

export const Panel = styled.div`
  height: 15%;
  min-height: 500px;
  width: 100%;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 42%,
      rgba(24, 24, 24, 0.8) 100%
    ),
    url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5rem;
  margin-bottom: 4rem;
  @media only screen and (max-width: 1200px) {
    padding: 2.5rem;
    margin-bottom: 2.5rem;
  }
`;

export const PanelContent = styled.div`
  width: 50%;
  h1,
  h3 {
    color: #fafafa;
    font-size: 2.9em;
    font-weight: 400;
  }
  h3 {
    font-size: 1.4em;
    font-weight: 400;
  }
  .bolder {
    font-weight: 800;
  }
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;
