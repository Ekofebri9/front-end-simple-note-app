import React, {Component} from 'react';
import { Container,Header, Body, Content, Thumbnail, Text, Button, List, ListItem } from "native-base";
import { Image,StyleSheet,SafeAreaView,ScrollView, Dimensions,View, Modal,TextInput, FlatList,TouchableOpacity,TouchableHighlight } from 'react-native';
import axios from 'axios';
import ListCategory from './listCategories';

const {height, width} = Dimensions.get('window');

export default class EditPageDrawer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      data: [
        {
            "id": 36,
            "category_name": "work",
            "createdAt": "2019-06-23T05:43:36.000Z",
            "updatedAt": "2019-06-23T05:43:36.000Z"
        },
        {
            "id": 41,
            "category_name": "wishlist",
            "createdAt": "2019-06-23T05:43:36.000Z",
            "updatedAt": "2019-06-23T05:43:36.000Z"
        },
        {
            "id": 42,
            "category_name": "personal",
            "createdAt": "2019-06-23T05:43:36.000Z",
            "updatedAt": "2019-06-23T05:43:36.000Z"
        },
        {
            "id": 43,
            "category_name": "private",
            "createdAt": "2019-06-23T05:43:36.000Z",
            "updatedAt": "2019-06-23T05:43:36.000Z"
        },
    ]
    };
  }
  componentDidMount() {
    axios.get(`http:/192.168.6.153:3002/category`)
      .then(res => {
        const data = res.data.content;
        this.setState({ data });
      })
      .catch(err =>{
        
      })
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible}); 
  }
  render(){
    return (
      <Container>
        <SafeAreaView>
          <ScrollView>
            <Header style={{
              flex:1,
              height:150,
              backgroundColor:'#FFFFFF',
              borderBottomColor:'none',
              elevation: 0}}>
              <Body style={{ alignItems:"center" }}>
                <Thumbnail large source={require('../public/assets/foto.png')} style={{ marginTop:25 }}/>
                <Text style={{ marginTop:25 }}>EKO FEBERIYANTO</Text>
              </Body>
            </Header>
            <Content style={{ 
              marginTop:30,
              marginLeft:10 }}>
              <FlatList style={{ alignSelf:'flex-start' }}
                data={this.state.data}
                renderItem={ ( {item} ) => <ListCategory data={item} />}
                keyExtractor={item => item.id.toString()}/> 
              <Button iconLeft transparent 
                onPress={() => this.setModalVisible(true)}
                style={{}}>
                <Image source={ require('../public/assets/plus.png') } style={ styles.icon }/>
                <Text style={{ color:'black' }}>Add Category</Text> 
              </Button>
              <View style={{ marginTop: 22 }}>
                <Modal
                  animationType="fade"
                  transparent={ true }
                  visible={ this.state.modalVisible }>
                  <TouchableHighlight
                    style={{ height: '100%',width: '100%' }}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={{
                      flex:1,
                      backgroundColor: 'rgba(51,51,51,0.5)',
                      justifyContent: 'center',
                      alignItems: 'center' }}>
                      <View style={{
                        width: "70%",
                        height: 150,
                        textAlign: "center",
                        alignSelf: "center",
                        position: "relative",
                        backgroundColor: "white",
                        borderRadius: 5,
                        elevetion: 3 }}>           
                        <View>
                          <TextInput 
                            placeholder="Category Name" 
                            placeholderColor='#eee' 
                            style={{
                              marginLeft: 20,
                              marginRight:20,
                              paddingLeft: 20,
                              borderBottomColor: '#2ED1A2',
                              borderBottomWidth: 2}}/>                       
                        </View>
                        <View>
                          <TextInput 
                            placeholder="Image Url" 
                            style={{
                              marginLeft: 20,
                              marginRight:20,
                              paddingLeft: 20,
                              borderBottomColor: '#2ED1A2',
                              borderBottomWidth: 2 }}/>
                        </View>         
                        <View style={{ alignItems: 'flex-end' }}>
                          <List>
                            <ListItem noBorder>
                              <TouchableOpacity 
                                onPress={()=> {
                                  this.setModalVisible(!this.state.modalVisible); }} 
                                style={{ marginRight: 20 }}>
                                <Text style={{
                                  color: '#000', 
                                  fontWeight:"600"}}>
                                  Add
                                </Text>
                              </TouchableOpacity>
                              <TouchableOpacity 
                                onPress={()=> {
                                  this.setModalVisible(!this.state.modalVisible); }}>
                                <Text style={{
                                  color: '#000', 
                                  fontWeight:"600"}}>
                                  Cancel
                                </Text>
                              </TouchableOpacity>
                            </ListItem>
                          </List>
                        </View>
                      </View>
                    </View>
                  </TouchableHighlight>
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
    alignSelf: 'center',
    width:'50%',
    height:'30%',
    justifyContent: 'center',
    marginHorizontal:0.1*width,
    marginVertical: 0.2*height,
    backgroundColor:'white',
    borderRadius: 5,
    elevation: 1
    }
  });