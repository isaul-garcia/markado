import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterContainer = styled.div`
background-color: #fff;
padding:2rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const FooterLinksContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;

@media screen and (max-width: 991px) {
    padding-top: 32px;
    margin-left: -9em;
}
`;


export const FooterLinksWrapper = styled.div`
display:flex;

@media screen and (max-width:991px) {
    flex-direction:column;
}
`;

export const FooterLinksItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 275px;
box-sizing: border-box;
color: #75827f;

@media screen and (max-width: 991px) {
    margin: 0;
    padding: 10px;
    width: 100%;
}
`;

export const FooterLinkTitle = styled.h2`
margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
color: #75827f;
text-decoration: none;
margin-bottom: 0.5rem;

&:hover {
    color: #25d789;
}
`;

export const SocialMedia = styled.section`
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:62.5%;
margin: 40px auto 0 auto;

@media screen and (max-width: 991px) {
    flex-direction: column;
}
`;

export const WebsiteRights = styled.small`
color: #444444;
margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 120px;
`;

export const SocialIconLink = styled.a`
color: #444;
font-size: 24px;
`;