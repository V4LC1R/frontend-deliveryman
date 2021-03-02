import { createContext, ReactNode, useState } from "react";

interface LoginData{
    stageSign:number;
    isLogin:boolean;
    isNew:boolean;
    handleGoToLogin:()=>void;
    HandleGoToSign:()=>void;
    handleGoToStart:()=>void;
    nextStageLogin:()=>void;
}

interface LoginContexProviderProps{
    children: ReactNode;
}

export const LoginContex = createContext({} as LoginData)

export function LoginContexProvider({children}:LoginContexProviderProps){
    const [isLogin,setIsLogin] = useState(false);
    const [isNew,setIsNew] = useState(false);

    const [stageSign,setStageSign]=useState(0);

    function nextStageLogin(){

    }

    function handleGoToLogin(){
        setIsLogin(true)
        setStageSign(0);
    }

    function HandleGoToSign(){

    }

    function handleGoToStart(){
        setStageSign(0)
        setIsLogin(false)
        setIsNew(false)
    }


    return(
        <LoginContex.Provider value={{
            stageSign,
            isLogin,
            isNew,
            handleGoToLogin,
            HandleGoToSign,
            handleGoToStart,
            nextStageLogin
        }}>
            {children}
        </LoginContex.Provider>
    );
}