import { Link } from 'react-router-dom';
import styled from 'styled-components';

//Filter Card
//Filter Card
//Filter Card

export const FiltersCard = styled(Link)`
  background: #fff;
  width: 280px;
  height: 100%;
  text-decoration: none;
  border-radius: 18px;
  transition: all 0.2s ease-in-out;
  cursor: default;
  margin-right: 24px;
  top:110px;
  position: sticky;
  padding: 8px;
  z-index: 10;

  @media screen and (max-width: 991px) {
      display: none;
  }
`;

export const FilterSection = styled.div`
  width: 100%;
`;

//mobile
//mobile
//mobile

export const FiltersCardMobile = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    width: 114%;
    display: inline;
    height: 58px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: default;
    position: sticky;
    margin-top: -100px;
    margin-left: -7.25%;
    padding: 8px;
    z-index: 10;
    top:80px;
  }
`;

export const FiltersWrapperMobile = styled.span`
    width: 100%;
    height: 100%;
    text-decoration: none;
    border-radius: 18px;
    transition: all 0.2s ease-in-out;
    cursor: default;
    margin-right: 24px;
    top:110px;
    position: sticky;
    z-index: 10;
    display: inline;
`;

export const FilterSectionMobile = styled.div`
  width: 100%;
`;

//continue desktop
//continue desktop
//continue desktop

export const FilterButton = styled.div`
border-radius: 12px;
color: #000;
border: 1px solid #cfcfcf;
background-color: white;
white-space: nowrap;
padding: 10px 20px;
font-size: 16px;
outline: none;
cursor: pointer;
z-index: 2;
margin-bottom: 8px;

&:hover {
    transition: all 0.3s ease-ease-in-out;
    background: #f5f5f5;
}

@media screen and (max-width: 960px) {
    width:100%;
}
`;

export const FilterLabel = styled.label`
color: #000;
position: relative;
cursor: pointer;
`;

export const IconStyle = styled.div`
right: 0;
float: right;
`;

export const ExpandableFilter = styled.div`
border-radius: 12px;
color: #000;
white-space: nowrap;
padding: 10px 20px 10px 20px;
font-size: 16px;
outline: none;
z-index:1;
background: #f5f5f5;
border-radius: 0px 0px 0px 0px;
display: ${({click}) => (click ? 'block' : 'none')};

&:nth-child(2) {
  border-radius: 12px 12px 0px 0px;
}

&:nth-last-child(1) {
  border-radius: 0px 0px 12px 12px;
  margin-bottom: 8px;
}

&:hover {
  transition: all 0.3s ease-ease-in-out;
  background: #f5f5f5;
}

@media screen and (max-width: 960px) {
  width:100%;
}
`;

export const FilterInputCheck = styled.input`
margin-right:10px;
`;

export const FilterSpanCheck = styled.span`

`;

export const FilterButtonSubmit = styled.div`
border-radius: 12px;
color: #000;
border: 1px solid ${({backColor}) => (backColor)}; ;
background-color: ${({backColor}) => (backColor)}; ;
white-space: nowrap;
padding: 10px 20px;
font-size: 16px;
outline: none;
cursor: pointer;
z-index: 2;
bottom: 0;
margin-top: 8px;

&:hover {
    transition: all 0.3s ease-ease-in-out;
    background: ${({hoverColor}) => (hoverColor)}; ;
}

@media screen and (max-width: 960px) {
    width:100%;
}
`;