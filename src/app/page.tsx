'use client';

import { useState } from "react";

const Page = () => {
  //array desconstruido
  const [count, setCount] = useState(0)

  const handleClickButton = () => {
   setCount(count + 1)
  };

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center text-3xl '>
      <p>{count}</p>
      <button onClick={handleClickButton} className='bg-blue-500 p-3'>
        +1
      </button>
    </div>
  );
};
export default Page;


