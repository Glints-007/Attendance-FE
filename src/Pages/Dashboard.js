import React from 'react';
import DashNavbar from '../Components/DashNavbar';
import { AttendanceClock } from '../Components/AttendanceClock';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';



const Dashboard = (props) => {
   return (
    <>
    <div className="dashboard">
        <Container>
            <DashNavbar />
            <AttendanceClock />
        </Container>
    </div>
    </>
    )
}

const connectedHomePage = connect()(Dashboard);
export { connectedHomePage as Dashboard };