// @flow
import * as React from 'react';
import { HashRouter as Router, Switch, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { routes, RouteWithSubRoutes } from './routes';
import { Header, Main, Container, Logo, Nav, Footer } from './components';
import { RepositoriesProvider } from './context/repositories/repositoriesContext';
import SearchRepositories from './containers/SearchRepositories';

const App = () => {
  return (
    <RepositoriesProvider>
      <Router>
        <div className="wrapper">
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
          <Main>
            <Switch>
              {routes.map((route) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <RouteWithSubRoutes key={uuidv4()} {...route} />
              ))}
            </Switch>
          </Main>
          <Footer>
            <Container>© 2020 GitHub, Inc.</Container>
          </Footer>
        </div>
      </Router>
    </RepositoriesProvider>
  );
};

export default App;
