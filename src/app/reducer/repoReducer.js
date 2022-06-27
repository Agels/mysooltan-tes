import {REPO} from '../constant/constant';

const initialState = {
    repo:[]
}

export const repoReducer = (state = initialState,{type,payload}) => {
    switch(type){
        case REPO : 
            return {
                ...state,
                repo:payload
            }
        default : 
        return state;
    }
}