import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
   const movies = useSelector((store) => store.movies?.upcomingMovies)
   if (!movies || movies.length === 0) return null; 


   const mainMovie = movies[0]
   const {original_title,overview,id,release_date,original_language} = mainMovie;
  return (
    <div className='md:pt-0  pt-[20%] bg-black'>
       <VideoTitle title={original_title}  overview={overview} id={id} releaseDate={release_date} language={original_language}   />
       <VideoBackground id={id} />
    </div>
  )
}

export default MainContainer
