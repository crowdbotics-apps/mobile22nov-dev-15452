import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen014795Navigator from '../features/BlankScreen014795/navigator';
import BlankScreen114794Navigator from '../features/BlankScreen114794/navigator';
import BlankScreen014787Navigator from '../features/BlankScreen014787/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen014795: { screen: BlankScreen014795Navigator },
BlankScreen114794: { screen: BlankScreen114794Navigator },
BlankScreen014787: { screen: BlankScreen014787Navigator },

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
