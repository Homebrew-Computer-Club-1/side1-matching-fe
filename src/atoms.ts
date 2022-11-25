import {atom} from "recoil";

export type TgoogleId = string;
interface IuserInfoData {
    name:string;
    age:number;
    tel:string;
    [key:string] : any; // required false인거 수정 필요.

}

export interface IuserData extends IuserInfoData {
    googleId:TgoogleId;
}

export interface IUserDataFromBe {
    google_id:TgoogleId;
    name:string;
    age:number;
    tel:string;
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

export const mlResultAtom = atom<TgoogleId[]>({
    key : "mlResult",
    default : []
})