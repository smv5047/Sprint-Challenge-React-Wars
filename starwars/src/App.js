import React, {useState, useEffect} from 'react';
import './App.css';
import GetStarWarsCharacters from './components/swapi-pull';
import styled from 'styled-components';



//Stylings
const SWCardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 0 auto;
  justify-content: center;
`

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
  
//App functionality
function App () {

  const [character, updateCharacter] = useState([]);

  useEffect(() => {
    GetStarWarsCharacters(updateCharacter);
  }, []);

  console.log(character)

  
    // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //mapping over character array to create cards for each character
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <SWCardContainer>
        {character.map((item, index) => {
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
        }
      </SWCardContainer>
    </div>
  );
}

export default App;



