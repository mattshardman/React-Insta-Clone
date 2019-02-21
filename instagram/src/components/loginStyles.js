import styled from 'styled-components';

export const LoginWrapper = styled.div`
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

export const LoginForm = styled.form`
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

export const FormInput = styled.input`
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

export const FormButton = styled.button`
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

export const Header = styled.h1`
    font-family: Lobster Two, cursive;
    font-weight: 500;
    font-size: 45px;
    margin: 0px 0;
`;

export const Or = styled.div`
    width: 260px; 
    display: flex; 
    align-items: center; 
    justify-content: space-between;
`;

export const Facebook = styled.div`
    width: 260px;
    display: flex; 
    align-items: center; 
    justify-content: center;
`;

export const SignUp = styled.div`
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