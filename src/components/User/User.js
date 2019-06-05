import React from "react";
import { Container, Jumbotron, Row, Col, Button } from "reactstrap";

import "./User.css";
const User = props => {
 
  return (
    <main className = 'Userbackground'>
      <Jumbotron fluid className="UserContainer">
        <Container>
          <h1 className="display-3 mt-4 text-light " >Hello, world!</h1>
          <p className="lead text-light mt-2">Doing extraOrdinary things</p>
             <Button
              color="info"
            >
              Sign Up
            </Button>
        </Container>
      </Jumbotron>
    </main>
  );
};

export default User;
