  
import React from 'react';
import { IconContext } from 'react-icons/lib';
import Image1 from '../../assets/m001.png';
import Image2 from '../../assets/m002.png';
import Image3 from '../../assets/m003.png';
import Image4 from '../../assets/m004.png';
import {
  CategoriesSectionMuebles,
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
      <CategoriesSectionMuebles>
        <CategoriesWrapper>
          <CategoriesHeading>Muebles</CategoriesHeading>

           <CategoriesContainer>
             <Filters />
             <FiltersMobile />

            <CardsPage>

            <ItemCard to='/Post'>
              <ItemVisual>
                <Visual src={Image1} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Escritorio Antiguo</ThumbnailHeading>
                <ThumbnailInfo>$100.00</ThumbnailInfo>
                <Localizacion>Listo para remodelar. Esta en buenas condiciones, solo necesitaria una pintura.</Localizacion>
                <ThumbnailAuthor>
                  <TextArea>      
                    <SomeText>Oficina</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={Image2} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Silla Rattan Pequeña</ThumbnailHeading>
                <ThumbnailInfo>$50.00</ThumbnailInfo>
                <Localizacion>Para decorar o quizas para niños. Esta en excelentes condiciones.</Localizacion>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>Sillas</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={Image3} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Juego de comedor</ThumbnailHeading>
                <ThumbnailInfo>$79.99</ThumbnailInfo>
                <Localizacion>Tipo "diner-style" necesita un poco de reparación</Localizacion>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>Comedor</SomeText>
                    <SomeText>Restaurante</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={Image4} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Planta Zamioculca</ThumbnailHeading>
                <ThumbnailInfo>$90.00</ThumbnailInfo>
                <Localizacion>Buena para interiores, mide mas o menos 3 pies.</Localizacion>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>Plantas</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard to='/Post'>
              <ItemVisual>
                <Visual src={Image1} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Escritorio Antiguo</ThumbnailHeading>
                <ThumbnailInfo>$100.00</ThumbnailInfo>
                <Localizacion>Listo para remodelar. Esta en buenas condiciones, solo necesitaria una pintura.</Localizacion>
                <ThumbnailAuthor>
                  <TextArea>      
                    <SomeText>Oficina</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={Image2} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Silla Rattan Pequeña</ThumbnailHeading>
                <ThumbnailInfo>$50.00</ThumbnailInfo>
                <Localizacion>Para decorar o quizas para niños. Esta en excelentes condiciones.</Localizacion>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>Sillas</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={Image3} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Juego de comedor</ThumbnailHeading>
                <ThumbnailInfo>$79.99</ThumbnailInfo>
                <Localizacion>Tipo "diner-style" necesita un poco de reparación</Localizacion>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>Comedor</SomeText>
                    <SomeText>Restaurante</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={Image4} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Planta Zamioculca</ThumbnailHeading>
                <ThumbnailInfo>$90.00</ThumbnailInfo>
                <Localizacion>Buena para interiores, mide mas o menos 3 pies.</Localizacion>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>Plantas</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard to='/Post'>
              <ItemVisual>
                <Visual src={Image1} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Escritorio Antiguo</ThumbnailHeading>
                <ThumbnailInfo>$100.00</ThumbnailInfo>
                <Localizacion>Listo para remodelar. Esta en buenas condiciones, solo necesitaria una pintura.</Localizacion>
                <ThumbnailAuthor>
                  <TextArea>      
                    <SomeText>Oficina</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={Image2} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Silla Rattan Pequeña</ThumbnailHeading>
                <ThumbnailInfo>$50.00</ThumbnailInfo>
                <Localizacion>Para decorar o quizas para niños. Esta en excelentes condiciones.</Localizacion>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>Sillas</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={Image3} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Juego de comedor</ThumbnailHeading>
                <ThumbnailInfo>$79.99</ThumbnailInfo>
                <Localizacion>Tipo "diner-style" necesita un poco de reparación</Localizacion>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>Comedor</SomeText>
                    <SomeText>Restaurante</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={Image4} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Planta Zamioculca</ThumbnailHeading>
                <ThumbnailInfo>$90.00</ThumbnailInfo>
                <Localizacion>Buena para interiores, mide mas o menos 3 pies.</Localizacion>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>Plantas</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard to='/Post'>
              <ItemVisual>
                <Visual src={Image1} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Escritorio Antiguo</ThumbnailHeading>
                <ThumbnailInfo>$100.00</ThumbnailInfo>
                <Localizacion>Listo para remodelar. Esta en buenas condiciones, solo necesitaria una pintura.</Localizacion>
                <ThumbnailAuthor>
                  <TextArea>      
                    <SomeText>Oficina</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={Image2} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Silla Rattan Pequeña</ThumbnailHeading>
                <ThumbnailInfo>$50.00</ThumbnailInfo>
                <Localizacion>Para decorar o quizas para niños. Esta en excelentes condiciones.</Localizacion>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>Sillas</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={Image3} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Juego de comedor</ThumbnailHeading>
                <ThumbnailInfo>$79.99</ThumbnailInfo>
                <Localizacion>Tipo "diner-style" necesita un poco de reparación</Localizacion>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>Comedor</SomeText>
                    <SomeText>Restaurante</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            <ItemCard  to='/Post'>
              <ItemVisual>
                <Visual src={Image4} alt="Transportacion" />
              </ItemVisual>
              <ThumbnailTextWrap>
                <ThumbnailHeading>Planta Zamioculca</ThumbnailHeading>
                <ThumbnailInfo>$90.00</ThumbnailInfo>
                <Localizacion>Buena para interiores, mide mas o menos 3 pies.</Localizacion>
                <ThumbnailAuthor>
                    <TextArea>                                        
                    <SomeText>Plantas</SomeText>
                  </TextArea>
                </ThumbnailAuthor>
              </ThumbnailTextWrap>
            </ItemCard>

            </CardsPage>
          </CategoriesContainer>                    
        </CategoriesWrapper>
      </CategoriesSectionMuebles>
      <SpacingCorrection />
    </IconContext.Provider>
    
  );
}
export default Categories;