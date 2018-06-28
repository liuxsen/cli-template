/*
 * todo action
 * @Author: jianhui@yzyw-inc.com
 * @Date: 2018-06-28 13:10:40
 * @Last Modified by: jianhui
 * @Last Modified time: 2018-06-28 16:55:16
 */

import { ADD_TODO, TOGGLE_TODO } from '../actionTypes/todo.types';

export function addTodo(payload: { text: string }) {
  return { type: ADD_TODO, payload };
}

export function toggleTodo(index: number) {
  return { type: TOGGLE_TODO, index };
}
