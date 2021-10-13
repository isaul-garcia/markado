import React from 'react';

import {Link} from 'react-router-dom';
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, FeaturedCard, FeaturedCardInfo, FeaturedVisual, Visual, PromotedIcon, FeaturedTitle, FeaturedDescription} from './InfoSection.elements';
import {Container, LinkArrowButton } from '../../globalStyles';
import { BsArrowRight } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { TiStar } from 'react-icons/ti';


const InfoSection = ({primary, lightBg, imgStart, topLine, lightTopLine, lightText, lightTextDesc, buttonLabel, description, headline, start, topspacing, featuredLink, featuredImg, featuredTitle, featuredDescription, promoted, shortDesc }) => {
    return (
        <>
        <IconContext.Provider value={{ color: '#444', size: 35 }}>
            <InfoSec lightBg={lightBg}> 
                <Container topspacing={topspacing}>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to={featuredLink}>
                                    <LinkArrowButton shortDesc={shortDesc} big fontBig primary={primary}>
                                        {buttonLabel}<BsArrowRight style={{marginBottom: -10, marginLeft: 15}}/>
                                    </LinkArrowButton>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>

                        <InfoColumn>
                        <IconContext.Provider value={{ color: '#fff', size: 20 }}>
                            <FeaturedCard to={featuredLink} start={start} promoted={promoted}>
                                <FeaturedVisual>
                                    <Visual promoted={promoted} src={featuredImg} alt={featuredTitle} />
                                </FeaturedVisual>
                                <FeaturedCardInfo>
                                    <PromotedIcon promoted={promoted}>
                                        <TiStar />
                                    </PromotedIcon>
                                    <FeaturedTitle>{featuredTitle}</FeaturedTitle>
                                    <FeaturedDescription>{featuredDescription}</FeaturedDescription>
                                </FeaturedCardInfo>
                            </FeaturedCard>
                        </IconContext.Provider>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </IconContext.Provider>
        </>
    );
};

export default InfoSection;
