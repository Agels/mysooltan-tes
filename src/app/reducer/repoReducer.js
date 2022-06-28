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