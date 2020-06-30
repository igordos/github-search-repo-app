// @flow strict
import * as React from 'react';
import styles from './style.module.scss';

type MainProps = {
  children: React.Node,
};

const Main = ({ children }: MainProps): React.Node => {
  return <main className={styles.Main}>{children}</main>;
};

export default Main;
