import React from "react";
import { Text, View,TouchableOpacity } from "react-native";

export default class NotesData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  
  render() {
    return (
      <TouchableOpacity style={{ 
        flex:1,
        margin:'1%', 
        backgroundColor:
          (this.props.data.id === 0 ? 'transparent' :
          (this.props.data.category.category_name == 'private' ? '#112233' : 
          (this.props.data.category.category_name == 'work' ? '#ff3333' : 
          (this.props.data.category.category_name == 'wishlist' ? '#d24dff' : 
          (this.props.data.category.category_name == 'personal' ? '#ffd633' : 
          '#33ff33' ) ) ) ) ),
          borderRadius: 7 }} 
        onPress={() => {if (this.props.data.id != 0)this.props.navigation.navigate('NoteUpdate',this.props.data)}} >
        <View style={{ padding: '5%' }}>
          <View style={{ 
            flex:1, 
            flexDirection:'column' }}>
            <Text style={{
              flex:1,
              fontSize:12,
              color:'white',
              textAlign:'right'}}
              numberOfLines={1}>
              {this.props.data.created_at}
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
              {this.props.data.title}
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
              {this.props.data.category.category_name}
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
              {this.props.data.content}
            </Text>
            
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}