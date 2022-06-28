import {REPO,AVATAR} from '../constant/constant';

export const repolist = (item) => ({
    type:REPO,
    payload:item
})
export const avatar = (item) => ({
    type:AVATAR,
    payload:item
})