// @flow strict
import * as React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useRepositories } from '../context/repositories/repositoriesContext';
import { RepositoriesList, Container } from '../components';

const Search = () => {
  const {
    state: { loading, repositories },
  } = useRepositories();

  return (
    <Container>
      <br />
      {!loading ? (
        <>
          <h2>
            {repositories.totalCount.toLocaleString()}
            &nbsp; repository results
          </h2>
          <br />
        </>
      ) : null}
      {repositories.items.length ? (
        <RepositoriesList loading={loading}>
          {repositories.items.map((item) => (
            <RepositoriesList.Item key={uuidv4()}>
              <RepositoriesList.Title>
                <Link to={`/repos/${item.owner.login}/${item.name}`}>{item.fullName}</Link>
              </RepositoriesList.Title>
              {item.description ? (
                <RepositoriesList.Description>{item.description}</RepositoriesList.Description>
              ) : null}
            </RepositoriesList.Item>
          ))}
        </RepositoriesList>
      ) : null}
    </Container>
  );
};

export default Search;
