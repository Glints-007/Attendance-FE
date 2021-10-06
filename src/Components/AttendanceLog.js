import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Container} from 'reactstrap';
import { connect } from 'react-redux';

const AttendanceLog = (props) => {
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <div className="card-log">
                        <div className="card-log-text">
                            <h2 className="fw-bold text-center">24</h2>
                            <h6 className="text-center">Wed, Sept 21</h6>
                        </div>
                    </div>
                </Col>
                <Col className="align-self-center">
                    <div className="text-center">
                        <p className="fs-7 text-margin">Clock In</p>
                        <p className="fs-5 text-margin">09:00 AM</p>
                    </div>
                </Col>
                <Col className="align-self-center">
                    <div className="text-center">
                        <p className="fs-7 text-margin">Clock Out</p>
                        <p className="fs-5 text-margin">09:00 AM</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

const connectedHomePage = connect()(AttendanceLog);
export { connectedHomePage as AttendanceLog };
