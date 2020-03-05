import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalContainerText,
  TotalContainerSubtotal,
  CheckOutButton,
  CheckOutButtonText,
} from './styles';

import tenis from '../../assets/images/tenis1.jpg';

export default function Cart({ navigation }) {
  return (
    <Container>
      <Products>
        <Product>
          <ProductInfo>
            <ProductImage source={tenis} />
            <ProductDetails>
              <ProductTitle>Tênis de Caminha Leve Confortável</ProductTitle>
              <ProductPrice>R$179,90</ProductPrice>
            </ProductDetails>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton>
              <Icon
                name="remove-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductControlButton>
            <ProductAmount>13</ProductAmount>
            <ProductControlButton>
              <Icon
                name="add-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductControlButton>
            <ProductSubtotal>R$539,70</ProductSubtotal>
          </ProductControls>
        </Product>
        <Product>
          <ProductInfo>
            <ProductImage source={tenis} />
            <ProductDetails>
              <ProductTitle>Tênis de Caminha Leve Confortável</ProductTitle>
              <ProductPrice>R$179,90</ProductPrice>
            </ProductDetails>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton>
              <Icon
                name="remove-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductControlButton>
            <ProductAmount>13</ProductAmount>
            <ProductControlButton>
              <Icon
                name="add-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductControlButton>
            <ProductSubtotal>R$539,70</ProductSubtotal>
          </ProductControls>
        </Product>
      </Products>

      <TotalContainer>
        <TotalContainerText>Total</TotalContainerText>
        <TotalContainerSubtotal>R$1619,10</TotalContainerSubtotal>
        <CheckOutButton>
          <CheckOutButtonText>Finalizar Pedido</CheckOutButtonText>
        </CheckOutButton>
      </TotalContainer>
    </Container>
  );
}
