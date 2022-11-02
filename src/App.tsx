/* #region IMPORTS */
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {MainScreen} from './views/MainScreen';
/* #endregion */

const App = () => {
  /* #region RENDER */
  return (
    <SafeAreaView>
      <ScrollView>
        <MainScreen />
      </ScrollView>
    </SafeAreaView>
  );
  /* #endregion */
};

export default App;
