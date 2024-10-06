
export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/"


  export const SUPPORTED_LANGUAGES = [
    {identifier: "en",name:"English"},
    {identifier: "hindi",name:"Hindi"},
    {identifier: "marathi",name:"Marathi"},
    {identifier: "spanish",name:"Spanish"},
    {identifier:"japanese",name:"Japanese" }]


  export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;
  export const OMDB_KEY = process.env.REACT_APP_OMDB_KEY;
 export const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY;