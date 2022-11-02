import { Text } from 'react-native';
import styled from 'styled-components';

export const FivvyTitleStyled = styled(Text)<{ color?: string }>`
  color: ${({ color }) => color};
  font-size: 25px;
  line-height: 32px;
`;

export const FivvySubTitleStyled = styled(Text)<{ color?: string }>`
  margin: 12px 0px 12px 0px;
  color: ${({ color }) => color};
  font-size: 18px;
  line-height: 20px;
  font-weight: 100;
`;
