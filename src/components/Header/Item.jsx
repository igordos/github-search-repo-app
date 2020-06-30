// @flow strict
import * as React from 'react';
import styles from './style.module.scss';

type ItemProps = {
  children: React.Node,
};

const Item = React.forwardRef<ItemProps, {}>(({ children }: ItemProps, ref): React.Node => {
  return (
    <div ref={ref} className={styles.Header__item}>
      {children}
    </div>
  );
});

export default Item;
