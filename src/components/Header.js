import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation(); 
    const user = useSelector((store) => store.user);
    const showgptSearch = useSelector((store) => store.gpt.showGptSearch);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }));
    
                if (location.pathname === '/') {
                    navigate('/browse');
                    toast.info('here you come!')
                }
            } else {
                dispatch(removeUser());
                if (location.pathname !== '/') {
                    navigate('/');
                }
            }
        });
    
        return () => unsubscribe();
    }, [dispatch, navigate, location.pathname]);
    
    

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
        if(showgptSearch){
            toast.success("Browse It")
        }else{
            toast.success("Find your Favourite")
        }
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    const isMovieInfoPage = location.pathname.includes('/movieinfo');
    const isProfilePage = location.pathname.includes('/profile');

    return (
<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center mb-0">
    <img
        className="w-36 h-8 md:w-44 md:h-10 bg-black rounded cursor-pointer"
        src="/logo.png"
        alt="logo"
        onClick={() => navigate('/browse')}
    />

    {user && (
        <div className="flex items-center space-x-2 md:space-x-4">
            {!isMovieInfoPage && !isProfilePage && showgptSearch && (
                <select
                    className="p-1 md:p-2 bg-gray-900 text-white hidden md:block"
                    onChange={handleLanguageChange}
                >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                        <option key={lang.identifier} value={lang.identifier}>
                            {lang.name}
                        </option>
                    ))}
                </select>
            )}

            {!isMovieInfoPage && !isProfilePage && (
<button
  className={`py-1 px-2 text-sm md:py-2 md:px-4 text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg relative overflow-hidden ${
    !showgptSearch ? 'border-2 border-transparent bg-clip-border' : 'bg-purple-800'
  }`}
  onClick={handleGptSearchClick}
>
  {!showgptSearch && (
    <span
      className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient-border  rounded-lg"
    ></span>
  )}
  <span className="relative z-10">{showgptSearch ? 'Browse' : 'Ask Filmi!'}</span>
</button>


            )}

            {(isMovieInfoPage || isProfilePage) && (
                <button
                    className="py-1 px-2 text-sm md:py-2 md:px-4 bg-purple-800 text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                    onClick={() => navigate('/browse')}
                >
                    Browse
                </button>
            )}

            <div className="flex items-center">
                <img
                    className="w-8 h-8 md:w-12 md:h-12 cursor-pointer rounded-full border-2 border-gray-300"
                    src={user.photoURL || "/usericon.png"}
                    alt="usericon"
                    onClick={() => {
                        navigate('/profile');
                        toast.info("So, you came to see yourself");
                    }}
                />
            </div>
        </div>
    )}
</div>


    );
};

export default Header;
