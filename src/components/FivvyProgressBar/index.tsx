/* #region IMPORTS */
import React from 'react';
import {
  FivvyProgressBarBackgroundStyle,
  FivvyProgressBarContainerStyle,
  FivvyProgressBarForegroundStyle
} from './FivvyProgressBarStyle';
/* #endregion */

export const FivvyProgressBar = ({
  progress,
  width
}: {
  progress: number;
  width?: string;
}) => {
  /* #region RENDER */
  return (
    <FivvyProgressBarContainerStyle width={width}>
      <FivvyProgressBarBackgroundStyle>
        <FivvyProgressBarForegroundStyle width={progress} />
      </FivvyProgressBarBackgroundStyle>
    </FivvyProgressBarContainerStyle>
  );
  /* #endregion */
};
