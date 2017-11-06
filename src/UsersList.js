import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = { status: [] };
      }
    
    render() {
        return (<div>
                    <div>{this.props.users.map((user) => <User user={user} key={user.id}/>)}</div>
                </div>);
    }
}

export default UsersList;