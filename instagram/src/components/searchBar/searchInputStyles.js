import styled from 'styled-components';

export const SearchBox = styled.div`
    box-sizing: border-box;
    width: 215px;
    font-size: 14px;
    font-weight: 500;
    height: 28px; 
    background: ${props => props.typing ? '#fff' : 'rgb(250,250,250)'};
    border-radius: 2px;
    border: 1px solid #dbdbdb;
    text-align: center;
    overflow: hidden;
    color: #999;
    padding: 0 10px;
    cursor: text;
    @media (max-width: 900px) {
        display: none;
    }
`;

export const SearchIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const InputBox = styled.input`
    width: 100%;
    font-size: 14px;
    height: 28px; 
    border-radius: 2px;
    border: none;
    text-align: left;
    color: #999;
    outline: none;
`;

export const CloseButton = styled.button`
    background: none; 
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
`;