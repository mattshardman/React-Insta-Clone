import React, { Component } from 'react';

function withAuth(Component) {
    return class WithAuth extends Component {
        render() {
            return (
                <Component {...this.props} />
            );
        }
    }
}

export default withAuth;