import { } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AsyncStorageExample from './async_storage_example.js';
import utils from './utils/asyncStorage'
import AuthenticateUser from './authenticateUser.js';
import store from './store'
import { Provider } from 'react-redux'


export default function App() {
  console.log('in app.js', store)
  return (

    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="papayawhip"
          barStyle="dark-content"
          hidden={false}
          translucent={false}
        />
        <Text>MAIN SCREEN</Text>
        {/* <AsyncStorageExample /> */}
        <AuthenticateUser />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
