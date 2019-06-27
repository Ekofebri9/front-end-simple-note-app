import React, {Component} from 'react';
import { StyleSheet, Text, Modal, TouchableHighlight,Dimensions } from 'react-native';
import { View,} from 'native-base';

var {height, width} = Dimensions.get('window');

export default class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  render() {
    return (
        <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={ styles.modal }>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.props.navigation.navigate('Note');
                }}>
                <Text style={{fontSize:20,color:'black'}}>Ascending</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{fontSize:20,color:'black'}}>Descending</Text>
              </TouchableHighlight>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    textAlign: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    backgroundColor:'white',
    marginTop: 0.09*height,
    padding: 10,
    borderRadius: 5,
    elevation: 5
  }
});