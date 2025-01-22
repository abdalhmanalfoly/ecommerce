'use client'; 

import { useUser } from '@clerk/nextjs';
import React, { useState ,useEffect } from 'react';

function DismissibleDiv() {
  const [isVisible, setIsVisible] = useState(true); 
  const {user} = useUser()
    const [isloged,setloged] = useState(false)
    useEffect(()=>{
      setloged(window.location.href.toString().includes('sign-in'))
    },[])
  return !isloged && (
    isVisible && (
      <div className="flex items-center justify-between gap-3 bg-gray-800 px-2 py-1 text-white">
        <div className="flex text-sm font-medium m-1">
          <p className='mr-1'>Hi you should</p>
          <a href="#" className="inline-block underline"> Check out this new course!</a>
        </div>

        <button
          aria-label="Dismiss"
          className="shrink-0 rounded-md bg-black/10 p-1 transition hover:bg-black/20"
          onClick={() => setIsVisible(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    )
  );
}

export default DismissibleDiv;
