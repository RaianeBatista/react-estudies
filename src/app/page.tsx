'use client';

const Page = () => {

  const handleClick = () => {
    alert("Tudo certo")
    
    // return () => {
    //   alert("Agora sim!")
    // }
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <button
        onClick={handleClick}
        className='p-3 bg-blue-700 text-white rounded-md'
      >
        Clique aqui
      </button>
    </div>
  );
};
export default Page;
