import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin: 15px;
`;

export const Products = styled.View``;

export const Product = styled.View`
  margin-bottom: 8px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const Total = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid blue;
`;

export const ProductDeleteButton = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 40px;
  text-align: center;
`;

export const ProductSubtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;

export const TotalContainerText = styled.Text`
  color: #bbb;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TotalContainerSubtotal = styled.Text`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 5px;
  margin-bottom: 30px;
`;

export const CheckOutButton = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 8px;
  border-radius: 4px;
`;

export const CheckOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;

export const RemoveButton = styled.TouchableOpacity``;
