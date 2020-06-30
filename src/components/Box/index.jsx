// @flow strict
import * as React from 'react';
import styles from './style.module.scss';

type BoxProps = {
  children?: React.Node,
};

const Box = ({ children = null }: BoxProps) => {
  return <div className={styles.Box}>{children}</div>;
};

export default Box;
