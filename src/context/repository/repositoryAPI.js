// @flow strict
import API from '../../API';
import type { RepositoryType } from './repositoryTypes';

const encode = encodeURIComponent;

export function getRepository({ owner, repo }: { owner: string, repo: string }) {
  return API.get<RepositoryType>(`/repos/${encode(owner)}/${encode(repo)}`);
}

export function getReadme({ owner, repo }: { owner: string, repo: string }) {
  return API.get<string>(`/repos/${encode(owner)}/${encode(repo)}/contents/README.md`, {
    headers: { Accept: 'application/vnd.github.v3.html' },
  });
}
