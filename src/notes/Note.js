import React, {Component} from 'react';
import { StyleSheet, Text,Image, Modal, TouchableHighlight,Dimensions, FlatList } from 'react-native';
import { Container, Thumbnail, View, Header, Left, Body, Right, Title, Button, Icon, Fab, Content, Item, Input } from 'native-base';
import ListNote from '../components/flatlist';

var {height, width} = Dimensions.get('window');

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
            "id_note":38,
            "title":"work5",
            "content":"i will do my best",
            "date":"2019-06-20T05:59:42",
            "date_update":"2019-06-20T05:59:42",
            "category":1
        },
        {
            "id_note":37,
            "title":"work4",
            "content":"today must be finish",
            "date":"2019-06-20T05:59:42",
            "date_update":"2019-06-20T05:59:42",
            "category":1
        },
        {
            "id_note":36,
            "title":"work3",
            "content":"for tomorrow",
            "date":"2019-06-20T05:59:42",
            "date_update":"2019-06-20T05:59:42",
            "category":2
        },
        {
            "id_note":35,
            "title":"work2",
            "content":"not yettttt",
            "date":"2019-06-20T05:59:42",
            "date_update":"2019-06-20T05:59:42",
            "category":3
        },
        {
            "id_note":34,
            "title":"work1",
            "content":"i have done ",
            "date":"2019-06-20T05:59:42",
            "date_update":"2019-06-20T05:59:42",
            "category":3
        },
        {
            "id_note":25,
            "title":"ujian3",
            "content":"belajar mulai besok/sekarang",
            "date":"2019-06-20T05:49:36",
            "date_update":"2019-06-20T05:49:36",
            "category":2
        },
        {
            "id_note":24,
            "title":"ujian2",
            "content":"belajar mulai besok sekarang",
            "date":"2019-06-20T05:48:57",
            "date_update":"2019-06-20T05:48:57",
            "category":4
        },
        {
            "id_note":23,
            "title":"ujian1",
            "content":"belajar mulai sekarang",
            "date":"2019-06-20T05:48:18",
            "date_update":"2019-06-20T05:48:18",
            "category":1
        },
        {
            "id_note":9,
            "title":"tugas5",
            "content":"harus selesai sebelum deadline oke",
            "date":"2019-06-19T14:35:27",
            "date_update":"2019-06-19T14:36:03",
            "category":5
        }
    ],
      modalVisible: false,
    };
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#FFFFFF'}}>
          <Left style={{flex: 1}}>
            <Button transparent onPress={() => this.props.navigation.openDrawer()} >
              <Thumbnail small source={require('../public/assets/foto.png')}/>
            </Button>
          </Left>
          <Body style={{flex: 1,alignItems:'center'}}>
            <Title style={{color: 'black' }}>Note App</Title>
          </Body>
          <Right style={{flex: 1}}>
            <Button transparent onPress={() => { this.setModalVisible(true); }} >
              <Image style={styles.icon} source={require('../public/assets/download.png')}/>
            </Button>
          </Right>
        </Header>
        <View style={{ paddingVertical:10, shadowRadius:5, shadowOpacity:5}}>
          <Item rounded style={styles.search}>
            <Input placeholder='Search.... '/>
          </Item>
        </View>
        <Content style={{ flax: 1}}>
        
        <FlatList style={{alignSelf:'center'}}
        data={this.state.data}
        renderItem={ ( {item} ) => <ListNote data={item} navigation={this.props.navigation}/>}
        keyExtractor={item => item.id_note}
        numColumns={2}
      />
        </Content>
        <View >
          <Fab
            direction="up"
            containerStyle={{ color:'#FFF11F'}}
            style={{ backgroundColor: '#FFFFFF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('NoteAdd')}>
            <Icon name="add" style={{ color: 'black' }}/>
          </Fab>
        </View>
        <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={ styles.modal }>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
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