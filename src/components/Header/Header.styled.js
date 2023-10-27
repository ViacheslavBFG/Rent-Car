import styled, { keyframes } from 'styled-components';
import { NavLink as StyledLink } from 'react-router-dom';

const gradientAnimation = keyframes`
  0% {
    background: linear-gradient(to bottom, #243949, #192f3f);
    
  }
  50% {
    background: linear-gradient(to bottom, #192f3f, #243949);
 
  }
  100% {
    background: linear-gradient(to bottom, #243949, #192f3f);
 
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  display: flex;
  gap: 30px;
  background: linear-gradient(to bottom, #3494e6, #ec6ead);
  padding: 30px;
  animation: ${gradientAnimation} 3s linear infinite;
`;

export const Navigation = styled.nav`
  margin-right: auto;
  margin-left: auto;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 500px;
  list-style: none;
`;

export const NavLink = styled(StyledLink)`
  font-family: Manrope;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;
  position: relative;

  &.active {
    color: beige;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: blanchedalmond;
    transition: width 0.3s ease;
  }

  &::before {
    left: 0;
    top: 0;
  }

  &::after {
    right: 0;
    bottom: 0;
  }

  &:hover,
  &:focus {
    color: blanchedalmond;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover::after {
    width: 100%;
  }
`;
