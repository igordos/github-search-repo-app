import * as React from 'react';
import { Link } from 'react-router-dom';

import Header from './index';
import SearchRepositories from '../Search';
import Nav from '../Nav';
import Logo from '../Logo';

export default {
  title: 'Header',
  component: Header,
};

export const Default = () => (
  <Header>
    <Header.Item>
      <Link to="/">
        <Logo />
      </Link>
    </Header.Item>
    <Header.Hide>
      <Header.Item>
        <SearchRepositories />
      </Header.Item>
      <Header.Item>
        <Nav>
          <Nav.Item>
            <Link to="/">Github src</Link>
          </Nav.Item>
        </Nav>
      </Header.Item>
    </Header.Hide>
  </Header>
);
