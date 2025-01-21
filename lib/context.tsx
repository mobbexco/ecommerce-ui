import { createContext } from 'react';

interface GlobalContextValue {
  state: { [key: string]: any };
  setState: (newState: any) => void;
}

const defaultValue: GlobalContextValue = {
  state: {},
  setState: (newState: GlobalContextValue['state']) => {},
};

export const GlobalContext = createContext(defaultValue);

export default function GlobalProvider({ children, state, setState }: any) {
  return (
    <GlobalContext.Provider
      value={{
        state,
        setState: (newState: any) => {
          setState({
            ...state,
            ...newState,
          });
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
