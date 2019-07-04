import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, ScrollView, RefreshControl, Text,Image, Modal, TouchableHighlight,Dimensions, FlatList } from 'react-native';
import { Container, Thumbnail, View, Header, Left, Body, Right, Title, Button, Icon, Fab, Content, Item, Input } from 'native-base';
import ListNote from '../components/flatlist';
//import axios from 'axios';

import { connect } from 'react-redux' 
import { getNotes,searchNotes } from '../public/redux/action/notes'

var {height, width} = Dimensions.get('window');

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      modalVisible: false,
      praSort: 'desc',
      sort: 'desc',
      page: 1,
      search: '',
    };
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  fetchData = (search,sort,page) => {
    (this.state.search === '') ? this.props.dispatch(getNotes(sort,page)) : this.props.dispatch(searchNotes(search,sort,page))
    // axios.get(`http:/192.168.6.153:3002/note?sort=`+this.state.sort)
    // axios.get(`http:/192.168.43.142:3002/note?sort=`+this.state.sort)
    // .then(res => {
    //   const data = res.data.data;
    //   this.setState({ data });
    //   const total = res.data.total;
    //   this.setState({ total: total });
    // })
    // .catch(err =>{
        
    // })
  }
  _onRefresh = () => {
    //this.setState({refreshing: true});
    this.fetchData(this.state.search,this.state.sort,this.state.page).then(() => {
     // this.setState({refreshing: false});
    });
  }
  sort(){
    this.setModalVisible(!this.state.modalVisible);
    if ( this.state.praSort !== this.state.sort ) {
      this.fetchData(this.state.search,this.state.sort,this.state.page)
      this.setState({praSort: this.state.sort})
    }
  }
  search(){
    if (this.state.search !== '') this.fetchData(this.state.search,this.state.sort,this.state.page)
  }
  componentDidMount() {
    this.fetchData(this.state.search,this.state.sort,this.state.page)
  }
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
            <Input placeholder='Search.... '
              onEndEditing={()=>{ this.search() }}
              onChangeText={(text) => this.setState({search: text})}
              value={this.state.search}/>
          </Item>
        </View>
        <Content>
        <SafeAreaView>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.props.notes.isLoading}
                onRefresh={this._onRefresh}
              />
            }>
            <View style={{ flexDirection: 'row', height: '100%',
              padding: '2%', paddingBottom:0 }}>
              <FlatList
                data={(this.state.search === '') ? this.props.notes.data : this.props.notes.search }
                renderItem={ ( {item} ) => <ListNote data={item} navigation={this.props.navigation}/>}
                keyExtractor={item => item.id.toString()}
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
                numColumns={2}
              />
            </View>
          </ScrollView>
          </SafeAreaView>
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
                onPressOut={ () => { 
                  this.sort() 
                  } }
                onPress={ () => { this.setState({ sort: 'asc'}) }}>
                <Text style={{
                  fontSize:20,
                  color:'black'}}>
                  Ascending
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPressOut={ () => { this.sort() } }
                onPress={ () => { this.setState({ sort: 'desc'}) } }>
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

const mapStateToProps= state => {
  return {
      notes: state.notes,
  }
}

export default connect(mapStateToProps)(Notes)

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