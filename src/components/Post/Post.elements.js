import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoriesSection = styled.div`
  padding: 80px 10px;
  display: flex;
  justify-content: center;
  background: -webkit-linear-gradient(0deg, #f0f0f0 70%, #fa8c4c 70%);
  background: -o-linear-gradient(0deg, #f0f0f0 70%, #fa8c4c 70%);
  background: -moz-linear-gradient(0deg, #f0f0f0 70%, #fa8c4c 70%);
  background: linear-gradient(0deg, #f0f0f0 79%, #fa8c4c 79%);
  padding-top: 180px;
  margin-top: -90px;
  margin-bottom: 220px;

  @media screen and (max-width: 1280px) {
    margin-bottom: 0px;
    padding-top: 125px;
  }
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 62.5%;

  @media screen and (max-width: 1280px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

//top info poster
//top info poster
//top info poster
//top info poster

export const PosterInfoContainer = styled.div`
  height: 80px;
  width: 100%;
`;

export const PosterInfoWrapper = styled.div`
`;

export const AviWrap = styled.div`
    width: 62px;
    height: 100%;
    padding: 5px;
    vertical-align: top;
    display: inline-block;
`;

export const GoBack = styled(Link)`
    width: 84px;
    display: inline-block;
    text-decoration: none;
    color: #515151;
    background-color: #e9e9e9;
    border: 2px solid #dfdfdf;
    padding: 6px 22px 2px 22px;   
    margin: 5px;
    border-radius: 12px;
    transform-origin: top;
    vertical-align: top;
    margin-right: 20px;

    &:hover{
        
    background-color: #dfdfdf;
    }
`;

export const PosterAvi = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    object-fit: cover;
    display: inline-block;
    cursor: pointer;
`;

export const PosterName = styled.p`
    display: inline-block;
    text-decoration: none;
    color: #333333;
    padding: 12px 8px;   
    transform-origin: top;
    font-weight: 700;
`;

export const TextWithin = styled.p`
    text-decoration: none;
    color: #8c8c8c;
    font-weight: 400;
`

export const PosterRate = styled(PosterName)`
    color: #aadf3c;
    font-weight: 400;
`;

export const ContactButton = styled(Link)`
     display: block;
    text-decoration: none;
    color: #fff;
    background-color: #fa8c4c;
    border: 2px solid #f97526;
    padding: 13px 22px;   
    margin: 5px;
    border-radius: 12px;
    transform-origin: top;
    float: right;

    &:hover{
        
    background-color: #f97526;
    }
`;

/* feed cards */
/* feed cards */
/* feed cards */

export const ItemCard = styled.span`
  background: #fff;
  box-shadow: 0 0px 0px rgba(30,158,97, 0);
  width: 900px;
  height: 1805px;
  text-decoration: none;
  border-radius: 18px;
  transition: all 0.2s ease-in-out;
  border: 1px solid #fff;
  display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

  @media screen and (max-width: 991px) {
    width: 150%;
    overflow: hidden;
    height: 1525px;
  }
`;

export const ItemVisual = styled.div`
width: 99%;
max-height: 500px;
float:left;
position:relative;
left:0;
overflow: hidden;
border-radius: 12px;
margin: 5px;

@media screen and (max-width: 1280px) {
  max-width: 100%;
  max-height: 230px;
}
`;

export const Visual = styled.img`
padding-right: 0;
border: 0;
width: 100%;
display: block;
border-radius: 13px;
object-fit: fill;
cursor: pointer;
`;

//thumnail
//thumnail
//thumnail

export const ThumbnailTextWrap = styled.div`
    flex: 50%;
    width: 50%;
    height: 100%;
    position: relative;
    float: right;
    padding: 12px;
    
    @media screen and (max-width: 991px) {
        flex: 100%;
        width: 100%;
    }
`

export const ThumbnailHeading = styled.h3`
    font-size: 28px;
    line-height: 1em;
    font-weight: 800;
    text-decoration: none;
    color: #444;

    @media screen and (max-width: 1500px) {
    }

    @media screen and (max-width: 991px) {
        font-size: 2.25em;
    }
`

export const ThumbnailInfo = styled.p`
    font-size: 1.2em;
    line-height: 1.2em;
    font-weight: 500;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-right: 0.5em;
    color: #838383;

    @media screen and (max-width: 1500px) {
    }

    @media screen and (max-width: 991px) {
    }
`

export const ThumbnailAuthor = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    padding: 0.25em 0em;
`



export const TextArea = styled.div`
    display: inline-block;
    width: 85%;
    margin-bottom: 18px;
`

export const Name = styled.a`
    font-size: 1em;
    line-height: 1em;
    margin-bottom: 0.2em;
    color: #111113;
    display: block;

    @media screen and (max-width: 1500px) {
        font-size: 0.75em;
    }
`

export const SomeText = styled.a`
    font-size: 1.6em;
    line-height: 2em;
    color: #2d2d31;
    padding-right: 40px;

    @media screen and (max-width: 1500px) {
        font-size: 1.4em;
    }
`

export const Localizacion = styled(Name)`
    color: #a3a3a3;
    margin-top: 0em;
    font-size: 1em;
    margin-bottom: 0.75em;
    
    @media screen and (max-width: 1500px) {
        font-size: 0.9em;
    }
`

export const PathText = styled(SomeText)`
    color: #fff;
    font-size: 0.9em;
    line-height: 1em;
    align-items: left;
    text-align: left;
    cursor: pointer;
    display: inline;
    padding-right: 4px;

    &:hover {
        color: #fdbe99;
    }
`



export const TheMapContainer = styled.div`
    width: 97.5%;
    height: 300px;
    margin-bottom: 30px;
    overflow: hidden;

    @media screen and (max-width: 991px) {
        width: 93%;
    }
`

export const MapImage = styled.img`
    width: 100%;
    object-fit: cover;
`


export const MoreImagesContainer = styled.div`
    width: 98%;
    
    @media screen and (max-width: 991px) {
    width: 93%;
  }
`

export const MoreImagesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const MoreImages = styled.img`
    width: 50%;
    height: 280px;
    flex: 50%;
    object-fit: cover;
    padding: 5px;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }

    @media screen and (max-width: 991px) {
    height: 220px;
  }
`