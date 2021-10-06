import React, { useState, useEffect } from 'react';
import { DashNavbar, AttendanceClock } from '../Components';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { userActions } from '../Actions';
import Admin from './Admin';

const Dashboard = (props) => {
    const [isAdmin, setIsAdmin] = useState(true)

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        setIsAdmin(user.content['role'])
    }, [])

    if (isAdmin === 'admin') {
        return <Admin />
    } else {
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
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    logout: userActions.logout,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(Dashboard);
export { connectedHomePage as Dashboard };