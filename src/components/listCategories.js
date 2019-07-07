import React, { Component } from 'react';
import { Text, Button, Icon } from 'native-base';
import { StyleSheet, Alert } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { connect } from 'react-redux' 
import { deleteCategory } from '../public/redux/action/categories'
import { getNotesByCategory } from '../public/redux/action/notes'

class ListCategories extends Component {
  deleteData = () => {
    this.props.dispatch(deleteCategory(this.props.data.id));
  }
  render() {
    return (
      <Button iconLeft transparent
        onPress={() => {
          this.props.dispatch(getNotesByCategory(this.props.data.id))
          this.props.navigation.dispatch(DrawerActions.toggleDrawer())
        }}
        onLongPress={() => Alert.alert(
          'Delete Category',
          'Are you sure will you delete this category',
          [
            {text: 'Cancel'},
            {text: 'OK', onPress: () => this.deleteData() },
          ],
          {cancelable: false},
        )}>
        <Icon name={this.props.data.icon} />
        <Text style={{ color: 'black' }} >{ this.props.data.category_name }</Text>
      </Button>
    );
  }
}
const mapStateToProps = state => {
  return {
      category: state.category,
      notes: state.notes,
  }
}
export default connect(mapStateToProps)(ListCategories)
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginLeft:10
    }
});