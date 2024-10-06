import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import getGeminiResponse from '../utils/gemini';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchTextRef = useRef(null);
  const dispatch = useDispatch();


  const searchMovieTMDB = async (movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie + '&include_adult=false&language=en-US&page=1',API_OPTIONS);
    const json = await data.json()
    return json.results;
  }

  const handleGptSearchClick = async () => {
    const searchText = searchTextRef.current.value;
    const response = await getGeminiResponse(searchText);
    const gptMovies = response.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResults({movieNames: gptMovies,movieResults : tmdbResults}));
  };

  return (
    <div className="pt-[30%] md:pt-[5%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchTextRef}
          type="text"
          className="p-4 m-3  md:m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button
          className="py-2  md:px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;