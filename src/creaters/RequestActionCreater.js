/**
 * Created by xiaoming on 2018/1/26.
 */
import * as types from '../actions/ActionTypes';
import ReadApi from '../model/ReadApi';


export function requestData(isRefreshing,isLoading,isLoadingMore) {
  return {
    type:types.REQUEST_DATA,
    isRefreshing,
    isLoading,
    isLoadingMore
  }
}

export function receiveDataSuccess(isRefreshing,isLoading,isLoadingMore,dataList) {
  return {
    type:types.REQUEST_DATA_SUCCESS,
    isRefreshing,
    isLoading,
    isLoadingMore,
    dataList
  }
}

export function receiveDataFailed(isRefreshing,isLoading,isLoadingMore) {
  return {
    type:types.REQUEST_DATA_SUCCESS,
    isRefreshing,
    isLoading,
    isLoadingMore,
  }
}

export function refreshData(isRefreshing) {
  return {
    type:types.REFRESH_DATA,
    isRefreshing,
  }
}

export function fetchData(isRefreshing,isLoading,isLoadingMore,params,options) {
  return function (dispatch) {
    console.log('调用了这个方法');
    dispatch(requestData(true,false,false));
    ReadApi.getNews(params,options)
      .then((rst)=>{
        console.log(rst);
        let dataList = rst.stories;
        dispatch(receiveDataSuccess(false,false,false,dataList));
      }).catch((e)=>{
      console.log('获取网络错误');
      dispatch(receiveDataFailed(false,false,false));
    });
  }
}