import axios from "axios";

export default axios.create({
  baseURL:
    // "https://api.codetabs.com/v1/proxy?quest=https://superheroapi.com/api/3461052793969777/70"
    "https://swapi.co/api/films/"
  // "https://api.codetabs.com/v1/proxy?quest=http://www.recipepuppy.com/api/
});
