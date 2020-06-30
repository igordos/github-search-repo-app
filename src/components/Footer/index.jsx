// @flow strict
import * as React from 'react';
import styles from './style.module.scss';

type FooterProps = {
  children: React.Node,
};

const Footer = React.forwardRef<FooterProps, {}>(({ children }: FooterProps, ref): React.Node => (
  <footer ref={ref} className={styles.Footer}>
    {children}
  </footer>
));

export default Footer;
