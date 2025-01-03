'use client';

import { useState } from 'react';

const Page = () => {
  // const showSecret = true;
  const [showSecret, setShowSecret] = useState(false)

  const handleClickButton = () => { 
    setShowSecret(true)
  };
  

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center text-3xl '>
      <button onClick={handleClickButton} className='bg-blue-500 p-3'>
        Monstrar área secreta
      </button>
      {showSecret && 
        <div className=' bg-blue-300 p-3 rounded-md mt-3'>
          Área secreta
        </div>
      }
    </div>
  );
};
export default Page;
