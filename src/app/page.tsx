'use client';

import { useState } from "react";

const Page = () => {
  //array desconstruido
  const [count, setCount] = useState<number>(0)

  const handleClickButton = () => {
    count++;
    console.log(count);
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


