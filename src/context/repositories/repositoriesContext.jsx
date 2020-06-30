// @flow strict
import * as React from 'react';
import { createContext, useContext } from 'react';
import { repositoriesReducer, initialState } from './repositoriesReducer';
import type { RepositoriesActionType, RepositoriesStateType } from './repositoriesReducer';

type RepositoriesContextPropsType = {
  state: RepositoriesStateType,
  dispatch: (action: RepositoriesActionType) => RepositoriesStateType | void,
};

const RepositoriesContext = createContext<RepositoriesContextPropsType>({
  state: initialState,
  dispatch: () => {},
});

type RepositoriesProviderPropsType = {
  children?: React.Node,
};

export const RepositoriesProvider = ({ children }: RepositoriesProviderPropsType) => {
  const [state, dispatch] = React.useReducer(repositoriesReducer, initialState);

  return (
    <RepositoriesContext.Provider value={{ state, dispatch }}>
      {children}
    </RepositoriesContext.Provider>
  );
};

export const useRepositories = () => {
  const context = useContext(RepositoriesContext);
  if (!context) {
    throw new Error(`useRepositories must be used within an RepositoriesProvider`);
  }
  return context;
};
