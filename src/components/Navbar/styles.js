import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  min-height: 74px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Navbar = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  min-height: 74px;
`;

export const Logo = styled(Link)`
  color: #1f1f1f;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  h4 {
    margin-left: 10px;
  }
`;
export const NavLinksLeft = styled.ul`
  display: flex;
  margin-left: 6rem;
  width: 82%;
  li {
    list-style: none;
  }
  li a {
    margin-right: 2rem;
  }
  a {
    font-family: 'Raleway', sans-serif;
    color: #1f1f1f;
    text-decoration: none;
    letter-spacing: 1.5px;
    font-weight: 600;
    font-size: 14px;
  }
  @media screen and (max-width: 1300px) {
    width: 60%;
    li {
      opacity: 0;
    }
  }
`;

export const LoginLink = styled(Link)`
  margin-right: 2rem;
  line-height: 52px;
`;

export const NavLinksRight = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 30%;
  li {
    list-style: none;
  }
  a {
    font-family: 'Raleway', sans-serif;
    color: #1f1f1f;
    text-decoration: none;
    letter-spacing: 1.5px;
    font-weight: 600;
    font-size: 14px;
  }
  @media screen and (max-width: 1300px) {
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 8vh;
    background-color: #5d4954;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    li {
      opacity: 0;
    }
  }
`;

export const Burger = styled.div`
  display: none;
  cursor: pointer;
  & > div {
    width: 25px;
    height: 2px;
    background-color: #1f1f1f;
    margin: 5px;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 1300px) {
    display: block;
  }
`;
