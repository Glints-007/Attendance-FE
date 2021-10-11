import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Container} from 'reactstrap';
import { connect } from 'react-redux';
import { authHeader } from '../Helpers';
import axios from 'axios';
import moment from 'moment';

class AttendanceLog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attLog:null,
            dataLog: []
        }
        this.getLog = this.getLog.bind(this)

    }

    getLog() {
        axios.get(process.env.REACT_APP_API_URL + "/clock-history", {headers: authHeader()})
        .then(result => {
            const attLog = result.data;
            this.setState({
                dataLog: result.data
            })
        })
        .catch(err => {
            console.log('error : ',err);
        })
    }


    componentDidMount() {
        this.getLog()
    }

    render() {
        return (
            <>
            {this.state.dataLog.map(log => {
                return (
                    <Container>
                    <Row>
                        <Col>
                            <div className="card-log">
                                <div className="card-log-text">
                                    <h1 className="fw-bold text-center">{moment(log.created_at).format("DD")}</h1>
                                    <h6 className="text-center">{moment(log.created_at).format("ddd, MMM YY")}</h6>
                                </div>
                            </div>
                        </Col>
                        <Col className="align-self-center">
                            <div className="text-center">
                                <p className="fs-7 text-margin">Clock In</p>
                                <p className="fs-5 text-margin">{log.clock_in}</p>
                            </div>
                        </Col>
                        <Col className="align-self-center">
                            <div className="text-center">
                                <p className="fs-7 text-margin">Clock Out</p>
                                <p className="fs-5 text-margin">{log.clock_out}</p>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                
                )
            })}
            </>
        )
    }
}

const connectedHomePage = connect()(AttendanceLog);
export { connectedHomePage as AttendanceLog };
