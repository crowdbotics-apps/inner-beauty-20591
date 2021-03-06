import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps106341Navigator from '../features/Maps106341/navigator';
import Add-Item106340Navigator from '../features/Add-Item106340/navigator';
import Maps106336Navigator from '../features/Maps106336/navigator';
import UserProfile106332Navigator from '../features/UserProfile106332/navigator';
import Maps106251Navigator from '../features/Maps106251/navigator';
import Add-Item106250Navigator from '../features/Add-Item106250/navigator';
import Maps106246Navigator from '../features/Maps106246/navigator';
import UserProfile106242Navigator from '../features/UserProfile106242/navigator';
import BlankScreen0106219Navigator from '../features/BlankScreen0106219/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps106341: { screen: Maps106341Navigator },
Add-Item106340: { screen: Add-Item106340Navigator },
Maps106336: { screen: Maps106336Navigator },
UserProfile106332: { screen: UserProfile106332Navigator },
Maps106251: { screen: Maps106251Navigator },
Add-Item106250: { screen: Add-Item106250Navigator },
Maps106246: { screen: Maps106246Navigator },
UserProfile106242: { screen: UserProfile106242Navigator },
BlankScreen0106219: { screen: BlankScreen0106219Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
