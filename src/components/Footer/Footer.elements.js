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

export const FooterSubscription = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 24px;
padding: 24px;
color: #444444;
`;

export const FooterSubHeading = styled.p`
font-family: 'Inter', Arial, Helvetica, sans-serif;
margin-bottom: 24px;
font-size: 24px;
`;

export const FooterSubText = styled.p`
margin-bottom:24px;
font-size:20px;
`;

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;


@media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
}
`;

export const FormInput = styled.input`
padding: 12px 20px;
border-radius: 2px;
margin-right: 10px;
outline: none;
border: none;
font-size: 16px;
border-radius: 18px;
background-color: #f0f0f0;

&::placeholder {
    color: #242424
}

@media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
}
`;

export const FooterLinksContainer = styled.div`
width: 100%;
max-width: 1000px;
display: flex;
justify-content: center;

@media screen and (max-width: 820px) {
    padding-top: 32px;
}
`;


export const FooterLinksWrapper = styled.div`
display:flex;

@media screen and (max-width:820px) {
    flex-direction:column;
}
`;

export const FooterLinksItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #75827f;

@media screen and (max-width: 420px) {
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
max-width: 1000px;
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:90%;
max-width: 1000px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`;

export const SocialLogo = styled(Link)`
color: #444;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
margin-bottom: 16px;
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

export const AppDownloadLink = styled(Link)`
color: #444;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
margin-bottom: 16px;
`;