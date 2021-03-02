import { HomeContainer,LeftPlace,TitleSite } from '../../styles/pages/HomeContainer';
import { HomePageActions } from '../components/HomePageActions';
import { LoginContex, LoginContexProvider } from '../context/LoginContex';


export function Home(){

    return(
        <HomeContainer>
            <LoginContexProvider>
                <HomePageActions/>
            </LoginContexProvider>
        </HomeContainer>
    );
}