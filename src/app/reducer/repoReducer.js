import {AVATAR, REPO} from '../constant/constant';

const initialState = {
    repo:[],
    avatar:{},
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