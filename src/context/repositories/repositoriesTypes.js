// @flow strict
import type { RepositoryType } from '../repository/repositoryTypes';

export type RepositoriesType = {
  items: RepositoryType[],
  totalCount: number,
};
