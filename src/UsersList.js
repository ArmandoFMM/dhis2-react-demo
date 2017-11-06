import React, { Component } from 'react';
import User from './User';
import { Table } from 'react-materialize';


class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = { status: [] };
      }
    
    render() {
        return (<Table>
            <thead>
                <tr>
                    <th data-field="id">Name</th>
                    <th data-field="name">E-mail</th>
                    <th data-field="price">Action</th>
                </tr>
            </thead>
        
            <tbody>
                {this.props.users.map((user) => <User user={user} key={user.id}/>)}
            </tbody>
        </Table>);
    }
}

export default UsersList;