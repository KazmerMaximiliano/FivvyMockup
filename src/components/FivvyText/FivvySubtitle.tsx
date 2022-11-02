/* #region IMPORTS */
import React from 'react';
import { FivvySubTitleStyled } from './FivvyTextStyles';
import { FivvyTextProps } from './FivvyTextTypes';
/* #endregion */

export const FivvySubTitle = ({ children, color, style }: FivvyTextProps) => {
  /* #region RENDER */
  return (
    <FivvySubTitleStyled style={style} color={color ?? '#323338'}>
      {children}
    </FivvySubTitleStyled>
  );
  /* #endregion */
};
