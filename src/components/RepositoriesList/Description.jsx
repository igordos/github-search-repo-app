// @flow strict
import * as React from 'react';
import styles from './style.module.scss';

type DescriptionProps = {
  children: React.Node,
};

const Description = ({ children }: DescriptionProps): React.Node => {
  return <p className={styles.RepositoriesList__description}>{children}</p>;
};

export default Description;
