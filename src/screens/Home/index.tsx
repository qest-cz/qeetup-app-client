import React from 'react';
import { Text } from 'react-native';

import { Container, StyledSafeView } from './styled';

const Home = () => {
  return (
    <StyledSafeView>
      <Container>
        <Text>Hello world</Text>
      </Container>
    </StyledSafeView>
  )
}

export default Home
