import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  Home,
  Logo,
  BasketContainer,
  ItemCount,
} from './styles';

export default function Header({ navigation }) {
  console.tron.log('Header');
  return (
    <Wrapper>
      <Container>
        <Home onPress={() => navigation.navigate('Main')}>
          <Logo />
        </Home>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>13</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
