import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IMG_CDN_URL } from '../utils/constants';
import useMovieDetails from '../hooks/useMovieDetails';
import { setTrailerId } from '../utils/trailerSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MovieCard = ({ details }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { title, poster_path, id, release_date,original_language } = details;
    const trailerId = useMovieDetails(id);

    const handleClick = () => {
        dispatch(setTrailerId({ trailerId, title, releaseDate: release_date,language:original_language })); 
        navigate('/movieinfo'); 
        toast.info("Fantastic choice, enjoy!")
    };

    if (!poster_path) return null;

    return (
        <div className='w-36 md:w-52 pr-4 cursor-pointer transform transition-transform duration-300 hover:scale-110' onClick={handleClick}>
            <img src={IMG_CDN_URL + poster_path} alt={title} />
        </div>
    );
}

export default MovieCard;
