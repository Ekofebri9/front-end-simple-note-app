import { createAppContainer, createDrawerNavigator, DrawerItems } from "react-navigation";
import React, {Component} from 'react';
import NoteUpdate from '../../notes/NoteUpdate';
import StackNavigators from './StackNavigators';
import { StyleSheet,Image } from 'react-native';
import { Container,Header, Body, Content, Thumbnail, Text } from "native-base";
const editPageDrawer = (props) => (
  <Container>
    <Header style={{height:200,backgroundColor:'#FFFFFF'}}>
      <Body style={{alignItems:"center"}}>
        <Thumbnail large source={require('../assets/foto.png')}/>
        <Text>EKO FEBERIYANTO</Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)
const AppDrawerNavigator = createDrawerNavigator({
    Note: { screen: StackNavigators },
    Category: { screen:  NoteUpdate },
    Category1: { screen:  NoteUpdate },
    Category2: { screen:  NoteUpdate },
    Category3: { screen:  NoteUpdate }
},
{drawerWidth: 230,contentComponent: editPageDrawer
})
  
  const appContainer = createAppContainer(AppDrawerNavigator);
export default appContainer;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});