import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
}

body {
    background: #f0f0f0;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
margin-top: ${({topspacing}) => (topspacing ? '97px' : '0px')};
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}

@media screen and (max-width: 1280px) {
    margin-top: 0px;
}
`;

export const Button = styled.button`
border-radius: 18px;
background: ${({primary}) => (primary ? '#25d789' : '#d1ebe1')};
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #000;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-ease-in-out;
    background: #000;
    background: ${({primary}) => (primary ? '#d1ebe1' : '#25d789')};
}

@media screen and (max-width: 960px) {
    width:100%;
}
`;

export const LinkArrowButton = styled.button`
border-radius: 18px;
background: rgba(240,240,20,0);
white-space: nowrap;
color: #444;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
transition: transform 0.2s;
margin-bottom: ${({shortDesc}) => (shortDesc ? '60px' : '0px')};

&:hover {
    transform: translate(20px, 0px);
    opacity: 0.5;
}

@media screen and (max-width: 960px) {
    width:100%;
}
`;

export default GlobalStyle;