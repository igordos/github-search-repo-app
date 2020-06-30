/* eslint-disable react/jsx-wrap-multilines */
// @flow strict
import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RepositoryProvider, useRepository } from '../context/repository/repositoryContext';
import { getRepository, getReadme } from '../context/repository/repositoryAPI';
import { Loading, Container, Repository, Box } from '../components';

type DetailProps = {
  children?: React.Node,
};

const Detail = ({ children = null }: DetailProps) => {
  const { owner, repo } = useParams();
  const {
    state: { loading, repository, error, readme },
    dispatch,
  } = useRepository();

  useEffect(() => {
    if (owner && repo) {
      dispatch({ type: 'GET_REPOSITORY_REQUEST' });
      const get = async () => {
        try {
          const payload = await getRepository({ owner, repo });
          dispatch({
            type: 'GET_REPOSITORY_SUCCESS',
            payload: { repository: payload.data },
          });
          // eslint-disable-next-line no-shadow
        } catch (error) {
          dispatch({ type: 'GET_REPOSITORY_ERROR', error });
        }
      };
      get();
    }
  }, [dispatch, owner, repo]);

  useEffect(() => {
    if (owner && repo) {
      dispatch({ type: 'GET_REPOSITORY_README_REQUEST' });
      const get = async () => {
        try {
          const payload = await getReadme({ owner, repo });
          dispatch({
            type: 'GET_REPOSITORY_README_SUCCESS',
            payload: { content: payload.data },
          });
          // eslint-disable-next-line no-shadow
        } catch (error) {
          dispatch({ type: 'GET_REPOSITORY_README_ERROR', error });
        }
      };
      get();
    }
  }, [repository]);

  const readmeTemplate = () => (
    <Box>
      {readme.error ? (
        <Container>
          <p>{readme.error.toString()}</p>
        </Container>
      ) : null}
      {loading ? (
        <Loading />
      ) : (
        // eslint-disable-next-line react/no-danger
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: readme.content }} />
      )}
    </Box>
  );

  const detailTemplate = () => {
    return repository ? (
      <>
        <Repository.Header
          title={
            <a target="_blank" rel="noopener noreferrer" href={repository.htmlUrl}>
              {`${repository.owner.login} / ${repository.name}`}
            </a>
          }
        />
        <Container>
          <Repository.Row>
            <div>{readmeTemplate()}</div>
            <div>
              <h3>About</h3>
              <p>{repository.description ? repository.description : 'Not created yet'}</p>
            </div>
          </Repository.Row>
        </Container>
      </>
    ) : null;
  };

  return (
    <>
      {error ? (
        <Container>
          <p>{error.toString()}</p>
        </Container>
      ) : null}
      {loading ? <Loading /> : detailTemplate()}
      {children}
    </>
  );
};

export default function Repo() {
  return (
    <RepositoryProvider>
      <Detail />
    </RepositoryProvider>
  );
}
