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

export interface ImatchingResult {
    allUserDatas : IuserData[];
    mlResult : string[];
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

export const currentUserDataAtom = atom<IuserData>({
    key : "currentUserData",
    default : {} as any
});

export const mlResultAtom = atom<string[]>({
    key : "mlResult",
    default : []
})