import { createStackNavigator, createAppContainer } from "react-navigation";
import Note from '../../notes/Note';
import NoteAdd from '../../notes/NoteAdd';
import NoteUpdate from '../../notes/NoteUpdate';
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
    header: null,
  }
});

const appContainer = createAppContainer(AppNavigator);
export default appContainer;