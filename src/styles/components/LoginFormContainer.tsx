import styled from "styled-components";

export const FormsContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    align-content:center;
    width:100%;

    & input,button{
        border:none;
        border-radius:5px;
        padding:0.5rem;
        
        width:100%;
    }

    & div:first-child{
        width:100%;
        background:red;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }

    & input{

        background:rgba(0,0,0,0.33);
        width:100%;
        height:4rem;
    }


    
    & div{
        display:flex;
        flex-direction:row;
        margin-top:0.25rem;
        width:100%;
    }


    & div > input,button{
        background:rgba(0,0,0,0.33);
        align-items:center;
        justify-content:center;
        margin-top:0.5rem;
        width:100%;
    }

    & > div > input{
        height:3.5rem;
        width:100%;
        margin-right:1rem;
    }

    & div > button{
        background:var(--dark-less);
        width:29%;
       
    }

    & p{
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size:0.8rem;
        color:#353535;
    }

`;