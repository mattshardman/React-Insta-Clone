import React, { useState } from 'react';
import styled from 'styled-components';

import { 
    LoginWrapper, 
    LoginForm, 
    Header, 
    FormInput, 
    FormButton, 
    Or, 
    Facebook, 
    SignUp 
} from './loginStyles';

function Login({ login }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <LoginWrapper>
            <LoginForm 
                onSubmit={(e) => login(e, username, password)}
            >
                <Header>Instagram</Header>
                <FormInput 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Phone number, username, or email"
                />
                <FormInput 
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <FormButton
                    disabled={!username || !password}
                    isFaded={!username || !password}
                    type="submit"
                >
                    Next
                </FormButton>
                <Or>
                    <div style={{ height: 1, width: '40%', background: '#e6e6e6' }}/>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#999'  }}>OR</span>
                    <div style={{ height: 1, width: '40%', background: '#e6e6e6' }}/>
                </Or>
                <Facebook>
                    <i className="fab fa-facebook" style={{ color: '#385185', marginRight: 10 }} />
                    <span style={{ color: '#385185', fontSize: 14, fontWeight: 700 }}>Login with Facebook</span>
                </Facebook>
                <div style={{ fontSize: 12, color: '#385185', }}>Forgot password?</div>
            </LoginForm>
            <SignUp>Don't have an account?<span style={{ color: '#3897f0' }}>&nbsp;Sign Up</span></SignUp>
            <p style={{ fontSize: 14, margin: 20 }}>Get the app.</p>
            <div style={{ width: 350, display: 'flex', justifyContent: 'center' }}>
                <img 
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" 
                    width={135 }
                    height={40}
                    style={{ marginRight: 5 }}
                />
                <img 
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" 
                    width={135 }
                    height={40}
                    style={{ marginLeft: 5 }}
                />
            </div>
        </LoginWrapper>
    )
}

export default Login;