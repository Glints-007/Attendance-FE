import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../Actions';

const Dashboard = (props) => {
    const { user, users } = props; 
   console.log(users);
    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100vh', width:'100%', margin:'auto'}}>

            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items &&
                <ul>
                    {users.items.map((user, index) =>
                        <li key={user.uid}>
                            {user.name + ' ' + user.email}
                        </li>
                    )}
                </ul>
            }

            <footer style={{ position:'absolute', bottom:'0', height:'80px' }}>
                <Link to="/dashboard" style={{ margin:'10px' }}>Dashboard</Link>
                <Link to="/about" style={{ margin:'10px' }}>About</Link>
                <Link to="/login" style={{ margin:'10px' }}>Logout</Link>
            </footer>
        </div>
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

const connectedHomePage = connect(mapState, actionCreators)(Dashboard);
export { connectedHomePage as Dashboard };
