import React, { memo } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { profileReducer } from 'profile/reducers';
import { NavBar } from './components/NavBar';
import { HomeRoute, ProfileRoute } from './routes';

console.warn(profileReducer);

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
