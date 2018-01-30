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
  StyleSheet,
  StatusBar
} from 'react-native';
import propTypes from 'prop-types';


import { connect } from 'react-redux';
import { StackNavigator,addNavigationHelpers} from 'react-navigation';
import '../../global/GlobalRegister';
import Drawer from '../main/Drawer';
import NavButton from '../../component/NavButton';



class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    const {nav,dispatch} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={COLOR.primaryDarkColor}/>
        <AppNavigator
          navigation={addNavigationHelpers({ dispatch, state: nav })}/>
      </View>
    )
  }
}

MainContainer.propTypes = {
  dispatch:propTypes.func.isRequired,
  nav:propTypes.object.isRequired,
};


export const AppNavigator = StackNavigator({
  Drawer:{
    screen:Drawer,
  },
},{
  initialRouteName:'Drawer',
  headerMode:'screen',
  navigationOptions:({navigation}) => {
    let {state,goBack} = navigation;
    // 用来判断是否隐藏或显示header
    // console.log(navigation)
    let title = '';
    let onLeftPress;
    if(state.params){
      if(state.params.name){
        title = state.params.name   //是否显示标题
      }
      if(state.params.onLeftPress){
        onLeftPress= state.params.onLeftPress;  //是否自定义左边按钮的响应事件
      }
    }
    return {
      headerTitle: title,
      headerStyle :{
        backgroundColor: COLOR.primaryColor,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerLeft:(
        <NavButton
          data={{
            type:'icon',
            onPress: onLeftPress
              ? onLeftPress
              :()=>{
                goBack();
              }
          }}/>
      ),
      headerBackTitle: null,
      headerRight:(
        <View style={{width: 48,height: 48}}/>
      ),
      headerTitleStyle:{
        fontSize:FONTSIZE.large,
        color:COLOR.whiteColor,
        alignSelf:'center'
      },
    }
  }
});





const mapStateToProps = state => {
  //console.log(state);
  return {
    nav:state.AppNavigatorReducer
  }
};

/*const mapDispatchToProps = dispatch => ({
 actions: bindActionCreators(RequestActionCreater, dispatch)
 });

 export default connect(state => {
 console.log(state);
 return {
 name: state.RequestReducer.name
 }
 },
 (dispatch) => {
 return {
 actions: bindActionCreators(RequestActionCreater, dispatch)
 }
 }
 )(MainScreen);*/


export default connect(mapStateToProps)(MainContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});