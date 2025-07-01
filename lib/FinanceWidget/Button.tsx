import { useState } from 'react';
import { IButton } from './Interfaces';

export default function Button({ handleParentVariable, isLoading, error }: IButton) {
  const [isToggled, setIsToggled] = useState(false);

  /* Use handleParentVariable() to sets a state in parent component */
  const handleClick = () => {
    setIsToggled((prevState) => !prevState);
    handleParentVariable();
  };

  if (error) {
    console.log('error: ', error);
    return <button className='financeWidget-button button-error'> Ver financiación </button>;
  }

  if (isLoading)
    return <button className='financeWidget-button button-loading' disabled> Cargando.. </button>


  return (
    <button
      onClick={handleClick}
      className="financeWidget-button"
    >
      {isToggled ? 'Mostrar menos' : 'Ver financiación'}
    </button>
  );
}