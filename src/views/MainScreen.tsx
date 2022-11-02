/* #region IMPORTS */
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
/* #endregion */

export const MainScreen = () => {
  /* #region RENDER */
  return (
    <View style={styles.container}>
      <Text>Fivvy - White App</Text>
    </View>
  );
  /* #endregion */
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
