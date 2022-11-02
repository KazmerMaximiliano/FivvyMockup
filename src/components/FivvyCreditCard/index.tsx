/* #region IMPORTS */
import React from 'react';
import { Image, ImageBackground, Text } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { SvgUri } from 'react-native-svg';
import { FINCONECTA_ASSET_ACCOUNT_BANK_ICON } from '../../../assets/images';
import { CreditCardCounter } from '../../../assets/svg';
import { FivvyProgressBar } from '../FivvyProgressBar';
import {
  FivvyCardUsingPercentageText,
  FivvyCreditCardContentStyle,
  FivvyCreditCardName,
  FivvyCreditCardNumber,
  FivvyCreditCardNumberMini,
  FivvyCreditCardStyle,
  FivvyCreditCardTopContainer
} from './FivvyCreditCardStyle';
import { FivvyCreditCardTypes } from './FivvyCreditCardTypes';
/* #endregion */

export const FivvyCreditCard = ({
  color,
  logoBank,
  logoCard,
  type,
  number,
  name,
  mini = false,
  usePercentage,
  onPress,
  width
}: FivvyCreditCardTypes) => {
  /* #region METHODS */
  const setCardType = () => {
    if (type == 'credit') {
      return 'CC';
    } else if (type == 'depositary') {
      return 'Debit';
    } else {
      return 'C';
    }
  };
  /* #endregion */

  /* #region RENDER */
  return (
    <>
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
        <FivvyCreditCardStyle
          width={width}
          onPress={() => {
            if (onPress) {
              onPress();
            }
          }}
          color={'#1A634E'}
          height={mini ? '80px' : null}
        >
          <ImageBackground
            source={{
              uri: `https://cdn.getfivvy.com/assets/textures/8.png`
            }}
            style={{
              width: '100%',
              height: '100%'
            }}
          >
            <FivvyCreditCardContentStyle>
              <FivvyCreditCardTopContainer>
                {logoBank ? (
                  <SvgUri
                    width={25}
                    height={25}
                    uri={logoBank}
                    onError={error => {}}
                  />
                ) : (
                  <Image
                    source={FINCONECTA_ASSET_ACCOUNT_BANK_ICON}
                    style={{
                      width: 25,
                      height: 25
                    }}
                  />
                )}

                {mini && (
                  <FivvyCreditCardNumberMini>
                    {`${setCardType()} * ${number}` ?? 'CC * 1234'}
                  </FivvyCreditCardNumberMini>
                )}
                {logoCard ? (
                  <SvgUri
                    width={25}
                    height={25}
                    uri={logoCard}
                    onError={error => {}}
                  />
                ) : (
                  <CreditCardCounter fill={'#FEFFFF'} />
                )}
              </FivvyCreditCardTopContainer>
              {!mini && (
                <>
                  <FivvyCreditCardNumber>
                    {`${setCardType()} * ${number}` ?? 'CC * 1234'}
                  </FivvyCreditCardNumber>
                  <FivvyCreditCardName>
                    {name ?? 'Mercantil Santa Cruz'}
                  </FivvyCreditCardName>
                </>
              )}
            </FivvyCreditCardContentStyle>
          </ImageBackground>
        </FivvyCreditCardStyle>
      </DropShadow>
      {usePercentage && (
        <>
          <FivvyCardUsingPercentageText width={width}>
            Using <Text style={{ fontWeight: '500' }}>{usePercentage}%</Text>
          </FivvyCardUsingPercentageText>
          <FivvyProgressBar progress={Number(usePercentage)} width={'100%'} />
        </>
      )}
    </>
  );
  /* #endregion */
};
