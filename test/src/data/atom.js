import { atom } from 'recoil'

export const isLogged = atom({
    key: "isLogged",
    default:false
})
export const isShow = atom({
    key: "isShow",
    default:true
})