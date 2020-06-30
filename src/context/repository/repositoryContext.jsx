// @flow strict
import * as React from 'react';
import { createContext, useContext } from 'react';
import { repositoryReducer, initialState } from './repositoryReducer';
import type { RepositoryActionType, RepositoryStateType } from './repositoryReducer';

type RepositoryContextPropsType = {
  state: RepositoryStateType,
  dispatch: (action: RepositoryActionType) => RepositoryStateType | void,
};

const RepositoryContext = createContext<RepositoryContextPropsType>({
  state: initialState,
  dispatch: () => {},
});

type RepositoryProviderPropsType = {
  children?: React.Node,
};

export const RepositoryProvider = ({ children }: RepositoryProviderPropsType) => {
  const [state, dispatch] = React.useReducer(repositoryReducer, initialState);

  return (
    <RepositoryContext.Provider value={{ state, dispatch }}>{children}</RepositoryContext.Provider>
  );
};

export const useRepository = () => {
  const context = useContext(RepositoryContext);
  if (!context) {
    throw new Error(`useRepository must be used within an RepositoryProvider`);
  }
  return context;
};
