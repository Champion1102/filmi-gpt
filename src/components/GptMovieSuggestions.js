import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import MovieList from './MovieList';
import { useEffect } from 'react';
import {resetGptMovieResults} from '../utils/gptSlice'



const GptMovieSuggestions = () => {
    
  const gpt = useSelector(store => store.gpt);
  const {movieResults, movieNames} = gpt;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetGptMovieResults());
    };
  }, [dispatch]);

   
  if(!movieNames) return null;

  return (
    <div className='p-4 m-4 text-white bg-black bg-opacity-50'>
       {movieNames.map((movieName,index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]} />)}

    </div>
  )
}

export default GptMovieSuggestions
