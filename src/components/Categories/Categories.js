  
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { HiSearch } from 'react-icons/hi';
import VizInmobiliaria from '../../assets/categ-home.png';
import VizTransportacion from '../../assets/categ-carro.png';
import VizArticulos from '../../assets/categ-comp.png';
import VizMuebles from '../../assets/categ-sofa.png';
import {
  CategoriesSection,
  CategoriesWrapper,
  CategoriesHeading,
  CategoriesSubHeading,
  CategoriesContainer,
  CategoriesCard,
  CategoriesCardInfo,
  CategoriesCardArrow,
  CategoriesCardCategory,
  CategoriesCardDescription,
  CategoryVisual,
  Visual,
  SearchBar,
  SearchButton,
  SearchInput,
} from './Categories.elements';

function Categories() {
  return (
    <IconContext.Provider value={{ color: '#75827f', size: 35 }}>
      <CategoriesSection>
        <CategoriesWrapper>
          <CategoriesHeading>Justo lo que buscabas.</CategoriesHeading>
          <CategoriesSubHeading>Anunciate hoy en la mejor plataforma compraventa de productos de segunda mano en Puerto Rico.</CategoriesSubHeading>

          <IconContext.Provider value={{ color: '#75827f', size: 22 }}>
          <SearchBar>
              <SearchButton><HiSearch /></SearchButton>
              <SearchInput name="search" type="Search" placeholder="Buscar en todas las categorias" />
          </SearchBar>
          </IconContext.Provider>

           <CategoriesContainer>
            <CategoriesCard to='/sign-up'>
            <CategoriesCardInfo>
                <CategoryVisual>
                  <Visual src={VizInmobiliaria} alt="Inmobiliaria" />
                </CategoryVisual>              
                <CategoriesCardCategory>Inmobiliaria</CategoriesCardCategory>
                <CategoriesCardDescription>Compras, alquileres, compartidos, y mas.</CategoriesCardDescription>
                <CategoriesCardArrow>
                  <BsArrowRight />
                </CategoriesCardArrow>
              </CategoriesCardInfo>
            </CategoriesCard>
            <CategoriesCard to='/sign-up'>
            <CategoriesCardInfo>
                <CategoryVisual>
                  <Visual src={VizTransportacion} alt="Transportacion" />
                </CategoryVisual>              
                <CategoriesCardCategory>Transportación</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra autos, motoras, botes y mas.</CategoriesCardDescription>
                <CategoriesCardArrow>
                  <BsArrowRight />
                </CategoriesCardArrow>
              </CategoriesCardInfo>
            </CategoriesCard>
            <CategoriesCard to='/sign-up'>
            <CategoriesCardInfo>
                <CategoryVisual>
                  <Visual src={VizArticulos} alt="Articulos" />
                </CategoryVisual>              
                <CategoriesCardCategory>Articulos</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra ventas de miscelaneos.</CategoriesCardDescription>
                <CategoriesCardArrow>
                  <BsArrowRight />
                </CategoriesCardArrow>
              </CategoriesCardInfo>
            </CategoriesCard>
            <CategoriesCard to='/sign-up'>
            <CategoriesCardInfo>
                <CategoryVisual>
                  <Visual src={VizMuebles} alt="Muebles" />
                </CategoryVisual>              
                <CategoriesCardCategory>Muebles</CategoriesCardCategory>
                <CategoriesCardDescription>Encuentra todo tipo de muebles.</CategoriesCardDescription>
                <CategoriesCardArrow>
                  <BsArrowRight />
                </CategoriesCardArrow>
              </CategoriesCardInfo>
            </CategoriesCard>
          </CategoriesContainer>
          
        </CategoriesWrapper>
      </CategoriesSection>
    </IconContext.Provider>
  );
}
export default Categories;