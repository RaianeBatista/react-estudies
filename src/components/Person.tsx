// const getWeekday = (today: Date) => {
//   return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(today);
// };

type Props = {
  name: string;
  avatar?: string;
    roles: string[];
    address?: string;
};

export const Person = ({
  name,
  avatar = 'https://img.freepik.com/vetores-premium/icone-de-perfil-de-avatar-padrao-imagem-de-usuario-de-midia-social-cinza-avatar-icone-em-branco-silhueta-vetor-ilustracao_561158-3485.jpg?w=740',
  roles,
}: Props) => {
  //   const { name, avatar, roles} = props;
  //     props.name
  //   const data = {
  //     name: 'Elon Musk',
  //     avatar:
  //       'https://nmspacemuseum.org/wp-content/uploads/2019/03/Elon_Musk.jpg',
  //     roles: ['CEO da Tesla', 'CEO da SpaceX', 'CEO da StarLink'],
  //   };

  //   const name: string = 'Elon Musk';
  //   const avatar: string =
  //     'https://nmspacemuseum.org/wp-content/uploads/2019/03/Elon_Musk.jpg';
  //   const today: Date = new Date();

  return (
    <div className=' p-3'>
      <h1 className='text-cyan-600 text-2xl'>
        {name}
        {/* - {getWeekday(today)} */}
      </h1>
      <img src={avatar} alt={name} className='w-40 h-52 rounded-full' />

      <ul>
        <li>{roles[0]}</li>
        <li>{roles[1]}</li>
        <li>{roles[2]}</li>
      </ul>
    </div>
  );
};
