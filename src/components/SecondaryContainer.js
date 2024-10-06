import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)

  return (
    movies &&(
    <div className='bg-black'>
      <div className='mt-0 md:-mt-40 lg:-mt-52 md:pl-4 pl-4 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />

       </div>
    </div>
    )
  )
}

export default SecondaryContainer
