import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
};

:root{
    --blue:#1f6ed6;
    --dark:#292933;
    --dark-less:#2D383F;
    --black-less:#333333;
    --yellow-dark:#F2C94C;
    --yellow:#F3DD17;
    --white:#fff;
};

@media(max-width: 1080px){
    html{
        font-size: 93.75%;
    }
}

@media(max-width: 720px){
    html{
        font-size: 87.5%;
    }
};
`

export default GlobalStyle