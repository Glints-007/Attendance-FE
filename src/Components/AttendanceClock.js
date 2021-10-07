import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../Actions';
import '../Styles/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Card, CardBody, Button} from 'reactstrap';
import Clock from 'react-live-clock';
import { AttendanceLog } from './AttendanceLog';
import axios from 'axios';
import { authHeader } from '../Helpers';


class AttendanceClock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user:null,
            latitude: null,
            longitude: null,
            userCity: null,
            userLocality: null,

        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.reverseGeocodeLocation = this.reverseGeocodeLocation.bind(this)
        this.postClock = this.postClock.bind(this)
        this.putClock = this.putClock.bind(this)
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
            } else {
            alert("Geolocation is not supported by this browser.");
            }
    }

    getCoordinates(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        this.reverseGeocodeLocation();
    }

    reverseGeocodeLocation() {
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode?latitude=${this.state.latitude}&longitude=${this.state.longitude}&localityLanguage=en&key=c9c9055d301b4266891c2d45f9ff1e64`)
        .then(response => response.json())
        .then(data => this.setState({
            userCity: data.city,
            userLocality: data.locality
        }))
        .catch(error => alert(error))
    }

    handleLocationError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
            default:
                alert("An unknown error occurred.")
          }
    }

    postClock() {
        axios.post(process.env.REACT_APP_API_URL + "/clock-in", { lat : this.state.latitude, long : this.state.longitude}, {headers: authHeader()})
            .then(function (response) {
                alert(response.data.msg)
            })
            .catch(error => {
                console.log('error : ',error);
            })
    }

    putClock() {
        axios.put(process.env.REACT_APP_API_URL + "/clock-out", { lat : this.state.latitude, long : this.state.longitude}, {headers: authHeader()})
            .then(function (response) {
                alert(response.data.msg)
              })
            .catch(error => {
                console.log('error : ',error);
            
            })
    }

    componentDidMount() {
        this.getLocation()
        let user = JSON.parse(localStorage.getItem('user'));
        this.setState({user:user.content['name']})
    }

    render() {
        return (
            <>
                    <div className="name-box text-white">
                        <h6 className="fs-7 text-margin">Welcome,</h6>
                        <h5 className="fs-5 text-margin fw-bold">{this.state.user}</h5>
                    </div>
                    <div className="jumbotron-set">
                        <Jumbotron className="text-center text-white">
                            <h5><Clock format={'dddd, MMMM Do YYYY'} ticking={true} timezone={'Asia/Jakarta'} /></h5>
                            <h1 className="fw-bold clock-fs"><Clock format={'hh:mm A'} ticking={true} timezone={'Asia/Jakarta'} /></h1>
                            <h5>Your location: {this.state.userLocality}, {this.state.userCity}</h5>
                            <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
                                <div class="p-2 bd-highlight"><Button className="btn btn-success" onClick={this.postClock}>Clock In</Button></div>
                                <div class="p-2 bd-highlight"><Button className="btn btn-danger" onClick={this.putClock}>Clock Out</Button></div>
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
