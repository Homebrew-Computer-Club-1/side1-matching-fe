import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import Router from "./routes/Router";
import { isLightModeAtom } from "./atoms";
import { useRecoilValue } from "recoil";

export default function App (){
    const isLightMode = useRecoilValue(isLightModeAtom);
    return (
        <>
            <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
                <Router></Router>
            </ThemeProvider>
        </>
    );
}