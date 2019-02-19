import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 500px;
    max-width: 100%;
    border: 1px #eaeaea solid;
    border-radius: 3px; 
    box-sizing: border-box;
    margin: 10px 0;
    background: #fff;
`;

export const Header = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    padding-left: 20px;
    box-sizing: border-box;
`;

export const Avatar = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: black;
    margin-right: 10px;
    background-image: ${({thumbnailUrl}) => `url("${thumbnailUrl}")`};
    background-size: cover;
    background-position: center;
`;

export const ImageSection = styled.div`
    width: 100%;
    height: 350px;
    background-image: ${({imageUrl}) => `url("${imageUrl}")`};
    background-size: cover;
    background-position: center;
`;

export const TextSection = styled.div`
    width: 100%;
    border-top: 1px solid #eaeaea;
`;

export const Likes = styled.div`
    width: 100%;
    height: 55px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-left: 20px; 
    padding-top: 10px;
`;

export const Comments = styled.div`
    width: 100%; 
    padding: 5px 20px;
    box-sizing: border-box;
    text-align: left;  
`;

export const AddComments = styled.div`
    width: calc(100% - 40px);
    border-top: 1px #eaeaea solid;
    box-sizing: border-box;
    height: 50px;
    display: flex;
    align-items: center;
    margin: 10px 20px;
`;