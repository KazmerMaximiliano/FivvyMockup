import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const FivvyCreditCardStyle = styled(TouchableOpacity)<{
  width?: string;
  height?: string;
  color?: string;
}>`
  margin: 5px auto;
  border-radius: 8px;
  background-color: ${({ color }) => (color ? `${color}` : '#ffffff')};
  width: ${({ width }) => (width ? width : '90%')};
  height: ${({ height }) => (height ? height : '145px')};
`;

export const FivvyCreditCardContentStyle = styled(View)`
  /* Where and how the box is placed */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 25px;
`;

export const FivvyCreditCardTopContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FivvyCreditCardNumber = styled(Text)`
  margin-top: 15px;
  margin-bottom: 10px;
  color: #feffff;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

export const FivvyCreditCardNumberMini = styled(Text)`
  color: #feffff;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

export const FivvyCreditCardName = styled(Text)`
  color: #feffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const FivvyCardUsingPercentageText = styled(Text)<{
  width?: string;
}>`
  margin: 5px auto;
  width: ${({ width }) => (width ? width : '90%')};
  color: #505050;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
`;
