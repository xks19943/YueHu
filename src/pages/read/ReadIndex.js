/**
 * Created by xiaoming on 2018/1/26.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ReadList from './ReadList';
import HeaderView from '../../component/HeaderView';

export default class ReadIndex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderView
          headerTitle={'阅'}/>
        <ScrollableTabView
          style={{flex:1}}
          tabBarBackgroundColor={COLOR.primaryColor}
          tabBarActiveTextColor={COLOR.whiteColor}
          tabBarInactiveTextColor={COLOR.diverColor}
          tabBarTextStyle={{fontSize:FONTSIZE.primary}}
          tabBarUnderlineStyle={{backgroundColor:COLOR.whiteColor}}>
          <ReadList title={'日报'} tabLabel={'日报'} {...this.props}/>
          <ReadList title={'干货'} tabLabel={'干货'} {...this.props}/>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});