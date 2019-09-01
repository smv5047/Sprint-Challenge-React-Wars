import axios from "axios";


function getStarWarsCharacters(setter) {
    axios.get("https://swapi.co/api/people/")
    .then(res => console.log(res.data))
    .catch(err => console.log(err)
    )
}

export default getStarWarsCharacters