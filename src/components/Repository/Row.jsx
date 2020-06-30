// @flow strict
import * as React from 'react';
import styles from './style.module.scss';

type RowProps = {
  children?: React.Node,
};

const Row = ({ children = null }: RowProps): React.Node => {
  return <div className={styles.Repository__row}>{children}</div>;
};

export default Row;
