import React, { useState } from 'react';

export default function Button({ handleParentVariable }: IButton) {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  /* Use handleParentVariable() to sets a state in parent component */
  const handleClick = () => {
    setIsToggled((prevState) => !prevState);
    handleParentVariable();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-mobbexWhite text-black font-sans py-2 px-4 rounded-xl shadow border border-solid w-full hover:bg-black hover:text-mobbexWhite"
    >
      {isToggled ? 'Mostrar menos' : 'Ver Financiación'}
    </button>
  );
}

interface IButton {
  handleParentVariable: () => void;
}
