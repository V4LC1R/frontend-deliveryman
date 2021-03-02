import { OtherLoginsContainer } from "../../styles/components/OtherLoginsContainer";

export function AlternativeLogins(){
    return(
       <OtherLoginsContainer>
           <button style={{background:'#EDDDDD',color:'var(--dark-less)'}}>
               G
           </button>
           <button style={{background:'white',color:'black'}}>
               Ap
           </button>

           <button style={{background:'#2D9CDB',color:'white',fontWeight:'bold'}}>
               <strong>F</strong>
           </button>
       </OtherLoginsContainer>
    );
}