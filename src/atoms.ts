import {atom, selector} from "recoil";
import { recoilPersist } from "recoil-persist";

export type TgoogleId = string;
interface IessUserInfo {
    name:string;
    age:number;
    tel:string;
}

interface InotEssUserInfo {
    [key:string] : any;
}


interface IuserInfoData extends IessUserInfo, Partial<InotEssUserInfo>{

}

export interface IuserData extends IuserInfoData {
    googleId:TgoogleId;
}

export interface IUserDataFromBe extends IessUserInfo, Partial<InotEssUserInfo>{
    google_id:TgoogleId;
}

export type TmlResult = TgoogleId[];


const { persistAtom } = recoilPersist({
    key : 'recoil_persist',
    storage:localStorage,
})


export const isLightModeAtom = atom({
    key:"isLightMode",
    default:true,
    effects_UNSTABLE : [persistAtom]
})


export const userInfoDataAtom = atom<IuserInfoData>({
    key:"userInfoData",
    default:{} as any,
    effects_UNSTABLE : [persistAtom]
})

export const allUserDatasAtom = atom<IuserData[]>({
    key:"allUserDatas",
    default:[],
    effects_UNSTABLE : [persistAtom],
})

export const currentUserDataAtom = atom<IuserData>({
    key : "currentUserData",
    default : {} as any,
    effects_UNSTABLE : [persistAtom],
});

export const mlResultAtom = atom<TmlResult>({
    key : "mlResult",
    default : [],
    effects_UNSTABLE : [persistAtom],
})

export const  inputUserInfoAvaiableAtom = atom<boolean>({
    key: "inputUserInfoAvaiable",
    default : true,
    effects_UNSTABLE : [persistAtom]
})