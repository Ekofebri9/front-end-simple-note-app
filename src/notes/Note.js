import React, {Component} from 'react';
import { StyleSheet,  ActivityIndicator, RefreshControl, Text,Image, Modal, TouchableHighlight,Dimensions, FlatList } from 'react-native';
import { Container, Thumbnail, View, Header, Left, Body, Right, Title, Button, Icon, Fab, Item, Input } from 'native-base';
import ListNote from '../components/flatlist';
import { connect } from 'react-redux' 
import { getNotes,searchNotes,searchNotesNext,getNotesNext } from '../public/redux/action/notes'
import debounce from 'lodash.debounce';

var {height} = Dimensions.get('window');

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      modalVisible: false,
      sort: 'desc',
      page: 1,
      search: '',
    };
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  fetchData = (id,search,sort,page) => {
    (this.state.search == '') ? 
    this.props.dispatch(getNotes(id,sort,page)) : this.props.dispatch(searchNotes(id,search,sort,page))
  }
  fetchDataNext = (id,search,sort,page) => {
    (this.state.search == '') ? 
    this.props.dispatch(getNotesNext(id,sort,page)) : this.props.dispatch(searchNotesNext(id,search,sort,page))
  }
  _onRefresh = () => {
    this.setState({
      refreshing: true,
      sort: 'desc',
      page: 1,
      search: '',
    },() => this.fetchData('',this.state.search,this.state.sort,this.state.page));
    this.setState({refreshing: false });
     
  }
  sort(){
    this.setModalVisible(!this.state.modalVisible);
    this.setState({page: 1 }, () => {
      if ( this.props.notes.sort !== this.state.sort ) {
        let id = (this.props.notes.categoryId != null) ? this.props.notes.categoryId : ''
        this.fetchData(id,this.state.search,this.state.sort,this.state.page)
      }
    });
  }
  search = (keyword) => {
    this.setState({search : keyword})
    let id = (this.props.notes.categoryId != null) ? this.props.notes.categoryId : ''
    this.fetchData(id,this.state.search,this.state.sort,1)
  }
  componentDidMount() {
    this.fetchData('',this.state.search,this.state.sort,this.state.page)
  }
  handleLoadMore = async () => {
    if(this.props.notes.page < this.props.notes.totalpage) {
      let id = (this.props.notes.categoryId != null) ? this.props.notes.categoryId : ''
      this.setState(
        { page : this.props.notes.page + 1 },
          ()=>this.fetchDataNext(id,this.state.search,this.state.sort,this.state.page))
    }
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
              onChangeText={debounce(this.search,300)}
              value={this.state.search}/>
          </Item>
        </View>
            <View style={{flex:1, flexDirection: 'row', height: '100%',
              padding: '2%', paddingBottom:0 }}>
              {
                this.props.notes.isLoading ? 
                (<View style={[styles.container, styles.horizontal]}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>) : 
                (<FlatList
                  data={(this.state.search === '') ? this.props.notes.data : this.props.notes.search }
                  renderItem={ ( {item} ) => <ListNote data={item} navigation={this.props.navigation}/>}
                  keyExtractor={(item, index) => index.toString()}
                  onEndReachedThreshold={0.1}
                  onEndReached={this.handleLoadMore}
                  refreshControl={ <RefreshControl refreshing={ this.props.notes.isLoading } onRefresh={ this._onRefresh } /> }
                  numColumns={2}
                />)
              }
            </View>
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
                onPressOut={ () => { this.sort() } }
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
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
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