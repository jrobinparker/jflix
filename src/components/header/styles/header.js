import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`

`;

export const Link = styled.p`

`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1440px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`

`;
