import { createAppContainer,createStackNavigator, createDrawerNavigator, DrawerItems } from "react-navigation";
import React, {Component} from 'react';
import { Image,StyleSheet,SafeAreaView,ScrollView, Dimensions } from 'react-native'
import { Container,Header, Body, Content, Thumbnail, Text, Button } from "native-base";
import Note from '../../notes/Note';
import NoteAdd from '../../notes/NoteAdd';
import NoteUpdate from '../../notes/NoteUpdate';
import AddCategory from '../../categories/AddCategory';

const editPageDrawer = (props) => (
  <Container>
    <SafeAreaView>
      <ScrollView>
        <Header style={{flex:1,height:150,backgroundColor:'#FFFFFF', borderBottomColor:'none', elevation: 0}}>
          <Body style={{alignItems:"center"}}>
            <Thumbnail large source={require('../assets/foto.png')} style={{marginTop:25}}/>
            <Text style={{marginTop:25}}>EKO FEBERIYANTO</Text>
          </Body>
        </Header>
        <Content style={{marginTop:30, marginLeft:20}}>
          <DrawerItems {...props}/>
          <Button iconLeft transparent onPress={() => this.props.navigation.closeDrawer()} >
            <Image source={require('../assets/plus.png')} style={styles.icon}/>
            <Text style={{color:'black'}}>Add Category</Text> 
          </Button>
        </Content>
      </ScrollView>
      
   </SafeAreaView>
  </Container>
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
  },
  modal: {
    textAlign: 'center',
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor:'white',
    marginTop: 0.09*height,
    padding: 10,
    borderRadius: 5,
    elevation: 5
  }
});