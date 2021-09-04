import React, {useState, useEffect} from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavItemBtn, NavBtnLink, SearchInput, SpecialNavButton,Marka, SearchBar, SearchButton } from './Navbar.elements';
import MarkadoLogoComplete from '../../assets/markado-icon-markado.svg';
import MarkadoLogoCompleteWhite from '../../assets/markado-icon-markado-white.svg';
import MarkaSolaBlanca from '../../assets/marka-w.svg';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import { HiSearch } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
   
    const [scrolledDown, setNavbar] = useState(false);
    
    const changeBackground = () => {
        if (window.scrollY >= 90) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    
    window.addEventListener('scroll', changeBackground);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ size: 22 }}>
            <Nav scrolledDown={scrolledDown}>
                <NavbarContainer>
                    <NavLogo to="/">
                        <img src={scrolledDown ? MarkadoLogoComplete : MarkadoLogoCompleteWhite} alt="logo" />
                    </NavLogo>
                    <MobileIcon onClick={handleClick} scrolledDown={scrolledDown}>
                        {click ? <RiCloseLine /> : <RiMenuFill />}
                    </MobileIcon>
                    
                    <SearchBar>
                        <SearchButton scrolledDown={scrolledDown}><HiSearch /></SearchButton>
                        <SearchInput scrolledDown={scrolledDown} name="search" type="Search" placeholder="Buscar en todas las categorias" />
                    </SearchBar>

                    <NavMenu onClick={handleClick} click={click}>
                        <NavItemBtn>
                            {button ? (
                            <NavBtnLink to="/">
                                <SpecialNavButton scrolledDown={scrolledDown} primary>
                                    Subir Anuncio
                                    <Marka src={MarkaSolaBlanca} alt="Marka" />
                                </SpecialNavButton>
                            </NavBtnLink>
                            ) : (
                            <NavBtnLink to="/">
                                <SpecialNavButton scrolledDown={scrolledDown} fontBig primary>
                                    Subir Anuncio
                                    <Marka src={MarkaSolaBlanca} alt="Marka" />
                                </SpecialNavButton>
                            </NavBtnLink>
                            )}
                        </NavItemBtn>

                        <NavItem>
                            <NavLink scrolledDown={scrolledDown} to='/'>Registrate</NavLink>
                        </NavItem>
                    
                        <NavItem>
                            <NavLink scrolledDown={scrolledDown} to='/'>Entrar</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
