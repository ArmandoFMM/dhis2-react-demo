import React, { Component } from 'react';
import {Button as Bt} from 'react-materialize'

class User extends Component {

    constructor(props) {
        super(props);
        this.state = { href: '' };
      }
    
    render() {
        return (
            <tr>
                <td>{this.props.user.displayName}</td>
                <td>{this.props.user.email}</td>
                <td>
                    <Bt waves='light' href={this.props.user.href} icon='remove_red_eye'></Bt>
                </td>
            </tr>
        );
    }
}

export default User;