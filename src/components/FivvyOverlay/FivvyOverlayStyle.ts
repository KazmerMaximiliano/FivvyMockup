import { Dimensions, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const StyledContainerWrapper = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const StyledContainer = styled(View)`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  margin-top: ${() => Dimensions.get('window').height * 0.1}px;
  align-self: center;
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 30px;
`;

export const StyledTitleOverlay = styled(Text)`
  position: relative;
  color: #fff;
  font-size: 34px;
  line-height: 42px;
  font-weight: 600;
`;

export const StyledContentOverlay = styled(Text)`
  margin-top: 26px;
  position: relative;
  color: #fff;
  font-size: 26px;
  line-height: 32px;
  font-weight: 300;
`;

export const ActionButton = styled(TouchableOpacity)`
  margin: 32px auto;
  position: relative;
  background-color: #009cdf;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;
`;
