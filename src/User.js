import React, { Component } from 'react';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = { href: '' };
      }
    
    render() {
        return (<div>
                    <a href={this.props.user.href}>{this.props.user.displayName}</a>
                 </div>
        );
    }
}

export default User;