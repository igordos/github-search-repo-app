// @flow strict
import * as React from 'react';
import styles from './style.module.scss';
import Item from './Item';

type NavProps = {
  children: React.Node,
};

function Nav({ children = null }: NavProps): React.Node {
  return <nav className={styles.Nav}>{children}</nav>;
}

Nav.Item = Item;

export default Nav;
