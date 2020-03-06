import styled from 'styled-components/native';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
  flex-direction: row;
`;

export const Product = styled.View`
  padding: 5px;
  background: #fff;
  border-radius: 4px;
  height: 358px;
  max-width: 220px;
  flex-direction: column;
  margin: 10px 10px 0;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  color: #333;
  margin: 8px 20px 0;
  text-align: justify;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 8px 20px 0;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  margin: auto 10px 10px;
  align-items: center;
  margin-top: auto;
  border-radius: 4px;
  flex-direction: row;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

export const ProductAmount = styled.View`
  background: ${darken(0.03, colors.primary)};
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  align-items: center;
  flex-direction: row;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
