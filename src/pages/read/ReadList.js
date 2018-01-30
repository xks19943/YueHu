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
import MyFlatList from "../../component/MyFlatList";
import filter from '../../services/filter';

export default class ReadList extends Component {
  date = '';
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {
   this.onRefresh();
  }


  onRefresh(){
    const { requestAction } = this.props;
    this.date = filter.today();
    let param = {
      date:filter.tomorrow()
    };
    requestAction.fetchData(true,false,false,param);
  }

  onLoadMore(){
    const { requestAction } = this.props;
    this.date = filter.yesterday(this.date);
    let param = {
      date:this.date
    };
    requestAction.fetchData(false,false,true,param);
  }

  render() {
    const { readState,title,navigation} = this.props;
    console.log(this.props);
    return (
      <MyFlatList
        refreshing={readState.isRefreshing}
        onRefresh={()=>this.onRefresh()}
        keyExtractor={(item)=>item.id}
        data={readState.dataList}
        renderItem={({item,index})=>this.renderItem(item,title,navigation)}/>
    )
  }

  renderItem(item,title,navigation){
    return(
      <ReadListItem
        item={item}
        title={title}
        navigation={navigation}/>
    )
  }
}


const ReadListItem = ({item, title, navigation})=>{
  if(title === '日报'){
    return(
      <View>
        <Text>{item.title}</Text>
      </View>
    )
  }else if(title === '干货'){
    return(
      <View>
        <Text>{item.title}</Text>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});