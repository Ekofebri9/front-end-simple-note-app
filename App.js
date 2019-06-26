import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { createAppContainer } from "react-navigation";
import AppNavigator from './src/public/navigators/RootNavigators'

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
AppRegistry.registerComponent('Navigasi', () => AppContainer);