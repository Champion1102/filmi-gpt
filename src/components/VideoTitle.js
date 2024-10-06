import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTrailerId } from '../utils/trailerSlice';

const VideoTitle = ({ title, overview, id, releaseDate,language }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlayClick = () => {
    window.open(`https://www.youtube.com/watch?v=${trailerVideo?.key}`, '_blank');
  };

  const handleMoreInfoClick = () => {
    dispatch(setTrailerId({ trailerId: trailerVideo, title, releaseDate, language })); 
    navigate('/movieinfo'); 
  };

  return (
<div className='w-screen aspect-video pt-[20%] p-6 md:px-16 lg:px-24 absolute text-white bg-gradient-to-r from-black'>
  <h1 className='text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold'>{title}</h1>
  <p className="hidden min-[1550px]:inline-block py-4 lg:py-6 text-sm md:text-lg lg:text-xl w-full lg:w-1/3">
  {overview}
</p>

  <div className='my-4 md:my-6'>
    <button
      className='bg-white text-black text-sm sm:text-base md:text-lg lg:text-xl px-3 sm:px-6 md:px-8 lg:px-12 py-1 sm:py-2 md:py-3 lg:py-4 rounded-lg hover:bg-opacity-80'
      onClick={handlePlayClick}
    >
      ▶️ Play
    </button>
    
    <button
      className='bg-white text-black text-sm sm:text-base md:text-lg lg:text-xl px-3 sm:px-6 md:px-8 lg:px-12 py-1 sm:py-2 md:py-3 lg:py-4 ml-2 rounded-lg hover:bg-opacity-80'
      onClick={handleMoreInfoClick}
    >
      ℹ️ More Info
    </button>
  </div>
</div>

  );
};

export default VideoTitle;
