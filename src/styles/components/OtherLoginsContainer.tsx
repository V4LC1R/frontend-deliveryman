import styled from "styled-components";

export const OtherLoginsContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:100%;

display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap:1.35rem;
& button{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size:1.05rem;
    height:3rem;
    color:white;
}
`;