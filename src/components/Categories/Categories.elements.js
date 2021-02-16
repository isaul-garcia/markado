import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoriesSection = styled.div`
  padding: 80px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #25d789;
  margin-bottom: -250px;

  @media screen and (max-width: 1280px) {
    margin-bottom: 0px;
  }
`;

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
  margin-bottom: 18px;
  text-align: center;
`;

export const CategoriesSubHeading = styled.h1`
  max-width: 600px;
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 40px;
  text-align: center;
`;


export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    width: 100%;
    
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
    box-shadow: 0 6px 20px rgba(30,158,97, 0.5);
  }

  @media screen and (max-width: 1280px) {
    width: 350px;
    
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
  color: #444;
`;

export const CategoriesCardArrow = styled.div`
  margin: auto 14px auto auto;
`;

export const CategoriesCardCategory = styled.h3`
  margin: 5px 14px 0px 14px;
  font-size: 22px;
`;

export const CategoriesCardDescription = styled.p`
  font-size: 18px;
  margin: 5px 14px 0px 14px;
`;

export const CategoryVisual = styled.div`
max-width: 272px;
display: flex;

@media screen and (max-width: 1280px) {
  max-width: 100%;
  max-height: 200px;
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