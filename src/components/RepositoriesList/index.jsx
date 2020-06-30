// @flow strict
import * as React from 'react';
import styles from './style.module.scss';
import Item from './Item';
import Title from './Title';
import Description from './Description';
import Loading from '../Loading';

type RepositoriesListProps = {
  loading?: boolean,
  children: React.Node,
};

function RepositoriesList({ children, loading = false }: RepositoriesListProps): React.Node {
  return <ul className={styles.RepositoriesList}>{loading ? <Loading /> : children}</ul>;
}

RepositoriesList.Item = Item;
RepositoriesList.Title = Title;
RepositoriesList.Description = Description;

export default RepositoriesList;
