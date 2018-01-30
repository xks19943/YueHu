/**
 * Created by xiaoming on 2018/1/26.
 */

import * as types from '../actions/ActionTypes';


const initialState = {
  isRefreshing:false,
  isLoading:false,
  isLoadingMore:false,
  isEmpty:true,
  hasMore:false,
  dataList:[]
};

export default function fetchData(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_DATA:
      return {
        ...state,
        isRefreshing:action.isRefreshing,
        isLoading:action.isLoading,
        isLoadingMore:action.isLoadingMore,
      };
    case types.REFRESH_DATA:
      return {
        ...state,
        isRefreshing:action.isRefreshing
      };
    case types.LOAD_MORE_DATA:
      return {
        ...state,
        isLoadingMore:true
      };
    case types.REQUEST_DATA_SUCCESS:
      return {
        ...state,
        isRefreshing:action.isRefreshing,
        isLoading:action.isLoading,
        isLoadingMore:action.isLoadingMore,
        dataList:action.dataList
      };
    case types.REQUEST_DATA_FAILED:
      return {
        ...state,
        isRefreshing:action.isRefreshing,
        isLoading:action.isLoading,
        isLoadingMore:action.isLoadingMore,
      };
    default:
      return state;
  }
}




