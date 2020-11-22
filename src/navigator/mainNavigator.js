import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1014797Navigator from '../features/BlankScreen1014797/navigator';
import BlankScreen914796Navigator from '../features/BlankScreen914796/navigator';
import BlankScreen014795Navigator from '../features/BlankScreen014795/navigator';
import BlankScreen114794Navigator from '../features/BlankScreen114794/navigator';
import BlankScreen014787Navigator from '../features/BlankScreen014787/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1014797: { screen: BlankScreen1014797Navigator },
BlankScreen914796: { screen: BlankScreen914796Navigator },
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
