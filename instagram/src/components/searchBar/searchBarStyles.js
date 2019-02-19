import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    box-sizing: border-box;
    width: 100%; 
    height: ${props => props.isScrolled ? '52px' : '77px'};
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 10%;
    border-bottom: #eaeaea 1px solid;
    background: #fff;
    transition: padding 420ms, height 420ms;
    @media (max-width: 900px) {
        padding: 0 5%;
        justify-content: space-between;
    }
`;

export const LogoSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    width: 150px;
`;

export const LogoImg = styled.div`
    padding-right: 10px; 
`;

export const SeparatingLine = styled.div`
    height: 28px;
    width: 1px;
    background: #262626;
    transform: scaleX(0.5);
    opacity: ${({isScrolled}) => isScrolled ? 0 : 1};
    transition: opacity 420ms;
`;

export const LogoText = styled.div`
    opacity: ${props => props.isScrolled ? 0 : 1};
    font-family: Lobster Two, cursive;
    margin-left: 10px;
    font-size: 25px;
    transition: opacity 420ms;
`;

export const RightHandIcons = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    width: 150px;
    transition: width 420ms;
    @media (max-width: 900px) {
        width: 100px;
    } 
`;