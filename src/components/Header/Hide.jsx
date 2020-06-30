// @flow strict
import * as React from 'react';
import { useContext } from 'react';
import styles from './style.module.scss';
import HeaderContext from './context';

type HideProps = {
  children: React.Node,
};

const Hide = React.forwardRef<HideProps, {}>(({ children }: HideProps, ref): React.Node => {
  const { toggle } = useContext(HeaderContext);
  return (
    <div ref={ref} className={`${styles.Header__hide} ${toggle ? styles.Header__hide_toggle : ''}`}>
      {children}
    </div>
  );
});

export default Hide;
