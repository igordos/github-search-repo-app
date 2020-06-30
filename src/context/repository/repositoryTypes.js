// @flow strict
import type { Owner } from '../../types/Owner';

export type RepositoryType = {
  id: number,
  name: string,
  fullName: string,
  description: string,
  owner: Owner,
  htmlUrl: string,
};
