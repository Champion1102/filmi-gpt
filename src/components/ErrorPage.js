import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ErrorPage =() => {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const navigate = useNavigate()

  const handleLogoClick = () => {
    setShowEasterEgg(!showEasterEgg)
    if(!showEasterEgg){
      toast.success("You found the secret!")
    }
  }

  useEffect(() => {
    toast.warn("Caution: This page is known to spread laughter!");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex flex-col items-center justify-center p-4 text-white relative overflow-hidden">
      {showEasterEgg && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-75 transition-opacity duration-500 ease-in-out" />
      )}
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold mb-4">Oops! This Page Ghosted Us!</h1>
        <p className="text-xl mb-8">This page is currently in a toxic relationship with the internet.</p>
        
        <div className="relative w-48 h-48 mx-auto mb-8">
          <img
            src="https://yt3.googleusercontent.com/WW0ZKAb2qKAGHdAv3YIM52ZJ-zWJNZsB5o1CUxFCkTf2dEHhaRr7-bMTO8ULAx3RW8uf_YJr=s160-c-k-c0x00ffffff-no-rj"
            alt="NST Logo"
            width={160}
            height={160}
            className="rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={handleLogoClick}
          />
          {showEasterEgg && (
            <>
              <div className="absolute top-1/2 -left-64 transform -translate-y-1/2 text-6xl font-bold text-blue-200 opacity-25">
                Made by
              </div>
              <div className="absolute top-1/2 -right-64 transform -translate-y-1/2 text-6xl font-bold text-blue-200 opacity-25">
                NSTIAN
              </div>
            </>
          )}
        </div>
        

          <span className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 ease-in-out" onClick={() => {navigate('/');
            toast.success("Into the world of cinema!");
          }}>
             Teleport Back Home
          </span>
 
      </div>
      
      <div className="mt-12 text-blue-200 text-sm z-10">
        <p>Error Code: 404 - Page is currently binge-watching its favorite series</p>
      </div>
    </div>
  )
}

export default ErrorPage;