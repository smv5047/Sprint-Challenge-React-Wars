import React, {useState} from 'react';
import styled from 'styled-components';



const SWCard = styled.div`
  width: 28%;
  height: 200px;
  border: 1px solid #443e3e;
  margin: 10px 2%;
  background: #443e3e;
  box-shadow: 5px 2.5px;
  border-radius: 10px;
`

const SWName = styled.div`
  width: 100%;
  height: 25%;
  color: black;
`
  


const Cards = (props) => {
    // STEP 2 - add the imported data to state
    const [cardState] = useState(props);
   
    
    return (

        cardState.map((item, index) => {
            console.log(item)
            return (
            <SWCard>
              <SWName>
                <p key={index}>{item.name}</p>  
              </SWName>
              <SWName>
                <p key={index}>Gender: {item.gender}</p>  
              </SWName>
              <SWName>
                <p key={index} color={item.eye_color}>Eye Color: {item.eye_color}</p>  
              </SWName> 
            </SWCard>
            )
          })
          
    );
  };
  
  export default Cards