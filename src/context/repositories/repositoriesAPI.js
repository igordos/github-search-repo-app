// @flow strict
import API from '../../API';
import type { RepositoriesType } from './repositoriesTypes';

const encode = encodeURIComponent;

// eslint-disable-next-line import/prefer-default-export
export function searchRepositories({ q }: { q: string }) {
  return API.get<RepositoriesType>(`/search/repositories?q=${encode(q)}`);
}
