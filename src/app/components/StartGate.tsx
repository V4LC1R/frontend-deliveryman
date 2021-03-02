import { useContext } from "react";
import { StartGateContainer } from "../../styles/components/StartGateContainer";
import { LoginContex } from "../context/LoginContex";

export function StartGate(){

    const {handleGoToLogin,HandleGoToSign}=useContext(LoginContex);
    return(

        <StartGateContainer>
            <button
                type="button"
                onClick={handleGoToLogin}
            >
                <strong>Sing In</strong>
            </button>

            <button
                type="button"
                onClick={HandleGoToSign}
            >
                <strong>Sign Up</strong>
            </button>
        </StartGateContainer>
    );
}