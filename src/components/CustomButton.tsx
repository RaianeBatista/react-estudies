type Props = {
    label: string;
    onClick: () => void;
};

export const CustomButton = ({ label, onClick }: Props) => {
    const handleButtonClick = () => {
        //alguma coisa
        onClick();
        //depois de alguma coisa
    }
  return (
    <button onClick={handleButtonClick} className='p-3 text-white bg-blue-700 rounded-md'>{label}</button>
  );
};
