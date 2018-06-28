/*
 * store state
 * @Author: jianhui@yzyw-inc.com
 * @Date: 2018-06-28 11:03:08
 * @Last Modified by: jianhui
 * @Last Modified time: 2018-06-28 15:38:00
 */
import { createStore, combineReducers } from 'redux';
import reducer from '../reducers/index.reducers';

const reducers = combineReducers(reducer);

const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
