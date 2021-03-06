import React, {Component} from 'react';
import { Container,Header, Body, Content, Thumbnail, Text, Button, List, ListItem } from "native-base";
import { Alert, Image, StyleSheet, SafeAreaView, ScrollView, Dimensions,View, Modal,TextInput, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import ListCategory from './listCategories';
import { connect } from 'react-redux' 
import { getCategories, addCategory } from '../public/redux/action/categories'

const {height, width} = Dimensions.get('window');

class EditPageDrawer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      category_name: '',
      image_url: ''
    };
  }
  fetchData = () => {
    this.props.dispatch(getCategories());
  }
  addData = () => {
    this.props.dispatch(addCategory(this.state.category_name,this.state.image_url));
    this.setState({ category_name: '', image_url: '' })
  }
  add = () => {
    if (this.state.category_name === '' || this.state.image_url === '') {
      Alert.alert(
        'Form is empty',
        'Please fill in all form',
        [{text: 'OK'}],
        {cancelable: false},
      )
    } else {
      this.setModalVisible(!this.state.modalVisible);
      this.addData();
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible}); 
  }
  render(){
    return (
      <Container>
        <SafeAreaView>
          <ScrollView>
            <Header style={styles.header}>
              <Body style={{ alignItems:"center" }}>
                <Thumbnail large source={require('../public/assets/foto.png')} style={{ marginTop:25 }}/>
                <Text style={{ marginTop:25 }}>EKO FEBERIYANTO</Text>
              </Body>
            </Header>
            <Content style={{ marginTop:30, marginLeft:10 }}>
              <FlatList style={{ alignSelf:'flex-start' }}
                data={this.props.category.data}
                renderItem={ ( {item} ) => <ListCategory  data={item} navigation={this.props.navigation}/>}
                keyExtractor={item => item.id.toString()}/> 
              <Button iconLeft transparent 
                onPress={() => this.setModalVisible(true)}>
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
                    onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                    <View style={styles.view}>
                      <View style={styles.viewModal}>           
                        <View>
                          <TextInput 
                            onChangeText={(text) => this.setState({category_name: text})}
                            placeholder="Category Name" 
                            placeholderColor='#eee' 
                            style={styles.input}/>                      
                        </View>
                        <View>
                          <TextInput 
                            onChangeText={(text) => this.setState({image_url: text})}
                            placeholder="Image Url" 
                            style={styles.input}/>
                        </View>         
                        <View style={{ alignItems: 'flex-end' }}>
                          <List>
                            <ListItem noBorder>
                              <TouchableOpacity 
                                onPress={()=> { this.add() }} 
                                style={{ marginRight: 20 }}>
                                <Text style={styles.text}>
                                  Add
                                </Text>
                              </TouchableOpacity>
                              <TouchableOpacity 
                                onPress={()=> { this.setModalVisible(!this.state.modalVisible); }}>
                                <Text style={styles.text}>
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

const mapStateToProps= state => {
  return {
      category: state.category,
  }
}

export default connect(mapStateToProps)(EditPageDrawer)
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginLeft:10
    },
  input:{
    marginLeft: 20,
    marginRight:20,
    paddingLeft: 20,
    borderBottomColor: '#2ED1A2',
    borderBottomWidth: 2
  },
  header: {
    flex:1,
    height:150,
    backgroundColor:'#FFFFFF',
    borderBottomColor:'white',
    elevation: 0
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
    },
  text: {
    color: '#000',
    fontWeight:"600"
  },
  view: {
    flex:1,
    backgroundColor: 'rgba(51,51,51,0.5)',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  viewModal: {
    width: "70%",
    height: 150,
    textAlign: "center",
    alignSelf: "center",
    position: "relative",
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 3
  }
  });