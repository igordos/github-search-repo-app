// @flow strict
import * as React from 'react';

type HeaderContextPropsType = {
  toggle: boolean,
};

const HeaderContext = React.createContext<HeaderContextPropsType>({ toggle: false });

export default HeaderContext;
