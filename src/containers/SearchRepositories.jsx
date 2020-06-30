// @flow strict
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useRepositories } from '../context/repositories/repositoriesContext';
import { searchRepositories } from '../context/repositories/repositoriesAPI';
import { Search } from '../components';

const SearchRepositories = () => {
  let timer;
  const { dispatch } = useRepositories();
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (location.pathname === '/search' && query) {
      setSearchValue(query);
    } else {
      setSearchValue('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  });

  const handleChange = (value: string) => {
    clearTimeout(timer);
    if (value) {
      timer = setTimeout(function newSearch() {
        if (searchValue !== value) {
          setSearchValue(value);
          history.push({ pathname: '/search', search: `q=${value}` });
        }
        dispatch({ type: 'GET_REPOSITORIES_REQUEST' });
        const search = async () => {
          try {
            const payload = await searchRepositories({ q: value });
            dispatch({
              type: 'GET_REPOSITORIES_SUCCESS',
              payload: { repositories: payload.data },
            });
          } catch (error) {
            dispatch({ type: 'GET_REPOSITORIES_ERROR', error });
          }
        };
        search();
        clearTimeout(timer);
      }, 700);
    }
  };

  return (
    <Search placeholder="Search or jump to…" searchValue={searchValue} onChange={handleChange} />
  );
};

export default SearchRepositories;
