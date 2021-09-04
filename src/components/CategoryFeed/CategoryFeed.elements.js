import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoriesSection = styled.div`
  padding: 80px 0 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: -webkit-linear-gradient(0deg, #f0f0f0 70%, #a8a1ff 70%);
  background: -o-linear-gradient(0deg, #f0f0f0 70%, #a8a1ff 70%);
  background: -moz-linear-gradient(0deg, #f0f0f0 70%, #a8a1ff 70%);
  background: linear-gradient(0deg, #f0f0f0 91%, #a8a1ff 91%);
  padding-top: 240px;
  margin-top:-80px;
  margin-bottom: -50px;

  @media screen and (max-width: 1280px) {
    margin-bottom: 0px;
    padding-top: 85px;
  }
`;



export const CategoriesSectionMuebles = styled(CategoriesSection)`
  background: -webkit-linear-gradient(0deg, #f0f0f0 70%, #d5d736 70%);
  background: -o-linear-gradient(0deg, #f0f0f0 70%, #d5d736 70%);
  background: -moz-linear-gradient(0deg, #f0f0f0 70%, #d5d736 70%);
  background: linear-gradient(0deg, #f0f0f0 91%, #d5d736 91%);
`

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CategoriesHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-bottom: 50px;
`;


export const CategoriesContainer = styled.div`
  display: flex;
  
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    width: 100%;
    margin-top: 100px;
  }
`;


/* feed cards */
/* feed cards */
/* feed cards */

export const CardsPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  @media screen and (max-width: 991px) {
    margin-top: 22px;
  }
`;

export const ItemCard = styled(Link)`
  background: #fff;
  box-shadow: 0 0px 0px rgba(30,158,97, 0);
  width: 888px;
  height: 318px;
  text-decoration: none;
  border-radius: 18px;
  transition: all 0.2s ease-in-out;
  border: 1px solid #fff;

  &:not(:first-child) {
    margin-top: 24px;
  }
  &:hover {
    border: 1px solid #cfcfcf;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
    overflow: hidden;
    height: 420px;
    
    &:not(:first-child) {
    margin-left: 0px;
    margin-top: 14px;

  }
    &:hover {
      transform: none;
      box-shadow: 0 6px 20px rgba(30,158,97, 0);
    }
  }
`;

export const CategoriesCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 100%;
  color: #444;
`;

export const ItemInfo = styled.div`
width: 440px;
float: left;
position: relative;
color: #444;
`;

export const CategoriesCardArrow = styled.div`
  margin: auto 14px auto auto;
  float: right;
`;

export const SpecificFilter = styled.p`
  font-size: 18px;
  margin: 5px 14px 0px 14px;
`;

export const CategoriesCardCategory = styled.h3`
  margin: 5px 14px 0px 14px;
  font-size: 22px;
`;

export const CategoriesCardDescription = styled.p`
  font-size: 18px;
  margin: 5px 14px 0px 14px;
`;

export const ItemVisual = styled.div`
width: 440px;
height: 316px;
display: flex;
float:left;
position:relative;
left:0;

@media screen and (max-width: 1280px) {
  max-width: 100%;
  max-height: 230px;
}
`;

export const Visual = styled.img`
padding-right: 0;
border: 0;
width: 100%;
vertical-align: middle;
display: inline-block;
border-radius: 15px;
margin: 4px;
object-fit: cover;
`;

//search
//search
//search

export const SearchBar = styled.form`
margin:auto;
max-width:590px;
`;

export const SearchInput = styled.input`
padding: 11px 0px 11px 10px;
font-size: 17px;
outline: none;
border: none;
border-radius: 0 18px 18px 0;
width:450px;
float: left;
background: #f0f0f0;
margin-bottom: 45px;


&::-webkit-search-cancel-button,
&::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

&::placeholder {
    color: #75827f;
}

@media screen and (max-width: 1280px) {
    width:450px;
}
`;

export const SearchButton = styled.div`
float: left;
padding: 9px 0px 6px 14px;
background: #f1f1f1;
color: #444;
font-size: 1.2rem;
outline: none;
border: none;
border-radius: 18px 0 0 18px;
`;

export const SpacingCorrection = styled.div`
height:200px;
background-color: #f1f1f1;
`;






export const ThumbnailImage = styled.img`
    width: 50%;
    flex: 50%;
    object-fit: cover;
    
    @media screen and (max-width: 991px) {
        flex: 50%;
        width: 50%;
        height: 100%;
        border-radius: 8px 8px 0px 0px;
    }
`

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
    bottom: 10px;
`

export const TextArea = styled.div`
    display: inline-block;
    width: 85%;
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
    font-size: 0.85em;
    line-height: 1em;
    color: #111113;
    padding-right: 10px;

    @media screen and (max-width: 1500px) {
        font-size: 0.75em;
    }
`

export const Localizacion = styled(Name)`
    color: #a3a3a3;
    margin-top: 0em;
    font-size: 1em;
    margin-bottom: 0.75em;
    
    @media screen and (max-width: 1500px) {
        font-size: 0.75em;
    }
`