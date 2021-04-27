import React, { memo } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomeRoute, ProfileRoute } from './routes';

export const App = memo(
  function App() {
    return (
      <BrowserRouter>
        <NavBar />
        <Container>
          <Switch>
            <Route path="/" exact>
              <HomeRoute />
            </Route>
            <Route path="/profile">
              <ProfileRoute />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
);
