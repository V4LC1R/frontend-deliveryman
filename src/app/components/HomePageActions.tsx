import { LeftPlace, TitleSite } from "../../styles/pages/HomeContainer";
import { LoginForm } from "./LoginForm";
import { StartGate } from "./StartGate";

import deliveryMan from '../../assets/svgDeliveryman.svg'
import { useContext, useEffect } from "react";
import { LoginContex } from "../context/LoginContex";

export function HomePageActions(){

    const {isLogin,isNew}=useContext(LoginContex)
    

    useEffect(()=>{},[isLogin])
    return(
        <>
        <img src={deliveryMan} alt=""/>
        <LeftPlace>
            <TitleSite>
                <strong>DeliveryMan</strong>
                <strong>.com</strong>
            </TitleSite>

            {
                isLogin ? (
                    <LoginForm/>
                ):
                (
                    <StartGate/>
                )                    
            }  

        </LeftPlace>
        </>
    );
}/* */