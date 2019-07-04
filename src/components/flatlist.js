import React from "react";
import { Text, View,TouchableOpacity, Modal, TouchableHighlight, Alert } from "react-native";

import { connect } from 'react-redux' 
import { deleteNote } from '../public/redux/action/notes'


 class NotesData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      data: (this.props.data.length !== 0 ) ? this.props.data : this.props.search
    };
  }
  dateFormat = (timestamp) => {
    const nameMonth =
      [
        "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December" 
      ];
    const date = new Date(Date.parse(timestamp))
    const day = date.getDate();
    const month = date.getMonth(); 
    const year = date.getFullYear();
    
    return  day+` `+nameMonth[month]+` `+year;
  }
  // pickColor = (id) => {
  //   let red = id*id
  //   let yellow = id+id
  //   let blue = id*id-id
  //   let color = `#${id}${red}${id+red}A${yellow}${blue+id}`
  //   let makeColor = color.substr(0,7)
  //   return makeColor
  // }
  pickColor = (id) => {
    let color = [
      '#ff1a1a', '#cc00cc', '#3333cc', '#990099', '#33cccc', '#00ff00',
      '#009900', '#cccc00', '#ff3300', '#ff0066', '#3399ff', '#3366cc'
    ]
    let idColor = id.toString()
    let makeColor = color[idColor.substr(0,1)]
    return makeColor
  }
  deleteData = () => {
    this.props.dispatch(deleteNote(this.state.data.id));
  }
  render() {
    return (
      <TouchableOpacity style={{ 
        margin:'2%',
        width: '46%',
        backgroundColor: this.pickColor(this.state.data.category.id),
          borderRadius: 7 }}
        //onLongPress={() => this.setModalVisible(true)}
        onLongPress={() => Alert.alert(
          'Delete Note',
          'Are you sure will you delete this note',
          [
            {text: 'Cancel'},
            {text: 'OK', onPress: () => this.deleteData() },
          ],
          {cancelable: false},
        )}
        
        onPress={() => {if (this.state.data.id != 0)this.props.navigation.navigate('NoteUpdate',this.state.data)}} >
        <View style={{ padding: '5%' }}>
          <View style={{ 
            flex:1, 
            flexDirection: 'column' }}>
            <Text style={{
              flex:1,
              fontSize:12,
              color:'white',
              textAlign:'right'}}
              numberOfLines={1}>
              {this.dateFormat(this.state.data.created_at)}
            </Text>
          </View>
          <View style={{ 
            flex:1,
            height: 25,
            flexDirection:'column',
            paddingHorizontal: '10%' }}>
            <Text style={{
              flex:1,
              fontSize:20,
              fontWeight: 'bold',
              color:'white' }}
              numberOfLines={1}>
              {this.state.data.title}
            </Text>
            </View>
          <View style={{ 
            flex:1,
            height: 25,
            flexDirection:'column',
            paddingHorizontal: '10%' }}>
            <Text style={{
              fontSize:15,
              color:'white' }}
              numberOfLines={1}>
              {this.state.data.category.category_name}
            </Text>
            </View>
          <View style={{ 
            flex:3,
            height: 80,
            flexDirection:'column',
            paddingHorizontal: '10%',
            paddingBottom: '10%' }}>
            <Text style={{
              fontSize:15,
              fontWeight: 'bold',
              color:'white' }} 
              numberOfLines={3}>
              {this.state.data.content}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const mapStateToProps = state => {
  return {
      notes: state.notes,
  }
}

export default connect(mapStateToProps)(NotesData)
