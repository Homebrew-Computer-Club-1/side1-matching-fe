import {atom} from "recoil";
interface IuserInfoData {
    name:string;
    age:number;
}

export interface IuserData {
    googleId:string;
    name:string;
    age:number;
}

export const isLightModeAtom = atom({
    key:"isLightMode",
    default:true,
})

export const userInfoDataAtom = atom<IuserInfoData>({
    key:"userInfoData",
    default:{} as any
})

export const allUserDatasAtom = atom<IuserData[]>({
    key:"allUserDatas",
    default:[]
})

export const currentUserAtom = atom<IuserData>({
    key : "currentUser",
    default : {} as any
});