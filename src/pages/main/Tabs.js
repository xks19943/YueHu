/**
 * Created by xiaoming on 2017/6/7.
 */
import React,{Component} from 'react';

import { TabNavigator, StackNavigator} from 'react-navigation';
import TabIcon from '../../component/TabIcon';
import ReadContainer from '../container/ReadContainer';
import ListenIndex from '../listen/ListenIndex';
import WatchIndex from '../watch/WatchIndex';
import {
  Platform
} from 'react-native';

const isShowLine = Platform.OS === 'android' && Platform.Version < 21;
const Tabs = TabNavigator({
  Read: {
    screen: ReadContainer,
    navigationOptions:{
      tabBarIcon: ({focused}) => (
        <TabIcon
          focused={focused}
          icon={'book'}
          label={'阅'}/>
      ),
    }
  },
  Listen: {
    screen: ListenIndex,
    navigationOptions:{
      tabBarIcon: ({focused}) => (
        <TabIcon
          focused={focused}
          icon={'music-video'}
          label={'乐'}/>
      ),
    }
  },
  Watch: {
    screen: WatchIndex,
    navigationOptions:{
      tabBarIcon: ({focused}) => (
        <TabIcon
          focused={focused}
          icon={'insert-emoticon'}
          label={'悦'}/>
      ),
    }
  },
},{
  tabBarPosition:'bottom',
  swipeEnabled:false,
  animationEnabled:false,
  scrollEnabled:false,
  initialRouteName: 'Read',
  tabBarOptions: {
    style: {
      padding: 0,
      margin: 0,
      backgroundColor:COLOR.primaryColor,
      borderTopWidth:isShowLine?1:0,
      borderTopColor:isShowLine?COLOR.diverColor:null
    },
    indicatorStyle:{
      height:0,
    },
    iconStyle:{
      margin:0,
      padding:0,
      height:49,
      width:ScreenWidth/5
    },
    showLabel:false,
    showIcon:true,
  },
});


export default Tabs;