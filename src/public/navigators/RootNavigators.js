import { createAppContainer,createStackNavigator, createDrawerNavigator } from "react-navigation";
import React, {Component} from 'react';
import { Image,StyleSheet,SafeAreaView,ScrollView, Dimensions } from 'react-native'
import Note from '../../notes/Note';
import NoteAdd from '../../notes/NoteAdd';
import NoteUpdate from '../../notes/NoteUpdate';
import AddCategory from '../../categories/AddCategory';
import EditPageDrawer from '../../components/Drawer';

const editPageDrawer =(props)=>(
  <EditPageDrawer navigation={props.navigation}/>
)
const AppNavigator = createStackNavigator({
  Note: {
    screen: Note,
  },
  NoteAdd: {
    screen: NoteAdd,
  },
  NoteUpdate: {
    screen: NoteUpdate,
  } 
},
{
  defaultNavigationOptions: {
    //initialRouteName: Note,
    header: null,
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Note: { 
    screen: AppNavigator,
  }
},
{ 
  drawerPosition:'left',
  contentComponent: editPageDrawer
});

const appContainer = createAppContainer(AppDrawerNavigator);
export default appContainer;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginLeft:10
  }
});