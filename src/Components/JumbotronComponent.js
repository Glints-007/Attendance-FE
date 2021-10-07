import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const JumbotronComponent = (props) => {
  return (
      <div className="container text-white">
          <h6 className="fs-7 text-margin">Welcome,</h6>
          <h5 className="fs-5 text-margin fw-bold">Administrator</h5>
      </div>
  );
};

export default JumbotronComponent;