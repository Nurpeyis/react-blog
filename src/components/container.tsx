import React from 'react'
import styled from '@emotion/styled';

const Container: React.FC = ({ children }) => {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
}

export default Container

const Wrapper = styled.div`
  width: calc(100% - 4rem);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: calc(100% - 2rem);
  }
`;
