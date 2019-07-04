import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { createAppContainer } from "react-navigation";
import AppNavigator from './src/public/navigators/RootNavigators'

// import to wrap component in redux
import { Provider } from 'react-redux' 

// implement store
import store from './src/public/redux/store'

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}
AppRegistry.registerComponent('Navigasi', () => AppContainer);