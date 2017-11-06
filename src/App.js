import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import UsersList from './UsersList';

const rootEl = document.querySelector('#root');

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = { users: [], loading: true };
      }

    getUsers(){
    
        return fetch('http://localhost:8080/dhis/api/users?paging=false&fields=href,id,displayName', {
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

    render() {
        if(this.state.loading){
            return (<div>
                        <h1>Loading</h1>
                    </div>);
        }else{
            return (
                <UsersList users={this.state.users} />
            );
        }
    }
}

export default App;