// @flow strict
import * as React from 'react';
import styles from './style.module.scss';

type ContainerProps = {
  children: React.Node,
};

const Container = React.forwardRef<ContainerProps, {}>(
  ({ children }: ContainerProps, ref): React.Node => (
    <div ref={ref} className={styles.Container}>
      {children}
    </div>
  ),
);

export default Container;
