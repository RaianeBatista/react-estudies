'use client';

import { FormEvent } from "react";

const Page = () => {

const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
    alert('Formulário enviado com sucesso!');
  };

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <h1 className='text-5xl mb-4'>Form de Login</h1>
      <form onSubmit={e => e.preventDefault()}>
        <input type='text' />
        <input type='submit' value='Enviar' />
      </form>
    </div>
  );
};
export default Page;
