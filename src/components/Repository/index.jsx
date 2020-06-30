// @flow strict
import * as React from 'react';
import styles from './style.module.scss';
import Header from './Header';
import Row from './Row';

type RepositoryProps = {
  children?: React.Node,
};

function Repository({ children = null }: RepositoryProps): React.Node {
  return <div className={styles.Repository}>{children}</div>;
}

Repository.Header = Header;
Repository.Row = Row;

export default Repository;
