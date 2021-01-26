import { createStore } from 'redux';
import { kaffeeReducer } from '../store/reducer/index';

export const store = createStore(kaffeeReducer)