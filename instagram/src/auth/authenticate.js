import React from 'react';

function withAuth(Component) {
    return class WithAuth extends React.Component {
        state = {
            isLoggedIn: false,
        }

        login = (e, username, password) => {
            e.preventDefault();
            localStorage.setItem('username', JSON.stringify({ username }));
            this.setState({ isLoggedIn: true });
        }

        render() {
            return (
                <Component 
                    login={this.login}
                    {...this.state} 
                    {...this.props} 
                />
            );
        }
    }
}

export default withAuth;