import { View } from 'react-native';
import styled from 'styled-components';

export const FivvyProgressBarContainerStyle = styled(View)<{
  width?: string;
}>`
  margin: 5px auto;
  width: ${({ width }) => (width ? width : '90%')};
`;

export const FivvyProgressBarBackgroundStyle = styled(View)<{
  width?: number;
}>`
  background-color: #ffffff;
  border-radius: 15px;
  width: 100%;
  height: 15px;
`;

export const FivvyProgressBarForegroundStyle = styled(View)<{
  width?: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #009cdf;
  border-radius: 15px;
  width: ${({ width }) => (width ? `${width}%` : '50%')};
  height: 15px;
`;
