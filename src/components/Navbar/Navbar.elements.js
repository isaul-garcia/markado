import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
background: ${({scrolledDown}) => (scrolledDown ? '#fff' : '#25d789')};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
transition: all 0.2s ease-in-out;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;

export const NavLogo = styled(Link)`
color: #000;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`;

export const MobileIcon = styled.div`
display: none;


@media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh; 
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.4s ease;
    background: #e1e1e1;
}
`;

export const NavItem = styled.li`
height: 80px;

@media screen and (max-width: 960px) {
    width:100%;

    &:hover {
        border:none;
    }
}
`;

export const NavLink = styled(Link)`
color: ${({scrolledDown}) => (scrolledDown ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)')};
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

&:hover {
    color: ${({scrolledDown}) => (scrolledDown ? '#25d789' : 'rgba(255,255,255,0.75)')};
}

@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
        color: #25d789;
    }

}`;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
}
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;


export const SearchBar = styled.form`
margin:auto;
max-width:390px;
`;

export const SearchInput = styled.input`
padding: 11px 0px 11px 10px;
font-size: 17px;
outline: none;
border: none;
border-radius: 0 18px 18px 0;
width:320px;
float: left;
background: ${({scrolledDown}) => (scrolledDown ? 'rgba(240,240,240,1)' : 'rgba(255,255,255,0.2)')};
transition: all 0.2s ease-in-out;
color: ${({scrolledDown}) => (scrolledDown ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,1)')};


&::-webkit-search-cancel-button,
&::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

&::placeholder {
    color: ${({scrolledDown}) => (scrolledDown ? '#75827f' : 'rgba(255,255,255,0.75)')};
}

@media screen and (max-width: 1280px) {
    width:10px;
}
`;

export const SearchButton = styled.div`
float: left;
padding: 9px 0px 6px 14px;
background: ${({scrolledDown}) => (scrolledDown ? 'rgba(240,240,240,1)' : 'rgba(255,255,255,0.2)')};
color: ${({scrolledDown}) => (scrolledDown ? '#444' : 'rgba(255,255,255,0.75)')};
font-size: 1.2rem;
outline: none;
border: none;
border-radius: 18px 0 0 18px;
transition: all 0.2s ease-in-out;
`;

export const SpecialNavButton = styled.button`
border-radius: 18px;
background:  ${({scrolledDown}) => (scrolledDown ? 'rgba(37, 215, 137, 1)' : 'rgba(255,255,255,0.20)')};
white-space: nowrap;
padding: 7px 20px;
color: rgba(255,255,255,1);
font-size: 1.2rem;
outline: none;
border: 2px solid ${({scrolledDown}) => (scrolledDown ? 'rgba(37, 215, 137, 1)' : 'rgba(255,255,255,1)')};
cursor: pointer;
transition: all 0.2s ease-ease-in-out;

&:hover {
    background: ${({scrolledDown}) => (scrolledDown ? 'rgba(37, 215, 137, 0.75)' : 'rgba(255,255,255,0.35)')};
    color: #fff;
}

@media screen and (max-width: 960px) {
    width:100%;
}
`;

export const Marka = styled.img`
height: 15px;
width: 34px;
padding-left: 10px;
margin-right: -3px;
`;