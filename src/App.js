import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import UsersList from './UsersList';
import { Button, Input, Row, Col, Preloader, Icon } from 'react-materialize';

const rootEl = document.querySelector('#root');

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = { users: [], loading: true, input: '' };
      }

    getUsers(){
    
        return fetch('https://play.dhis2.org/demo/api/users?paging=false&fields=href,id,displayName,email', {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Basic '+btoa('admin:district')+''
            }
        }).then( response => response.json())
            .then( response => {
                console.log(response);
                this.setState({ users: response.users, loading: false});
                // ReactDOM.render(<UsersList users={response.users} />, rootEl);
            });
    }

    componentWillMount(){
        this.getUsers();
    }

    filterUsers(e){
        this.setState({
            input: e.target.value,
          });
    }

    render() {
        if(this.state.loading){
            return (
                <Row>
                <Col s={4}>
                </Col>
                <Col className="loader-col" s={4}>
                <Preloader size='big'/>
                </Col>
                <Col s={4}>
                </Col>
            </Row>
            );
        }else{
            const list = this.state.users
            .filter(user => {
                
                return user.displayName.includes(this.state.input);
            });


            return (
                <div>
                    <Row>
                        <Input value={this.state.input} onChange={this.filterUsers.bind(this)} s={6} label="Filter" validate><Icon>search</Icon></Input>
                    </Row>
                    <UsersList users={list} />                
                </div>);
        }
    }
}

export default App;