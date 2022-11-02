/* #region IMPORTS */
import React from 'react';
import { FivvyTitleStyled } from './FivvyTextStyles';
import { FivvyTextProps } from './FivvyTextTypes';
/* #endregion */

export const FivvyTitle = ({ children, color, style }: FivvyTextProps) => {
  /* #region RENDER */
  return (
    <FivvyTitleStyled style={style} color={color ?? '#009CDF'}>
      {children}
    </FivvyTitleStyled>
  );
  /* #endregion */
};
