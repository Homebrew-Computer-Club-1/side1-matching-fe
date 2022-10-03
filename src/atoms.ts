import {atom} from "recoil";
interface IuserInfoData {
    name:string;
    age:number;
}

interface userData {
    id:number;
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

export const allUserDatasAtom = atom<userData[]>({
    key:"allUserDatas",
    default:[]
})