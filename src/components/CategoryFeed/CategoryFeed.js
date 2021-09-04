  
import React from 'react';
import { IconContext } from 'react-icons/lib';
import VizTransportacion from '../../assets/categ-carro.png';
import {
  CategoriesSection,
  CategoriesWrapper,
  CategoriesHeading,
  CategoriesContainer,
  CardsPage,
  ItemVisual,
  Visual,
  SpacingCorrection,
  ItemCard,
  ThumbnailTextWrap,
  ThumbnailHeading,
  ThumbnailInfo,
  ThumbnailAuthor,
  TextArea,
  SomeText,
  Localizacion
} from './CategoryFeed.elements';
import Filters from '../../components/Filters/Filters'
import FiltersMobile from '../../components/Filters/FiltersMobile'


function Categories(itemLink) {
  return (
    <IconContext.Provider value={{ color: '#75827f', size: 35 }}>
      <CategoriesSection backColor={'#a8a1ff'}>
        <CategoriesWrapper>
          <CategoriesHeading>Inmobiliaria</CategoriesHeading>

           <CategoriesContainer>
             <Filters />
             <FiltersMobile />

            <CardsPage>

            <ItemCard to='/Post'>
              <ItemVisual>
                <Visual src={VizTransportacion} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <Localizacion>Cayey, Urb. Las Lomas</Localizacion>
                <ThumbnailHeading>$230,000</ThumbnailHeading>
                <ThumbnailInfo>Presented in green and gray, the new buds are tinier that the previous models.</ThumbnailInfo>
                <ThumbnailAuthor>
                  <TextArea>                                        
                    <SomeText>3 habitaciones</SomeText>
                    <SomeText>2 baños</SomeText>
                    <SomeText>90 m2</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard to='/Post'>
              <ItemVisual>
                <Visual src={VizTransportacion} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <Localizacion>Cayey, Urb. Las Lomas</Localizacion>
                <ThumbnailHeading>$230,000</ThumbnailHeading>
                <ThumbnailInfo>Presented in green and gray, the new buds are tinier that the previous models.</ThumbnailInfo>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>3 habitaciones</SomeText>
                    <SomeText>2 baños</SomeText>
                    <SomeText>90 m2</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={VizTransportacion} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <Localizacion>Cayey, Urb. Las Lomas</Localizacion>
                <ThumbnailHeading>$230,000</ThumbnailHeading>
                <ThumbnailInfo>Presented in green and gray, the new buds are tinier that the previous models.</ThumbnailInfo>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>3 habitaciones</SomeText>
                    <SomeText>2 baños</SomeText>
                    <SomeText>90 m2</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={VizTransportacion} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <Localizacion>Cayey, Urb. Las Lomas</Localizacion>
                <ThumbnailHeading>$230,000</ThumbnailHeading>
                <ThumbnailInfo>Presented in green and gray, the new buds are tinier that the previous models.</ThumbnailInfo>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>3 habitaciones</SomeText>
                    <SomeText>2 baños</SomeText>
                    <SomeText>90 m2</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={VizTransportacion} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <Localizacion>Cayey, Urb. Las Lomas</Localizacion>
                <ThumbnailHeading>$230,000</ThumbnailHeading>
                <ThumbnailInfo>Presented in green and gray, the new buds are tinier that the previous models.</ThumbnailInfo>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>3 habitaciones</SomeText>
                    <SomeText>2 baños</SomeText>
                    <SomeText>90 m2</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={VizTransportacion} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <Localizacion>Cayey, Urb. Las Lomas</Localizacion>
                <ThumbnailHeading>$230,000</ThumbnailHeading>
                <ThumbnailInfo>Presented in green and gray, the new buds are tinier that the previous models.</ThumbnailInfo>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>3 habitaciones</SomeText>
                    <SomeText>2 baños</SomeText>
                    <SomeText>90 m2</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={VizTransportacion} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <Localizacion>Cayey, Urb. Las Lomas</Localizacion>
                <ThumbnailHeading>$230,000</ThumbnailHeading>
                <ThumbnailInfo>Presented in green and gray, the new buds are tinier that the previous models.</ThumbnailInfo>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>3 habitaciones</SomeText>
                    <SomeText>2 baños</SomeText>
                    <SomeText>90 m2</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            </CardsPage>
          </CategoriesContainer>                    
        </CategoriesWrapper>
      </CategoriesSection>
      <SpacingCorrection />
    </IconContext.Provider>
    
  );
}
export default Categories;