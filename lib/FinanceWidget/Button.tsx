import { useState } from 'react';
import { IButton } from './Interfaces';

export default function Button({ handleParentVariable }: IButton) {
  const [isToggled, setIsToggled] = useState(false);

  /* Use handleParentVariable() to sets a state in parent component */
  const handleClick = () => {
    setIsToggled((prevState) => !prevState);
    handleParentVariable();
  };

  return (
    <button
      onClick={handleClick}
      className="financeWidget-button"
    >
      {isToggled ? 'Mostrar menos' : 'Ver financiación'}
    </button>
  );
}