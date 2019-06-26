import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Container, View, Header, Left, Body, Right, Title, Button, Icon, Content, Item,Toast, Input,Form,Textarea } from 'native-base';


export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }
  handleGoBack = () => {
    const {navigation}= this.props; //es6
    navigation.goBack();
    this.props.navigation.goBack();
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#FFFFFF'}}>
          <Left style={{flex: 1}}>
            <Button transparent onPress={this.handleGoBack} >
              <Icon name='arrow-back' style={{ color: '#000000'}}/>
            </Button>
          </Left>
          <Body style={{flex: 1,alignItems:'center'}}>
            <Title style={{color: '#000000' }}>Add Note</Title>
          </Body>
          <Right style={{flex: 1}}>
            <Button transparent style={{left:5,top:2}} onPress={this.handleGoBack}>
            <Image source={require('../public/assets/checked.png')} style={{ color: '#000000'}}/>
            </Button>
          </Right>
        </Header>
        <Content padder>
        <Item regular>
            <Input placeholder='Add Title' />
          </Item>
          <Form>
            <Textarea rowSpan={5} bordered placeholder='Add Description' />
          </Form>
        </Content>
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