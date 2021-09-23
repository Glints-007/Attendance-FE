import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
          <Container>
            <h3 className="display-8">User Approval</h3>
        </Container>
      </Jumbotron>
    </div>
  );
};

//biar bisa dipanggil darimana saja
export default JumbotronComponent;