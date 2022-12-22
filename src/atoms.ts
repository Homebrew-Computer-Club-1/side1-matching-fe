import {atom} from "recoil";

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

export const mlResultAtom = atom<TmlResult>({
    key : "mlResult",
    default : []
})