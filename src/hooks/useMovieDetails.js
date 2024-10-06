import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constants';

const useMovieDetails = (id) => {
    const [trailerId, setTrailerId] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            if (!id) return; 
            try {
                const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
                const json = await data.json();
                const filteredData = json.results.filter((video) => video.type === "Trailer");
                const trailer = filteredData.length ? filteredData[0] : json.results[0];
                setTrailerId(trailer);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        getMovieDetails();
    }, [id]);

    return trailerId; 
}

export default useMovieDetails;
