/**
 * Created by xiaoming on 2018/1/26.
 */
import { AppNavigator } from '../pages/container/MainContainer';
import {NavigationActions} from 'react-navigation';
import * as types from '../actions/ActionTypes';


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Drawer');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
/*const secondAction = AppNavigator.router.getActionForPathAndParams('Login');*/
const initialNavState = AppNavigator.router.getStateForAction(
  /*secondAction,*/
  tempNavState
);

export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case types.NAVIGATOR_NAVIGATE:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.name }),
        state
      );
      break;
    case types.NAVIGATOR_RESET:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({ routeName: action.name }),
        state
      );
      break;
    case types.NAVIGATOR_REPLACE:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({ routeName: action.name }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
