import { View } from 'react-native';
import styled from 'styled-components';

export const FivvyCardStyled = styled(View)<{
  width?: number;
  height?: number;
}>`
  margin: 6px auto 12px auto;
  border-radius: 16px;
  background-color: #ffffff;
  padding: 20px;
  width: ${({ width }) => (width ? `${width}px` : '90%')};
  min-height: ${({ height }) => `${height}px`};
  height: auto;
`;
