import React, { useState } from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
    box-sizing: border-box;
    padding-top: 5%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #fafafa;
`;

const LoginForm = styled.form`
    box-sizing: border-box;
    background: #fff;
    padding: 10px 0;
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #e6e6e6; 
    border-radius: 3px;
`;

const FormInput = styled.input`
    background: #fafafa;  
    border: 1px solid #efefef; 
    border-radius: 3px; 
    box-sizing: border-box;
    width: 260px;
    height: 36px;
    padding: 0 15px;
    outline: none;
    transition: border 400ms;

    :focus {
        border: 1px #262626 solid;
    }
`;

const FormButton = styled.button`
    width: 260px;
    height: 30px;
    background: #3897f0;
    opacity: ${({isFaded}) => isFaded ? 0.5 : 1};
    border: 1px #3897f0 solid;
    border-radius: 3px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    transition: opacity 400ms;
`;

const Header = styled.h1`
    font-family: Lobster Two, cursive;
    font-weight: 500;
    font-size: 45px;
    margin: 0px 0;
`;

const Or = styled.div`
    width: 260px; 
    display: flex; 
    align-items: center; 
    justify-content: space-between;
`;

const Facebook = styled.div`
    width: 260px;
    display: flex; 
    align-items: center; 
    justify-content: center;
`;

const SignUp = styled.div`
    margin-top: 15px;
    height: 70px;
    width: 350px;
    background: #fff;
    display: flex; 
    align-items: center; 
    justify-content: center;
    border: 1px solid #e6e6e6; 
    border-radius: 3px;
    font-size: 14px;
    font-weight: 500;
`;

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