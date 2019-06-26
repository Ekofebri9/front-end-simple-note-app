import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Counter from '../components/counter';
import Header from '../components/Header'

export default class Notes extends Component {
    static navigationOptions = {
        title: 'Categories'
    }
  constructor(){
    super();
    
  }
  handleGoBack = () => {
    const {navigation}= this.props; //es6
    navigation.goBack();

    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title="This Category" />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Counter title="Try to count" />
        <TouchableOpacity onPress={this.handleGoBack} style={{backgroundColor:'blue'}} >
          <Text style={{color:'white'}} >GO BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //flexBox CSS
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});