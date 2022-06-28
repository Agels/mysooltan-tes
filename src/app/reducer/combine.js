import {combineReducers} from 'redux';
import { repoReducer } from './repoReducer';

export const reducer = combineReducers({
    repo:repoReducer,
    token:"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"
})