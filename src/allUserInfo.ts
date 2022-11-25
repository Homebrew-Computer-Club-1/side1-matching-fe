export const defaultUserInfos : IdefaultUserInfos = {
    essential : {
        input : ["name","age","kakaoTalk"],
    },
    notEssential: {
        etc : ["location"],
    },
}


export interface IdefaultUserInfos {
    essential : {
        input : TdefaultEssInput[];
    },
    notEssential : {
        etc : TdefaultNotEssStr[];
    }

}



        export type TdefaultEssInput = "name" | "age" | "kakaoTalk";
        export type TdefaultNotEssStr = "location";


