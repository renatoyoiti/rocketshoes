import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProductImage,
  ProductName,
  ProductPrice,
  AddButton,
  AddButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';

import tenis from '../../assets/images/tenis1.jpg';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Product>
          <ProductImage source={tenis} />
          <ProductName>Tênis de Caminhada Leve Confortável</ProductName>
          <ProductPrice>R$179,90</ProductPrice>
          <AddButton>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#fff" size={20} />
              <ProductAmountText>1</ProductAmountText>
            </ProductAmount>
            <AddButtonText>Adicionar</AddButtonText>
          </AddButton>
        </Product>
        <Product>
          <ProductImage source={tenis} />
          <ProductName>Tênis de Caminhada Leve Confortável</ProductName>
          <ProductPrice>R$179,90</ProductPrice>
          <AddButton>
            <ProductAmount>
              <ProductAmountText>1</ProductAmountText>
            </ProductAmount>
            <AddButtonText>Adicionar</AddButtonText>
          </AddButton>
        </Product>
      </Container>
    );
  }
}
