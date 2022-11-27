import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    normalColor:string;
    bgColor: string;
    textColor: string;
    btnColor: string;
    titleColor: string;
  }
}