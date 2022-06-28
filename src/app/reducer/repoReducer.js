import {AVATAR, REPO} from '../constant/constant';

const initialState = {
    repo:[],
    avatar:{},
    token:"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"
}

export const repoReducer = (state = initialState,{type,payload}) => {
    switch(type){
        case REPO : 
            return {
                ...state,
                repo:payload,
            }
        case AVATAR : 
            return {
                ...state,
                avatar:payload,
            }
        default : 
        return state;
    }
}