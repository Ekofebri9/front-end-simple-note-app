import React, {Component} from 'react';
import { Alert, Image, StyleSheet, Picker } from 'react-native';
import { Container, Text, Header, Left, Body, Right, Title, Button, Icon, Content, Form, Textarea } from 'native-base';
import { connect } from 'react-redux' 
import { addNote } from '../public/redux/action/notes'

class AddNote extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      data: this.props.category.data,
      title: '',
      content: '',
      category: 0
    };
  }
  add = () => {
    if (this.state.title === '' || this.state.content === '' || this.state.category === 0) {
      Alert.alert(
        'Form is empty',
        'Please fill in all form',
        [{text: 'OK'}],
        {cancelable: false},
      )
    } else {
      this.addData()
      this.props.navigation.goBack()
    }
  }
  addData = () => {
    this.props.dispatch(addNote(this.state.title,this.state.content,this.state.category));
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#FFFFFF' }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={ this.props.navigation.goBack() } >
              <Icon name='arrow-back' style={{ color: 'black' }}/>
            </Button>
          </Left>
          <Body style={{
            flex: 1,
            alignItems:'center'}}>
            <Title style={{ color: 'black' }}>Add Note</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent 
              style={{ left:5, top:2 }} 
              onPress={() => { this.add() }}>
              <Image source={require('../public/assets/checked.png')}/>
            </Button>
          </Right>
        </Header>
        <Content padder>
        <Form style={{ marginLeft:15, marginTop:20 }}>
            <Textarea style={{ fontSize:20 }} rowSpan={2} placeholder='ADD TITLE...' onChangeText={(text) => this.setState({title: text})} />
          </Form>
          <Form style={{ marginLeft:15, marginBottom:10 }}>
            <Textarea style={{ fontSize:20 }} rowSpan={12} placeholder='ADD DESCRIPTION...' onChangeText={(text) => this.setState({content: text})} />
            <Text style={{ paddingLeft:5, fontWeight:'bold', fontSize: 20 }}>Category</Text>
            <Picker
              selectedValue={this.state.category}
              style={styles.pick}
              itemStyle={{fontWeight:'bold'}}
              onValueChange={
                (itemValue, itemIndex) => { this.setState({category: itemValue}) }}>
                <Picker.Item label={'--Category--'} color={'#FF0078'} />
              {this.state.data.map( item => (
                <Picker.Item key={item.id} label={item.category_name} value={item.id} />
              ) )}
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps= state => {
  return {
      category: state.category,
      notes: state.notes,
  }
}
export default connect(mapStateToProps)(AddNote)
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