import React, {useState, useEffect} from 'react';
import './App.css';
import getStarWarsCharacters from './components/swapi-pull';

// const App = (props) => {

function App (props) {

  const [character, updateCharacter] = useState([]);

  useEffect(() => {
    getStarWarsCharacters(updateCharacter);
  }, []);

  

  
    // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      

    </div>
  );
}

export default App;
