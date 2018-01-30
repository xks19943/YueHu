/**
 * Created by xiaoming on 2018/1/29.
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

import { connect } from 'react-redux';
import ReadIndex from '../read/ReadIndex';
import {bindActionCreators} from 'redux';
import * as RequestActionCreater from '../../creaters/RequestActionCreater';

class ReadContainer extends Component {
  render() {
    return (
      <ReadIndex {...this.props}/>
    )
  }
}


const mapStateToProps = state => {
  console.log(state);
  console.log('嘻嘻哈哈');
  const { RequestReducer } = state;
  return {
    readState:RequestReducer
  }
};

const mapDispatchToProps = dispatch => {
  let requestAction = bindActionCreators(RequestActionCreater, dispatch);
  return {
    requestAction
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ReadContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

