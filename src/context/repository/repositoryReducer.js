// @flow strict
import type { RepositoryType } from './repositoryTypes';

export type RepositoryActionType =
  | { type: 'GET_REPOSITORY_REQUEST' }
  | {
      type: 'GET_REPOSITORY_SUCCESS',
      payload: { repository: RepositoryType },
    }
  | { type: 'GET_REPOSITORY_ERROR', error: string }
  | { type: 'GET_REPOSITORY_README_REQUEST' }
  | {
      type: 'GET_REPOSITORY_README_SUCCESS',
      payload: { content: string },
    }
  | { type: 'GET_REPOSITORY_README_ERROR', error: string };

type ReadmeType = {
  loading: boolean,
  content?: string | null,
  error?: string | null,
};

export type RepositoryStateType = {
  loading: boolean,
  repository: RepositoryType | null,
  error: string | null,
  readme: ReadmeType,
};

export const initialState: RepositoryStateType = {
  loading: false,
  repository: null,
  error: null,
  readme: {
    loading: false,
    content: null,
    error: null,
  },
};

export function repositoryReducer(
  state: RepositoryStateType,
  action: RepositoryActionType,
): RepositoryStateType {
  switch (action.type) {
    case 'GET_REPOSITORY_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'GET_REPOSITORY_SUCCESS':
      return {
        ...state,
        loading: false,
        repository: action.payload.repository,
      };
    case 'GET_REPOSITORY_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'GET_REPOSITORY_README_REQUEST':
      return {
        ...state,
        readme: {
          loading: true,
          error: null,
        },
      };
    case 'GET_REPOSITORY_README_SUCCESS':
      return {
        ...state,
        loading: false,
        readme: {
          content: action.payload.content,
          loading: true,
        },
      };
    case 'GET_REPOSITORY_README_ERROR':
      return {
        ...state,
        readme: {
          loading: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
