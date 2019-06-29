import React, {Component} from 'react';
import { StyleSheet, Text,Image, Modal, TouchableHighlight,Dimensions, FlatList } from 'react-native';
import { Container, Thumbnail, View, Header, Left, Body, Right, Title, Button, Icon, Fab, Content, Item, Input } from 'native-base';
import ListNote from '../components/flatlist';
import axios from 'axios';

var {height, width} = Dimensions.get('window');

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      total: 0,
      sort: 'desc',
      data: [
        {
            "id": 15,
            "title": "note143",
            "content": "harus selesai sebelum deadline oke",
            "created_at": "2019-06-28T23:53:42.000Z",
            "updated_at": "2019-06-28T23:53:42.000Z",
            "category": {
                "category_name": "weekly"
            }
        },
        {
            "id": 14,
            "title": "note123",
            "content": "harus selesai sebelum deadline oke",
            "created_at": "2019-06-28T23:52:23.000Z",
            "updated_at": "2019-06-28T23:52:23.000Z",
            "category": {
                "category_name": "daily"
            }
        },
        {
            "id": 13,
            "title": "note13",
            "content": "harus selesai sebelum deadline oke",
            "created_at": "2019-06-28T23:52:11.000Z",
            "updated_at": "2019-06-28T23:52:11.000Z",
            "category": {
                "category_name": "private"
            }
        },
        {
            "id": 12,
            "title": "note3",
            "content": "harus selesai sebelum deadline oke",
            "created_at": "2019-06-28T23:51:57.000Z",
            "updated_at": "2019-06-28T23:51:57.000Z",
            "category": {
                "category_name": "personal"
            }
        },
        {
            "id": 11,
            "title": "note32",
            "content": "harus selesai sebelum deadline oke",
            "created_at": "2019-06-28T23:51:43.000Z",
            "updated_at": "2019-06-28T23:51:43.000Z",
            "category": {
                "category_name": "wishlist"
            }
        },
        {
            "id": 10,
            "title": "note132",
            "content": "harus selesai sebelum deadline oke",
            "created_at": "2019-06-28T23:51:24.000Z",
            "updated_at": "2019-06-28T23:51:24.000Z",
            "category": {
                "category_name": "work"
            }
        },
        {
            "id": 9,
            "title": "note12",
            "content": "harus selesai sebelum deadline oke",
            "created_at": "2019-06-22T14:17:51.000Z",
            "updated_at": "2019-06-22T14:17:51.000Z",
            "category": {
                "category_name": "daily"
            }
        },
        {
            "id": 3,
            "title": "note2",
            "content": "new",
            "created_at": "2019-06-21T07:44:56.000Z",
            "updated_at": "2019-06-21T07:44:56.000Z",
            "category": {
                "category_name": "daily"
            }
        },
        {
            "id": 2,
            "title": "note1",
            "content": "new",
            "created_at": "2019-06-21T07:44:14.000Z",
            "updated_at": "2019-06-21T07:44:14.000Z",
            "category": {
                "category_name": "daily"
            }
        }
    ],
    };
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  createRows=(data, total) =>{
    const rows = total%2; 
    if ( rows == 0 ){
      data.push({
        id: 0,
        title: null,
        content: null,
        created_at: null,
        update_at: null,
        category: {category_name: null }
      });
    }
      return data;
    }
    fetchData = () => {
      axios.get(`http:/192.168.6.153:3002/note?sort=`+this.state.sort)
      .then(res => {
        const data = res.data.data;
        this.setState({ data });
        const total = res.data.total;
        this.setState({ total: total });
      })
      .catch(err =>{
        
      })
    }
  componentDidMount() {
    this.fetchData()
  }
  /*
  shouldComponentUpdate() {
    const different = this.state.sort !== this.state.sortUse
    return different
  }
  componentWillUpdate(){
    axios.get(`http:/192.168.6.153:3002/note?sort=`+this.state.sort)
    .then(res => {
      const data = res.data.data;
      this.setState({ data });
      const total = res.data.total;
      this.setState({ total: total });
    })
    .catch(err =>{
      
    })
  }
  */
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#FFFFFF' }}>
          <Left style={{flex: 1}}>
            <Button transparent onPress={() => this.props.navigation.openDrawer()} >
              <Thumbnail small source={require('../public/assets/foto.png')}/>
            </Button>
          </Left>
          <Body style={{flex: 1,
            alignItems:'center'}}>
            <Title style={{ color: 'black' }}>Note App</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent onPress={() => { this.setModalVisible(true); }} >
              <Image style={ styles.icon } source={require('../public/assets/download.png')}/>
            </Button>
          </Right>
        </Header>
        <View style={{
          paddingVertical:10,
          shadowRadius:5,
          shadowOpacity:5}}>
          <Item rounded style={ styles.search }>
            <Input placeholder='Search.... '/>
          </Item>
        </View>
        <Content>
          <View style={{ 
            flex: 1, 
            margin: 5}}>
            <FlatList 
              data={this.createRows(this.state.data, this.state.total)}
              renderItem={ ( {item} ) => <ListNote data={item} navigation={this.props.navigation}/>}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
            />
          </View>
        
        </Content>
        <View >
          <Fab
            direction="up"
            containerStyle={{ color:'#FFF11F'}}
            style={{ backgroundColor: '#FFFFFF' }}
            position= "bottomRight"
            onPress={() => this.props.navigation.navigate('NoteAdd')}>
            <Icon name="add" style={{ color: 'black' }}/>
          </Fab>
        </View>
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
            <View style={ styles.modal }>
              <TouchableHighlight
                onPress={() => {
                  this.setState({ sort: 'asc'})
                  this.setModalVisible(!this.state.modalVisible);
                  this.componentDidMount()
                }}>
                <Text style={{
                  fontSize:20,
                  color:'black'}}>
                  Ascending
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  this.setState({ sort: 'desc'})
                  this.setModalVisible(!this.state.modalVisible);
                  this.componentDidMount()
                }}>
                <Text style={{
                  fontSize:20,
                  color:'black'}}>
                  Descending
                </Text>
              </TouchableHighlight>
            </View>
          </TouchableHighlight>
          
        </Modal>
      </View>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#FFFFFF',
    alignSelf:'center',
    width:'90%',
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderRadius: 20,
    shadowColor: 'rgba(37, 36, 36, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    }
  },
  icon: {
    width: 25,
    height: 25,
  },
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