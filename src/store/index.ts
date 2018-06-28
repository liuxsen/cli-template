/*
 * store state
 * @Author: jianhui@yzyw-inc.com
 * @Date: 2018-06-28 11:03:08
 * @Last Modified by: jianhui
 * @Last Modified time: 2018-06-28 13:48:54
 */
import { createStore, combineReducers } from 'redux';
import reducer from '../reducers/index.reducers';

const reducers = combineReducers(reducer);

const store = createStore(reducers);

export default store;
