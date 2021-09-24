import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../Actions';
import '../Styles/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Card, CardBody, Container, Row, Col, Button} from 'reactstrap';
import Clock from 'react-live-clock';
import { AttendanceLog } from './AttendanceLog';

const AttendanceClock = (props) => {
    const { user, users } = props; 
    console.log(users);
    return (
    <>
            <div className="jumbotron-set">
                <Jumbotron className="text-center text-white">
                    <h5><Clock format={'dddd, MMMM Do YYYY'} ticking={true} timezone={'Asia/Jakarta'} /></h5>
                    <h1 className="fw-bold"><Clock format={'hh:mm A'} ticking={true} timezone={'Asia/Jakarta'} /></h1>
                    <h5>Your location: </h5>
                    <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
                        <div class="p-2 bd-highlight"><Button className="btn btn-success">Clock In</Button></div>
                        <div class="p-2 bd-highlight"><Button className="btn btn-danger">Clock Out</Button></div>
                    </div>
                </Jumbotron>
            </div>
            <Card className="card-set">
                <CardBody className="card-body-set">
                    <p className="fw-bold fs-5 text-center">Attendance Log</p>
                    <AttendanceLog />
                </CardBody>
            </Card>
    </>
    )
}
function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(AttendanceClock);
export { connectedHomePage as AttendanceClock };
