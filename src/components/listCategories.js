import React, { Component } from 'react';
import { Text, Button, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

export default class ListIconExample extends Component {
  render() {
    return (
      <Button iconLeft transparent >
        <Icon name={this.props.data.icon} />
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