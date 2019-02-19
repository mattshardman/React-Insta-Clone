import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    box-sizing: border-box;
    width: 100%; 
    height: ${props => props.isScrolled ? '52px' : '77px'};
    display: flex;
    align-items: center;
    justify-content: ${props => props.isMobile ? 'space-between' : 'space-around'};
    padding: ${props => props.isMobile  ? '0 5%' : '0 10%'};
    border-bottom: #eaeaea 1px solid;
    transition: height 400ms;
    background: #fff;
`;

export const LogoSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 20%; 
`;

export const LogoImg = styled.div`
    border-right: 1px #262626 solid;
    padding-right: 10px; 
    margin-right: 10px;
`;

export const LogoText = styled.div`
    opacity: ${props => props.isScrolled ? 0 : 1};
    font-family: Lobster Two, cursive;
    font-size: 25px;
    transition: opacity 420ms;
`;

export const RightHandIcons = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    width: 15%;
    min-width: 100px; 
`;