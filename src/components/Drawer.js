import React, {Component} from 'react';
import { Container,Header, Body, Content, Thumbnail, Text, Button, Form, Input,Item,Label } from "native-base";
import { Image,StyleSheet,SafeAreaView,ScrollView, Dimensions,View, Modal,TouchableHighlight,TextInput } from 'react-native'


const {height, width} = Dimensions.get('window');

export default class EditPageDrawer extends Component{
    constructor(props) {
      super(props);
      this.state = {
        modalVisible: false,
      };
    }
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
    render(){
      return (
      <Container>
        <SafeAreaView>
          <ScrollView>
            <Header style={{flex:1,height:150,backgroundColor:'#FFFFFF', borderBottomColor:'none', elevation: 0}}>
              <Body style={{alignItems:"center"}}>
                <Thumbnail large source={require('../public/assets/foto.png')} style={{marginTop:25}}/>
                <Text style={{marginTop:25}}>EKO FEBERIYANTO</Text>
              </Body>
            </Header>
            <Content style={{marginTop:30, marginLeft:20}}>
            <Text style={{color:'black'}}>Add Category</Text> 
              <Button iconLeft transparent onPress={() => this.setModalVisible(true)} >
                <Image source={require('../public/assets/plus.png')} style={styles.icon}/>
                <Text style={{color:'black'}}>Add Category</Text> 
              </Button>
              <View style={{marginTop: 22}}>
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={this.state.modalVisible}>
                  <View style={ styles.modal }>
                  <View style={ {flex:1, flexDirection: 'column',justifyContent:'center', alignItems:'center'} }>
                  <TextInput style={{height: 40, borderColor: 'gray',textAlign:'left'}} onChangeText={(name) => this.setState({text})}
                   value={this.state.name} placeholder={'Category Name'}/>
                  <TextInput style={{height: 40, borderColor: 'gray',textAlign:'left'}} onChangeText={(image) => this.setState({text})}
                   value={this.state.image} placeholder={'Image Url'}/>
                      </View>
                  
                    <View style={ {flex:1, flexDirection: 'row',justifyContent:'center'} }>
                   <Button transparent light onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                    <Text style={{color:'black'}}>Add</Text>
                    </Button>
                    <Button transparent danger onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                    <Text>Cencel</Text>
                    </Button>   
                   </View>
                   
                  </View>
                </Modal>
              </View>
            </Content>
          </ScrollView>
       </SafeAreaView>
      </Container>
      )
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
      marginLeft:10
    },
    modal: {
      width:'50%',
      height:'30%',
      textAlign: 'center',
      alignSelf: 'center',
      position: 'absolute',
      backgroundColor:'white',
      marginTop: 0.09*height,
      borderRadius: 5,
      elevation: 1
    }
  });