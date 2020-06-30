// @flow strict
import * as React from 'react';
import styles from './style.module.scss';

type TitleProps = {
  children: React.Node,
};

const Title = ({ children }: TitleProps): React.Node => {
  return <h2 className={styles.RepositoriesList__title}>{children}</h2>;
};

export default Title;
