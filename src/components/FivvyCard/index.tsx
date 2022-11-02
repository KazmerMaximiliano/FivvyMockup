/* #region IMPORTS */
import React from 'react';
import { Dimensions } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { FivvyCardStyled } from './FivvyCardStyle';
import { FivvyCardProps } from './FivvyCardTypes';
/* #endregion */

export const FivvyCard = ({
  children,
  width,
  height,
  style
}: FivvyCardProps) => {
  /* #region RENDER */
  return (
    <DropShadow
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 4
      }}
    >
      <FivvyCardStyled
        width={width}
        height={height ?? Dimensions.get('window').height * 0.25}
        style={style}
      >
        {children}
      </FivvyCardStyled>
    </DropShadow>
  );
  /* #endregion */
};
