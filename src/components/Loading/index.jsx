// @flow strict
import * as React from 'react';
import styles from './style.module.scss';

const Loading = (): React.Node => {
  return (
    <div className={styles.Loading}>
      <svg className={styles.Loading__icon} width="38" height="38" stroke="#0366d6">
        <g transform="translate(1 1)" strokeWidth="2" fill="none" fillRule="evenodd">
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M11.416 1.247C2.165 4.883-2.388 15.333 1.247 24.584">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};

export default Loading;
