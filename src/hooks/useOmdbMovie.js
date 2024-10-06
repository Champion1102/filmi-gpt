import { useEffect, useState } from 'react';
import { OMDB_KEY } from '../utils/constants';

const useOmdbMovie = (title, year,language) => {
    const [movieInfo, setMovieInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMovieInfo = async () => {
            if (!title || !year || !language) return;

            try {
                const response = await fetch(`https://www.omdbapi.com/?t=${title}&y=${year}&l=${language}&apikey=${OMDB_KEY}`);
                const data = await response.json();
                if (data) {
                    setMovieInfo(data);
                } else {
                    setError(data.Error);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieInfo();
    }, [title, year,language]);

    return { movieInfo, loading, error };
};

export default useOmdbMovie;
