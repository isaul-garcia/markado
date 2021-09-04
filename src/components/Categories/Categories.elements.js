import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoriesSection = styled.div`
  padding: 80px 0px 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({accentColor}) => (accentColor)};  
  padding-top: 160px;
  margin-top:-80px;
  margin-bottom: -250px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1500px) {
    margin-bottom: -230px;    
    margin-top: -110px;
  }

  @media screen and (max-width: 991px) {
    margin-bottom: -110px;    
    margin-top: -155px;
  }
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CategoriesHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 18px;
  text-align: center;

  @media screen and (max-width: 991px) {
    font-size: 32px;
  }
`;

export const CategoriesSubHeading = styled.h1`
  max-width: 600px;
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 40px;
  text-align: center;

  @media screen and (max-width: 991px) {
    font-size: 20px;
  }
`;



export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 991px) {
    width: 90%;  
    flex-wrap: wrap;
  }
`;

export const CategoriesCard = styled(Link)`
  background: #fff;
  box-shadow: 0 0px 0px rgba(30,158,97, 0);
  width: 280px;
  height: 318px;
  text-decoration: none;
  border-radius: 18px;
  transition: all 0.2s ease-in-out;

  &:not(:first-child) {
    margin-left: 24px;
  }
  &:hover {
    transform: scale(1.06);
    box-shadow: 0 6px 20px ${({accentColor}) => (accentColor)}6c;
  }

  @media screen and (max-width: 991px) {
    width: 50%;
    flex: 50%;
    border: 3px solid #25d789;
    border-radius: 21px;
    height: 200px;
    
    &:not(:first-child) {
    margin-left: 0px;
    margin-top: 0px;

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
  color: #444;
`;

export const CategoriesCardArrow = styled.div`
  margin: auto 14px auto auto;
  
  @media screen and (max-width: 991px) {
    display: none;
  }  
`;

export const CategoriesCardCategory = styled.h3`
  margin: 5px 14px 0px 14px;
  font-size: 22px;

  @media screen and (max-width: 991px) {
    margin: 5px 14px 0px 9px;
  font-size: 20px;
  }
`;

export const CategoriesCardDescription = styled.p`
  font-size: 18px;
  margin: 5px 14px 0px 14px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const CategoryVisual = styled.div`
width: 272px;
display: flex;

@media screen and (max-width: 991px) {
  width: 96%;
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

export const SearchBar = styled.form`
margin:auto;
max-width:590px;

@media screen and (max-width: 1500px){
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
border-radius: 18px 0px 0px 18px;

@media screen and (max-width: 1500px) { 
  height: 43px;
}

@media screen and (max-width: 991px) {
    width:45px;    
    display: none;
    padding: 9px 0px 6px 14px;
}
`;

export const SearchInput = styled.input`
padding: 11px 0px 11px 10px;
font-size: 17px;
outline: none;
border: none;
border-radius: 0px 18px 18px 0px;
width:450px;
float: left;
background: #f0f0f0;
margin-bottom: 45px;
z-index: 9;


&::-webkit-search-cancel-button,
&::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

&::placeholder {
    color: #75827f;
}

@media screen and (max-width: 991px) {
    width:350px;
    border-radius: 18px;
    padding: 11px 0px 11px 15px;
}
`;