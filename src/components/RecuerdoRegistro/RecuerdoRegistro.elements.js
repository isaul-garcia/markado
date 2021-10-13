import styled from 'styled-components';


export const FooterContainer = styled.div`
background-color: #fff;
padding:2rem 0 2rem 0;
display: flex;
justify-content: center;
align-items: center;
`;

export const FooterSubscription = styled.section`
width: 65%;
justify-content: left;
align-items: left;
text-align: left;
margin-bottom: 24px;
padding: 24px;
color: #444444;
display: inline-block;

@media screen and (max-width: 1500px) {
    width: 88%;
}

@media screen and (max-width: 991px) {
    width: 100%;
    font-size: 32px;
    margin-bottom: 0px;
}
`;

export const FooterSubHeading = styled.p`
font-family: 'Inter', Arial, Helvetica, sans-serif;
margin-bottom: 10px;
font-size: 24px;
width: 60%;
display: inline-block;
z-index: 1;

@media screen and (max-width: 991px) {
    margin-bottom: 10px;
}
`;

export const FooterSubText = styled.p`
margin-bottom:30px;
font-size:18px;
width: 100%;
display: inline-block;
z-index: 1;

@media screen and (max-width: 991px) {
    margin-bottom: 10px;
}
`;

export const Form = styled.form`
width: 10%;
display: inline;
justify-content: right;
align-items: right;


@media screen and (max-width: 991px) {
    margin-top: 15px;
    width: 100%;
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

@media screen and (max-width: 991px) {
    width: 100%;
    margin: 0 0 16px 0;
}
`;

export const FooterWrapperImage = styled.div`
    width: 62%;
    display: inline-block;
    justify-content: right;
    align-items: right;
    text-align: right;
    position: absolute;
    margin-top: -56px;
    z-index: 0;
    pointer-events: none;

    @media screen and (max-width: 1500px) {
        width: 83%;
    }

    @media screen and (max-width: 991px) {
    display: none;
}
`

export const FooterImage = styled.img`
width: 300px;
display: inline-block;
justify-content: right;
align-items: right;
    z-index: 0;
`