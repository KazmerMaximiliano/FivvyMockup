import { Text, View } from 'react-native';
import styled from 'styled-components';

export const StyledTransactionsWrapper = styled(View)<{
  color: any;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 5px 5px 5px 15px;
  margin: 2px;
  border-radius: 12px;
  background: ${({ color }) => (color ? color : '#ffffff')};
`;

export const StyledTextContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 65%;
`;

export const StyledTitle = styled(Text)`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  padding: 5px;
  letter-spacing: -0.5px;
  color: #4f4f4f;
`;

export const StyledDate = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  display: flex;
  margin: 2px;
  color: #8c8c8cab;
`;

export const StyledNumber = styled(Text)`
  align-items: center;
  text-align: center;
  align-self: flex-end;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  padding: 5px;

  color: #828282;
`;
