import React from 'react';
import { Headline } from 'react-native-paper';

import { Container, StyledSafeView } from './styled';

const Home = () => {
  return (
    <StyledSafeView>
      <Container>
        <Headline>Hello world</Headline>
      </Container>
    </StyledSafeView>
  )
}

export default Home
