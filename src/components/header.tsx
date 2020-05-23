import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled/macro';

import Container from './container';

const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <HeaderContent>
          <Logo to="/">Test Blog</Logo>
          
          <NavLink to="/" exact>
            Home
          </NavLink>

          <AddNew to="/posts/create">Add Post</AddNew>
        </HeaderContent>
      </Container>
    </HeaderWrap>
  );
}

export default Header

const HeaderWrap = styled.header`
  background-color: #ddd;
  padding: 1rem 0;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-right: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-right: 1rem;
  }
`;

const AddNew = styled(Link)`
  text-decoration: none;
  margin-left: auto;
  border-radius: 5px;
  background-color: #28a745;
  color: #fff;
  padding: 0.5rem 1rem;

  &:hover {
    opacity: 0.75;
  }

  @media (max-width: 480px) {
    padding: 0.25rem 0.5rem;
  }
`;