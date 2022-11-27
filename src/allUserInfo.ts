export const defaultUserInfos : IdefaultUserInfos = {
    input : [
        {
            infoName : "name" ,
            headerMessage : "당신의 이름은 무엇인가요?",
            vaildOptions : {
                required : "값을 입력해 주세요",
                pattern : {
                    value : /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/,
                    message : "문자 형태만 가능합니다."
                }
            }
        },
        {
            infoName : "age" ,
            headerMessage : "나이를 알려주세요!",
            vaildOptions : {
                required : "값을 입력해 주세요",
                pattern : {
                    value : /[0-9]/,
                    message : "숫자만 가능합니다."
                }
            }
        },
        {
            infoName : "tel" ,
            headerMessage : "매칭후 다른 회원분들과 연락하기 위해, 전화번호를 알려주세요!",
            vaildOptions : {
                required : "값을 입력해 주세요",
                pattern : {
                    value : /^\d{3}-\d{3,4}-\d{4}$/,
                    message : "010-1234-5678 형식으로 작성해 주세요."
                }
            }
        }
    ]
}

interface IdefaultUserInfos {
    input : IdefaultInput[];
}

interface IdefaultInput {
        infoName : string;
        headerMessage : string;
        vaildOptions: IvaildOptions
}

export interface IvaildOptions {
    required: boolean | string;
    pattern: {
        value: RegExp;
        message: string;
    };
}