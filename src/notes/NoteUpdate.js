import React, {Component} from 'react';
import { Image,StyleSheet,Picker } from 'react-native';
import { Container, Text, Header, Left, Body, Right, Title, Button, Icon, Content, Form, Textarea } from 'native-base';


export default class NoteUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });


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
              <Icon name='arrow-back' style={{ color: 'black'}}/>
            </Button>
          </Left>
          <Body style={{flex: 1,alignItems:'center'}}>
            <Title style={{color: 'black' }}>Add Note</Title>
          </Body>
          <Right style={{flex: 1}}>
            <Button transparent style={{left:5,top:2}} onPress={this.handleGoBack}>
              <Image source={require('../public/assets/checked.png')}/>
            </Button>
          </Right>
        </Header>
        <Content padder>
        <Form style={{marginLeft:15, marginTop:20,}}>
            <Textarea style={{fontSize:20}} rowSpan={2} placeholder='ADD TITLE...' value={this.props.navigation.state.params.title}/>
          </Form>
          <Form style={{marginLeft:15, marginBottom:10}}>
            <Textarea style={{fontSize:20}} rowSpan={12} placeholder='ADD DESCRIPTION...' value={this.props.navigation.state.params.content}/>
            <Text style={{paddingLeft:5,fontWeight:'bold', fontSize: 20}}>Category</Text>
            <Picker
              selectedValue={this.state.language}
              style={styles.pick}
              itemStyle={{fontWeight:'bold'}}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue}) }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>

          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  pick: {
    height: 50,
    width: 150,
    borderWidth: 1,
    elevation: 5
  },
  icon: {
    width: 24,
    height: 24,
  }
});