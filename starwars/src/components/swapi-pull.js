import axios from 'axios';


function GetStarWarsCharacters(setter) {
    axios.get('https://swapi.co/api/people/')
    .then(res => setter(res.data.results))
    .catch(err => console.log(err)
    )
}

export default GetStarWarsCharacters