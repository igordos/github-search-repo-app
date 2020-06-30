// @flow strict
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './style.module.scss';
import HeaderContext from './context';
import Item from './Item';
import Hide from './Hide';

type HeaderProps = {
  children: React.Node,
};

function Header({ children = null }: HeaderProps): React.Node {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setToggle(false);
  }, [location]);

  const btnToggle = () => {
    setToggle(!toggle);
  };

  return (
    <HeaderContext.Provider value={{ toggle: toggle }}>
      <header className={styles.Header}>
        <button type="button" className={styles.Header__btnMenu} onClick={btnToggle}>
          <svg
            height="24"
            viewBox="0 0 16 16"
            version="1.1"
            width="24"
            aria-hidden="true"
            fill="#ffffff"
          >
            <path
              fillRule="evenodd"
              d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
            />
          </svg>
        </button>
        {children}
      </header>
    </HeaderContext.Provider>
  );
}

Header.Item = Item;
Header.Hide = Hide;

export default Header;
