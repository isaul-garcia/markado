import { Link } from 'react-router-dom';
import styled from 'styled-components';


//Info Column

export const InfoSec = styled.div`
color: #fff;
padding: 160px 0;
background: ${({lightBg}) => (lightBg ? '#f0f0f0' : '#859490')};

@media screen and (max-width: 991px) {
    padding: 80px 0px;
  }
`;

export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;


export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width:50%;
flex-basis:50%;

@media screen and (max-width: 991px) {
    max-width:100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 0px;

@media screen and (max-width: 991px) {
    padding-bottom: 0px;
}
`;

export const TopLine = styled.div`
color: ${({lightTopLine}) => (lightTopLine ? '#25d789' : '#cccf14')};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;

@media screen and (max-width: 991px) {
    font-size: 16px;
}
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: ${({lightText}) => (lightText ? '#f0f0f0' : '#444444')};

@media screen and (max-width: 991px) {
    font-size: 32px;
}
`;

export const Subtitle = styled.p`
max-width: 450px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({lightTextDesc}) => (lightTextDesc ? '#f0f0f0' : '#444444')};

@media screen and (max-width: 991px) {
    font-size: 16px;
    line-height: 20px;
}
`;

//Featured Image Column

export const FeaturedCard = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({promoted}) => (promoted ? '#fff' : 'rgba(255,255,255,0)')};
  box-shadow: 0 0px 0px rgba(30,158,97, 0);
  width: 100%;
  height: 318px;
  text-decoration: none;
  border-radius: 18px;
  border: ${({promoted}) => (promoted ? '1px solid #fff' : 'rgba(255,255,255,0)')};
  position: relative;
  cursor: ${({promoted}) => (promoted ? 'pointer' : 'default')};
  
  &:hover {
      border: ${({promoted}) => (promoted ? '1px solid #cfcfcf' : 'rgba(255,255,255,0)')};
  }
`;

export const FeaturedCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  padding: 18px;
  z-index: 2;
`;

export const PromotedIcon = styled.div`
  margin: 0px 0px auto auto;
  background-color: #da8c5f;
  border: 4px solid #fff;
  border-radius: 25px;
  padding: 3px 4px 0px 4px;
  z-index: 2;
  display: ${({promoted}) => (promoted ? 'inline' : 'none')};
`;

export const FeaturedTitle = styled.h3`
  font-size: 22px;
  z-index: 2;  
  max-width: 100%;
  text-shadow: 2px 2px 25px #000;
`;

export const FeaturedDescription = styled.p`
  font-size: 18px;
  z-index: 2;
  max-width: 100%;
  text-shadow: 2px 2px 25px #000;
`;

export const FeaturedVisual = styled.div`
width: 100%;
height: 316px;
object-fit: cover;
display: flex;
padding: 4px;
z-index: 1;

@media screen and (max-width: 991px) {
  height: 316px;
}
`;

export const Visual = styled.img`
padding-right: 0;
border: 0;
width: 100%;
height: 308px;
display: inline-block;
border-radius: 14px;
object-fit: ${({promoted}) => (promoted ? 'cover' : 'contain')};
`;

