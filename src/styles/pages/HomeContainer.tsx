import styled from 'styled-components'

export const HomeContainer = styled.div`
    display:flex;
    flex-direction:row;
    width:100vw;
    height:100vh;

    background:var(--blue);
    align-content:center;
    justify-content:center;

    & img{
        padding:1.25rem;
        
    }
`;

export const LeftPlace = styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    justify-content:center;
    padding-left:3rem;
    height:100vh;
`;

export const TitleSite=styled.div`
    display:flex;
    flex-direction:column;

    color:var(--white);

    font-size:3rem;

    font-family: Verdana, Geneva, Tahoma, sans-serif;

    & strong:first-child{
        align-self:left;
    }
    & strong:last-child{
        margin-left:15vw;
        
    }
`;
