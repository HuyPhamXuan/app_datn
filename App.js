/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import Container from './android/src/containers/Containers';
 //import database from '@react-native-firebase/database';
 import { LogBox } from 'react-native';
 import PDFExample from './android/src/screens/Test'
 import { GoogleSignin } from '@react-native-google-signin/google-signin';
 import { Provider} from "react-redux";
 import { store } from './android/src/redux';
GoogleSignin.configure({
  webClientId: '387133845124-fqr6dpn6qmu4io66d50qlt2kha47m8i8.apps.googleusercontent.com',
});
 LogBox.ignoreAllLogs();
 const App: () => Node = () => {
 
   return (
    <Provider store={store}>
      <NavigationContainer >
       <Container/>
      </NavigationContainer>
    </Provider>
   );
 };
 
 
 
 export default App;
 