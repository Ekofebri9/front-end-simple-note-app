import { createAppContainer,createStackNavigator, createDrawerNavigator } from "react-navigation";
import React, {Component} from 'react';
import { Image,StyleSheet,SafeAreaView,ScrollView, Dimensions } from 'react-native'
import Note from '../../notes/Note';
import NoteAdd from '../../notes/NoteAdd';
import NoteUpdate from '../../notes/NoteUpdate';
import AddCategory from '../../categories/AddCategory';
import EditPageDrawer from '../../components/Drawer';

const editPageDrawer =(props)=>(
  <EditPageDrawer/>
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

const {height, width} = Dimensions.get('window');
const AppDrawerNavigator = createDrawerNavigator({
  Personal: { 
    screen: AppNavigator,
    navigationOptions: {
    drawerIcon: ({ tintColor }) => (
      <Image source={require('../assets/writing.png')} style={[styles.icon, {tintColor: tintColor}]}/>
      ),
    }
  },
    Wishlist: { 
      screen:  AddCategory,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Image source={require('../assets/wishlist.png')} style={[styles.icon, {tintColor: tintColor}]}/>
          ),
        } 
    },
    Work: {
      screen:  AddCategory,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Image source={require('../assets/portfolio.png')} style={[styles.icon, {tintColor: tintColor}]}/>
          ),
        }
    },
    AddCategory: {
      screen:  AddCategory,
      navigationOptions: {
        drawerLabel: 'Add Category',
        drawerIcon: ({ tintColor }) => (
          <Image source={require('../assets/plus.png')} style={[styles.icon, {tintColor: tintColor}]}/>
          ),
        }
    },
},
{ 
  drawerWidth: width*0.65,
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