import React from 'react';

function withAuth(Component) {
    return class WithAuth extends React.Component {
        state = {
            isLoggedIn: false,
            user: null,
        }

        componentDidMount() {
            const isLoggedIn = JSON.parse(localStorage.getItem('username'));
            if (isLoggedIn.username) {
                this.setState({ isLoggedIn: true, user: isLoggedIn.username })
            }
        }

        login = (e, username, password) => {
            e.preventDefault();
            localStorage.setItem('username', JSON.stringify({ username }));
            this.setState({ isLoggedIn: true, user: username });
        }

        logout = () => {
            localStorage.setItem('username', JSON.stringify({ username: null }));
            this.setState({ isLoggedIn: false, user: null });
        }

        render() {
            return (
                <Component
                    login={this.login}
                    logout={this.logout}
                    {...this.state} 
                    {...this.props} 
                />
            );
        }
    }
}

export default withAuth;