import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
  <>
    <div className='fixed -z-10'>
    <img src='./bgpixel.jpg' alt='bg' className='h-screen object-cover md:w-screen' />
  </div>
<div className=' md:p-0'>
  <GptSearchBar />
  <GptMovieSuggestions />
</div>
</>
  )
}

export default GptSearch
