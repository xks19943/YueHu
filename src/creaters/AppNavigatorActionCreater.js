/**
 * Created by xiaoming on 2018/1/26.
 */
import * as types from '../actions/ActionTypes';

export function navigate() {
  return {
    type:types.NAVIGATOR_NAVIGATE
  }
}

export function reset() {
  return {
    type:types.NAVIGATOR_RESET
  }
}

export function replace() {
  return {
    type:types.NAVIGATOR_REPLACE
  }
}