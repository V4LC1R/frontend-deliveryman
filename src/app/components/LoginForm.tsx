import { FormsContainer } from "../../styles/components/LoginFormContainer";
import { AlternativeLogins } from "./OtherLogins";

export function LoginForm(){
    return(
        <FormsContainer>
            <input type="text" placeholder="Email ou CNPJ"/>
                        
            <div>
                    <input type="text" />
                <button type="button"></button>

            </div>
            <p>Esqueceu a senha?</p>

            <AlternativeLogins/>
        </FormsContainer>
    );
}
