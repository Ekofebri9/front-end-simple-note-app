import React, { Component } from 'react';
import { Text, Button } from 'native-base';
import { Image, StyleSheet } from 'react-native';

export default class ListIconExample extends Component {
  render() {
    return (
      <Button iconLeft transparent >
        <Image source={ require( '../public/assets/plus.png' ) } style={ styles.icon } />
        <Text style={{ color: 'black' }} >{ this.props.data.category_name }</Text>
      </Button>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginLeft:10
    }
});