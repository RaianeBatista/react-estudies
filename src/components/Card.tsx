import { ReactNode } from 'react';

type Props = {
  //   children: ReactNode;
  phrase: string;
  author?: string;
};

export const Card = ({ phrase, author }: Props) => {
  return (
    <div className='w-96 border-2 border-red-600 p-3 text-3xl text-center italic'>
      {/* {children} */}
      <h3 className='text-3xl font-bold italic'>{phrase}</h3>
      {/* {author && "Tem Autor"} */}
          {author && <p className='text-right text-sm'>- {author}</p>
          }
          {!author &&
              <p className='text-right text-sm italic '> -Autor desconhecido</p>
          }
    </div>
  );
};
