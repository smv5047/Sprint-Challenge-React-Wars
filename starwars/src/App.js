import React, {useState, useEffect} from 'react';
import './App.css';
import GetStarWarsCharacters from './components/swapi-pull';

// const App = (props) => {

function App (props) {

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

      {character.map((item, index) => {
        console.log(item)
        return <h2 key={index}>{item.name}</h2>
      })
      }

      
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