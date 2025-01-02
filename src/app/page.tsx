'use client';

const Page = () => {
  const avisar = (msg: string) => {
    alert(msg);
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <button
        onClick={() => avisar('mensagem 1')}
        className='p-3 bg-blue-700 text-white rounded-md mr-3'
      >
        Clique aqui
      </button>
      <button
        onClick={() => avisar('mensagem 2')}
        className='p-3 bg-blue-700 text-white rounded-md'
      >
        Clique aqui
      </button>
    </div>
  );
};
export default Page;
