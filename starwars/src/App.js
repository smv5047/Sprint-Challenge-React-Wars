import React, {useState, useEffect} from 'react';
import './App.css';
import GetStarWarsCharacters from './components/swapi-pull';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import styled from 'styled-components';


// const App = (props) => {

const SWCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`

const SWCard = styled.div`
  width: 25%;
  height: 200px;
  border: 1px solid red;
`
  

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

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <SWCardContainer>
        {character.map((item, index) => {
          console.log(item)
          return (
          <SWCard>
                <h1 key={index}>{item.name}</h1>
                <h2 key={index+"S"}>{item.height}</h2>
          </SWCard>
          )
        })
        }
      </SWCardContainer>
    </div>
  );
}

export default App;



// const Numbers = (props) => {
//   // STEP 2 - add the imported data to state
//   const [numberState] = useState(numbers);
 
  
//   return (
//     <div className="numberButtons">
//       {/* STEP 3 - Use .map() to iterate over your array data and return a button
//        component matching the name on the provided file. Pass
//        it any props needed by the child component*/
//       numberState.map((item, index) => {
//         console.log(item)
//         return <NumberButton setTotal= {props.setTotal} key={index} numbers={item} />
//         // return <NumberButton setTotal total={item} value={item} index={index} className="numbers" />
//       })
//        }
//     </div>
//   );
// };

// export default Numbers