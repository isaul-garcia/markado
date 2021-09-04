import React from 'react';
import {Button} from '../../globalStyles';
import {FooterContainer, 
        FooterSubscription, 
        FooterSubHeading, 
        FooterSubText, 
        Form, 
        FooterWrapperImage,
        FooterImage
} from './RecuerdoRegistro.elements';

import Houses from '../../assets/house-house.png'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterWrapperImage><FooterImage src={Houses} /></FooterWrapperImage>
                <FooterSubHeading>
                    Registrate ahora para subir tu primer anuncio.
                </FooterSubHeading>
                <FooterSubText>Subir anuncios es libre de costo. No importa la cantidad!</FooterSubText>
                <Form>
                    <Button primary fontBig>Registrate Ahora</Button>
                </Form>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
