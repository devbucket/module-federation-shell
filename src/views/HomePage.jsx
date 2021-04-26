import React, { memo } from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap'
import { ProfileCard } from 'profile/components';
import { View } from '../components/View'

const HomePage = memo(
  function HomePage() {
    return (
      <View>
        <Jumbotron>
          <h1>Welcome to the home page</h1>
          <p>
            This is an example site that will be served from the main app.
          </p>
        </Jumbotron>
        <Row>
          <Col xs={4}>
            <ProfileCard />
          </Col>
        </Row>
      </View>
    );
  }
);

export default HomePage;
