import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect, useSelector } from 'react-redux';

import {
  Wrapper,
  Container,
  Home,
  Logo,
  BasketContainer,
  ItemCount,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <Home onPress={() => navigation.navigate('Main')}>
          <Logo />
        </Home>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
