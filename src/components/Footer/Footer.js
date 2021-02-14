import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter, FaAppStoreIos, FaGooglePlay} from 'react-icons/fa';
import {Button} from '../../globalStyles';
import {FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLink, FooterLinkTitle, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, AppDownloadLink} from './Footer.elements';
import MarkadoLogoComplete from '../../assets/markado-icon-markado.svg';
import MarkadoLogoM from '../../assets/markado-icon-m.svg';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Registrate ahora para subir tu primer anuncio.
                </FooterSubHeading>
                <FooterSubText>Subir anuncios es libre de costo. No importa la cantidad!</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your email" />
                    <Button primary fontBig>Registrate</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle><img src={MarkadoLogoComplete} alt="logo" /></FooterLinkTitle>
                        <FooterLinkTitle><img src={MarkadoLogoM} alt="logo" /></FooterLinkTitle>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>¿Quiénes somos?</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Sobre Nosotros</FooterLink>
                        <FooterLink to='/'>Prensa</FooterLink>
                        <FooterLink to='/'>Equipo</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Soporte</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Preguntas Frecuentes</FooterLink>
                        <FooterLink to='/'>Reglas de Publicacion</FooterLink>
                        <FooterLink to='/'>Consejos de Seguridad</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Legal</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Condiciones de Uso</FooterLink>
                        <FooterLink to='/'>Politica de Privacidad</FooterLink>
                        <FooterLink to='/'>Cookies</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>©2021 Markado S.e.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
