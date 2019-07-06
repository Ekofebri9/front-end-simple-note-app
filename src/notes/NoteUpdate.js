import React, {Component} from 'react';
import { Image,StyleSheet,Picker } from 'react-native';
import { Container, Text, Header, Left, Body, Right, Title, Button, Icon, Content, Form, Textarea } from 'native-base';

import { connect } from 'react-redux' 
import { updateNote } from '../public/redux/action/notes'

class UpdateNote extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      data: this.props.category.data,
      id: this.props.navigation.state.params.id,
      category: (this.props.navigation.state.params.category) ? this.props.navigation.state.params.category.id : 0,
      title: this.props.navigation.state.params.title,
      content:  this.props.navigation.state.params.content,
    };
  }
  update = () => {
    this.props.dispatch(updateNote(this.state.id,this.state.title,this.state.content,this.state.category));
  }

  handleGoBack = () => {
    const { navigation }= this.props; //es6
    navigation.navigate('Note');
    //navigation.goBack();
    // this.props.navigation.goBack();
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#FFFFFF' }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={ () => this.props.navigation.goBack() } >
              <Icon name='arrow-back' style={{ color: 'black' }}/>
            </Button>
          </Left>
          <Body style={{
            flex: 1,
            alignItems:'center'}}>
            <Title style={{ color: 'black' }}>Update Note</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent 
              style={{ left:5, top:2 }} 
              onPress={async () => { 
                await this.update()
                this.handleGoBack() }}>
              <Image source={require('../public/assets/checked.png')}/>
            </Button>
          </Right>
        </Header>
        <Content padder>
        <Form style={{ marginLeft:15, marginTop:20 }}>
            <Textarea style={{ fontSize:20 }} rowSpan={2} placeholder='ADD TITLE...' onChangeText={(text) => this.setState({title: text})} value={this.state.title}/>
          </Form>
          <Form style={{ marginLeft:15, marginBottom:10 }}>
            <Textarea style={{ fontSize:20 }} rowSpan={12} placeholder='ADD DESCRIPTION...' onChangeText={(text) => this.setState({content: text})} value={this.state.content}/>
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

export default connect(mapStateToProps)(UpdateNote)

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
