/**
 * Created by xiaoming on 2018/1/17.
 */
import React, {Component} from 'react';
import {
  DrawerNavigator,
  DrawerItems,
  SafeAreaView
} from 'react-navigation';
import Tabs from './Tabs';


const Drawer = DrawerNavigator({
  Tabs: {
    screen: Tabs,
  },
},{
  drawerPosition:'left',
});

Drawer.navigationOptions = {
  header:null
};
export default Drawer;