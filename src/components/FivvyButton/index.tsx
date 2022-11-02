/* #region IMPORTS */
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { FivvyButtonTypes } from './FivvyButtonTypes';
/* #endregion */

/* #region TYPES */
/* #endregion */

/* #region STYLED COMPONENTS */
export const StyledButtonWrapper = styled(TouchableOpacity)<{
  color?: any;
}>`
  padding: 12px 20px;
  border-radius: 25px;
  background-color: #009cdf;
`;

/*
  justify-content: center;
  align-items: center;
  text-align: center;
*/

export const StyledButtonText = styled(Text)<{
  color?: any;
}>`
  color: white;
`;

/*
  justify-content: center;
  align-items: center;
  text-align: center;
*/
/* #endregion */

export const FivvyButton = ({
  text,
  type = 'Primary',
  size = 'small',
  state = 'default'
}: FivvyButtonTypes) => {
  /* #region HOOKS */
  /* #endregion */

  /* #region STATES */
  /* #endregion */

  /* #region REFS */
  /* #endregion */

  /* #region REDUCERS */
  /* #endregion */

  /* #region ACTIONS */
  /* #endregion */

  /* #region METHODS */

  const getButtonWrapperStyle = (type: string, state: string) => {
    switch (type) {
      case 'Primary':
        return {
          backgroundColor: '#009CDF'
        };

      default:
        return {
          backgroundColor: '#009CDF'
        };
    }
  };
  /* #endregion */

  /* #region EFFECTS */
  /* #endregion */

  /* #region RENDER */
  return (
    <SafeAreaView>
      <ScrollView>
        <StyledButtonWrapper
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center'
            },
            getButtonWrapperStyle(type, state)
          ]}
        >
          <StyledButtonText>FivvyComponent</StyledButtonText>
        </StyledButtonWrapper>
      </ScrollView>
    </SafeAreaView>
  );
  /* #endregion */
};
