import styled from 'styled-components';

export const StartGateContainer = styled.div`

    display:flex;
    flex-direction:column;
    align-content:center;
    justify-content:center;

    & button{
        border-radius:5px;
        border:none;

        padding:2px;
        margin-top:1rem;

        width:100%;
        height:4rem;

        cursor: pointer;

        transition:background 0.2s;
    }

    & button:first-child{
        font-size:1.5rem;
    }

    & button:first-child:hover{
        background:#c2c2c2;
    }


    & button:last-child{
        font-size:1.5rem;
        background:var(--dark);
        color:white;
    }

    & button:last-child:hover{
        background:var(--dark-less);
    }
`;