import React, {Component} from 'react';
import { Image,StyleSheet,Picker } from 'react-native';
import { Container, Text, Header, Left, Body, Right, Title, Button, Icon, Content, Form, Textarea } from 'native-base';
import axios from 'axios';

export default class Notes extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      selected: "key1",
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
  onValueChange( value ) {
    this.setState({
      selected: value
    });
  }
  handleGoBack = () => {
    const { navigation }= this.props; //es6
    navigation.goBack();
    this.props.navigation.goBack();
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#FFFFFF' }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={ this.handleGoBack } >
              <Icon name='arrow-back' style={{ color: 'black' }}/>
            </Button>
          </Left>
          <Body style={{
            flex: 1,
            alignItems:'center'}}>
            <Title style={{ color: 'black' }}>Add Note</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent style={{ left:5, top:2 }} onPress={ this.handleGoBack }>
              <Image source={require('../public/assets/checked.png')}/>
            </Button>
          </Right>
        </Header>
        <Content padder>
        <Form style={{ marginLeft:15, marginTop:20 }}>
            <Textarea style={{ fontSize:20 }} rowSpan={2} placeholder='ADD TITLE...' />
          </Form>
          <Form style={{ marginLeft:15, marginBottom:10 }}>
            <Textarea style={{ fontSize:20 }} rowSpan={12} placeholder='ADD DESCRIPTION...' />
            <Text style={{ paddingLeft:5, fontWeight:'bold', fontSize: 20 }}>Category</Text>
            <Picker
              selectedValue={this.state.categoryId}
              style={styles.pick}
              itemStyle={{fontWeight:'bold'}}
              onValueChange={(itemValue, itemIndex) => this.setState({categoryId: itemValue}) }>
              {this.state.data.map( item => (
                <Picker.Item key={item.id} label={item.category_name} value={item.category_name} />
              ) )}
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