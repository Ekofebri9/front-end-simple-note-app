import React from "react";
import { FlatList, Text, View,TouchableOpacity } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  render() {
      return (
        <TouchableOpacity style={{ margin:'1%', backgroundColor:'blue', borderRadius: 10}} 
        onPress={() => this.props.navigation.navigate('NoteUpdate',this.props.data)} >
          <View style={{ margin:'1%'}}>
            <View style={{ flex:1, flexDirection:'row' }}>
              <Text style={{ fontSize:15,color:'white' }}>{this.props.data.title}</Text>
              <Text style={{ fontSize:15,color:'white', textAlign:'right' }}>{this.props.data.date}</Text>
            </View>
            <View style={{ flex:2 }}>
              <Text style={{ fontSize:10,color:'white', padding: 10 }} numberOfLines={4} >{this.props.data.content}</Text>
              <Text style={{ fontSize:15,color:'white' }}>{this.props.data.date_update}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
  }
}