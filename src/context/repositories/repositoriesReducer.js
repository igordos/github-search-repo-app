// @flow strict
import type { RepositoriesType } from './repositoriesTypes';

export type RepositoriesActionType =
  | { type: 'GET_REPOSITORIES_REQUEST' }
  | {
      type: 'GET_REPOSITORIES_SUCCESS',
      payload: { repositories: RepositoriesType },
    }
  | { type: 'GET_REPOSITORIES_ERROR', error: string };

export type RepositoriesStateType = {
  loading: boolean,
  repositories: RepositoriesType,
  error: string | null,
};

export const initialState: RepositoriesStateType = {
  loading: false,
  repositories: {
    items: [],
    totalCount: 0,
  },
  error: null,
};

export function repositoriesReducer(
  state: RepositoriesStateType,
  action: RepositoriesActionType,
): RepositoriesStateType {
  switch (action.type) {
    case 'GET_REPOSITORIES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'GET_REPOSITORIES_SUCCESS':
      return {
        ...state,
        loading: false,
        repositories: action.payload.repositories,
      };
    case 'GET_REPOSITORIES_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
