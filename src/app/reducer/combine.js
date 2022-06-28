import {combineReducers} from 'redux';
import { repoReducer } from './repoReducer';

export const reducer = combineReducers({
    repo:repoReducer,
})