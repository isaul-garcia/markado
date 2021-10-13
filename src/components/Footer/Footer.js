import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import {FooterContainer, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinksItems, 
        FooterLink, 
        FooterLinkTitle, 
        SocialMedia, 
        SocialMediaWrap, 
        WebsiteRights, 
        SocialIcons, 
        SocialIconLink} from './Footer.elements';
import MarkadoLogoComplete from '../../assets/markado-icon-markado.svg';
import MarkadoLogoM from '../../assets/markado-icon-m.svg';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle><img src={MarkadoLogoComplete} alt="logo" /></FooterLinkTitle>
                        <FooterLinkTitle><img src={MarkadoLogoM} alt="logo" /></FooterLinkTitle>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>¿Quiénes somos?</FooterLinkTitle>
                        <FooterLink to="/Markado">Sobre Nosotros</FooterLink>
                        <FooterLink to="/Markado">Prensa</FooterLink>
                        <FooterLink to="/Markado">Equipo</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Soporte</FooterLinkTitle>
                        <FooterLink to="/Markado">Preguntas Frecuentes</FooterLink>
                        <FooterLink to="/Markado">Reglas de Publicacion</FooterLink>
                        <FooterLink to="/Markado">Consejos de Seguridad</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Legal</FooterLinkTitle>
                        <FooterLink to="/Markado">Condiciones de Uso</FooterLink>
                        <FooterLink to="/Markado">Politica de Privacidad</FooterLink>
                        <FooterLink to="/Markado">Cookies</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>©2021 Markado S.e.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
