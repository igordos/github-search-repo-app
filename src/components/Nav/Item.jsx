// @flow strict
import * as React from 'react';
import styles from './style.module.scss';

type ItemProps = {
  children: React.Node,
};

const Item = React.forwardRef<ItemProps, {}>(({ children }: ItemProps, ref): React.Node => (
  <div ref={ref} className={styles.Nav__item}>
    {children}
  </div>
));

export default Item;
