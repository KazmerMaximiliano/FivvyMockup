/* #region IMPORTS */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal as RNModal, Text, TouchableOpacity, View } from 'react-native';
import { HomeOverlayInfoIcon } from '../../../assets/svg';
import {
  ActionButton,
  StyledContainer,
  StyledContainerWrapper,
  StyledContentOverlay,
  StyledTitleOverlay
} from './FivvyOverlayStyle';
import { strings } from './strings';
/* #endregion */

export const FivvyOverlay = ({
  title,
  description
}: {
  [key: string]: string;
}) => {
  /* #region HOOKS */
  const { t } = useTranslation();
  /* #endregion */

  /* #region STATE */
  const [showOverlay, setShowOverlay] = useState(false);
  /* #endregion */

  /* #region RENDER */
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setShowOverlay(true);
          // TODO: VARIOS EVENTOS
          // eventLogger(strings.events.openHomeOverlay);
        }}
        style={{ marginTop: 8 }}
      >
        <HomeOverlayInfoIcon width={20} height={20} />
      </TouchableOpacity>
      {showOverlay && (
        <RNModal transparent animationType='fade'>
          <StyledContainerWrapper>
            <StyledContainer>
              <View>
                <StyledTitleOverlay>{title}</StyledTitleOverlay>
                <StyledContentOverlay>{description}</StyledContentOverlay>
              </View>
              <ActionButton
                onPress={() => {
                  setShowOverlay(false);
                }}
              >
                <Text style={{ color: 'white', fontWeight: '500' }}>
                  {t(strings.overlayDismissButton)}
                </Text>
              </ActionButton>
            </StyledContainer>
          </StyledContainerWrapper>
        </RNModal>
      )}
    </>
  );
  /* #endregion */
};
