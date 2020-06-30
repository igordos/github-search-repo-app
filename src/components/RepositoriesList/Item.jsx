// @flow strict
import * as React from 'react';
import styles from './style.module.scss';

type ItemProps = {
  children: React.Node,
};

const Item = ({ children }: ItemProps): React.Node => {
  return (
    <li className={styles.RepositoriesList__item}>
      <div className={styles.RepositoriesList__iconBox}>
        <svg className={styles.RepositoriesList__iconRepo} fill="#6a737d">
          <use href="#repo" />
        </svg>
      </div>
      <div className={styles.RepositoriesList__info}>{children}</div>
    </li>
  );
};

export default Item;
