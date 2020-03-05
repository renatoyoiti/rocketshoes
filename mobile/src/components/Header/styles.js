import styled from 'styled-components/native';

import colors from '../../styles/colors';

import logo from '../../assets/images/logo2.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: ${colors.dark};
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Home = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'stretch',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -9px;
  right: -9px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px 3px;
  border-radius: 10px;
  overflow: hidden;
`;
