import React from 'react';

function withAuth(Component) {
    return class WithAuth extends React.Component {
        state = {
            loggedIn: false,
        }

        render() {
            return (
                <Component {...this.props} />
            );
        }
    }
}

export default withAuth;