import React, {Component} from 'react';
import { StyleSheet, Text,Image } from 'react-native';
import { Container, Thumbnail, View, Header, Left, Body, Right, Title, Button, Icon, Fab, Content, Item, Input } from 'native-base';
import Flatlist from '../components/flatlist';
export default class Notes extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../public/assets/portfolio.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  constructor(){
    super();
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
            <Title style={{color: '#000000' }}>Note App</Title>
          </Body>
          <Right style={{flex: 1}}>
            <Button transparent style={{left:5,top:2}}>
            <Thumbnail square small source={require('../public/assets/download.png')}/>
            </Button>
          </Right>
        </Header>
        <View style={{ padding:10, shadowRadius:5, shadowOpacity:10}}>
          <Item rounded style={{ backgroundColor: '#FFFFFF', alignSelf:'center', width:304, hight:37,shadowColor: 'rgba(37, 36, 36, 0.25)',shadowOffset:{
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
borderRadius: 15}}>
            <Input placeholder='Search '/>
          </Item>
          </View>
        <Content>
        <Flatlist>
        </Flatlist>
        </Content>
        <View style={{ flex: 1 }}>
          <Fab
            direction="up"
            containerStyle={{ color:'#FFFFFF'}}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('NoteAdd')}>
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //flexBox CSS
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});