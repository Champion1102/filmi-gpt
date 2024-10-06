import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true)
    const [errormsg,setErrorMsg] = useState(null)
    
    const name  = useRef(null)
    const email = useRef(null);
    const password = useRef(null)
    const dispatch = useDispatch()

    const toggleSignInForm = () => {
         setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {
      const message = checkValidData(email.current.value, password.current.value);
      setErrorMsg(message);
    
      if (message) return;
    
      if (!isSignInForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then(async (userCredential) => {
            const user = userCredential.user;
            await updateProfile(user, {
              displayName: name.current.value,
            });
    
            const { uid, email, displayName } = user; 
            dispatch(addUser({ uid, email, displayName }));
            toast.warn("You are going to love it!")
          
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode + '-' + errorMessage);
          toast.error("valid email & Password should contain a capital letter and 8 letters!")
          });
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            
    
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid, email, displayName }));
            toast.success("Welcome back!")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode + "-" + errorMessage);
            toast.error("valid email & Password should contain a capital letter and 8 letters!")
          });
      }
    };
    

  return (
<div className="relative">
  <Header />
  <div className="absolute ">
    <img src="/bg-movie.jpg" className="h-full object-cover w-full fixed" alt="bg" />
  </div>
  <form
    onSubmit={(e) => e.preventDefault()}
    className="absolute p-8 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3"
  >
    <h1 className="font-bold text-white text-2xl sm:text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
    {!isSignInForm && (
      <input
        type="text"
        ref={name}
        placeholder="Full Name"
        className="p-4 my-4 w-full bg-gray-700 rounded-md"
      />
    )}
    <input
      type="text"
      ref={email}
      placeholder="Email Address"
      className="p-4 my-4 w-full bg-gray-700 rounded-md"
    />
    <input
      type="password"
      ref={password}
      placeholder="Password"
      className="p-4 my-4 w-full bg-gray-700 rounded-md"
    />
    <p className="text-red-700 font-bold text-lg">{errormsg}</p>
    <button
      onClick={handleButtonClick}
      className="p-4 my-6 bg-red-700 w-full rounded-lg"
    >
      {isSignInForm ? "Sign In" : "Sign Up"}
    </button>
    <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
      {isSignInForm ? "New to FilmiGPT? Sign Up Now" : "Already a user? Sign In Now!"}
    </p>
  </form>
</div>

  )
}

export default Login
