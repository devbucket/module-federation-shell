import React, { memo } from 'react';
import { Jumbotron } from 'react-bootstrap'

const HomePage = memo(
  function HomePage() {
    return (
      <Jumbotron>
        <h1>Welcome to the home page</h1>
        <p>
          This is an example site that will be served from the main app.
        </p>
      </Jumbotron>
    );
  }
);

export default HomePage;
