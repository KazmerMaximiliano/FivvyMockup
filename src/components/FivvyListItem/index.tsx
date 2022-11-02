/* #region IMPORTS */
import React from 'react';
import {
  StyledDate,
  StyledNumber,
  StyledTextContainer,
  StyledTitle,
  StyledTransactionsWrapper
} from './FivvyListItemStyle';
import { FivvyListItemProps } from './FivvyListItemTypes';
/* #endregion */

export const FivvyListItem = ({
  idx,
  width,
  title,
  caption,
  action,
  color
}: FivvyListItemProps) => {
  /* #region RENDER */
  return (
    <StyledTransactionsWrapper color={color} key={idx ?? Math.random()}>
      <StyledTextContainer>
        <StyledTitle numberOfLines={1}>
          {title == ' - ' ? 'Transfer or Deposit or Withdrawals' : title}
        </StyledTitle>
        <StyledDate>{caption}</StyledDate>
      </StyledTextContainer>

      <StyledNumber>{action}</StyledNumber>
    </StyledTransactionsWrapper>
  );
  /* #endregion */
};
