// @flow strict
import * as React from 'react';
import styles from './style.module.scss';

type HeaderProps = {
  title: React.Node,
  children?: React.Node,
};

const Header = ({ children = null, title }: HeaderProps): React.Node => {
  return (
    <div className={styles.Repository__header}>
      <h1 className={styles.Repository__title}>
        <span className={styles.Repository__iconBox}>
          <svg className={styles.Repository__iconRepo} fill="#6a737d">
            <use href="#repo" />
          </svg>
        </span>
        {title}
      </h1>
      {children}
    </div>
  );
};

export default Header;
