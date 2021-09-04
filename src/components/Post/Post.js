  
import React from 'react';
import { IconContext } from 'react-icons/lib';
import { BsArrowLeft } from 'react-icons/bs';
import Image1 from '../../assets/nintendo-switch.jpg';
import user1 from '../../assets/user1.jpg';
import Map1 from '../../assets/map-img.png';
import {
  CategoriesSection,
  CategoriesWrapper,
  ItemVisual,
  Visual,
  ItemCard,
  ThumbnailTextWrap,
  ThumbnailHeading,
  ThumbnailInfo,
  ThumbnailAuthor,
  TextArea,
  SomeText,
  Localizacion,
  PathText,
  PosterInfoContainer,
  PosterInfoWrapper,
  PosterAvi,
  PosterName,
  ContactButton,
  AviWrap,
  PosterRate,
  TextWithin,
  TheMapContainer,
  MoreImagesContainer,
  MoreImagesWrapper,
  MoreImages,
  MapImage,
  GoBack
} from './Post.elements';


function Categories(itemLink) {
  return (
    <IconContext.Provider value={{ color: '#75827f', size: 35 }}>
      <CategoriesSection>
        <CategoriesWrapper>
            <div>
            <PathText>Inicio /</PathText>              
            <PathText>Articulos /</PathText>              
            <PathText>Cayey</PathText>      
            </div>      

            <ItemCard>

            <PosterInfoContainer>
                <PosterInfoWrapper>
                    <GoBack to='Muebles'><BsArrowLeft /></GoBack>
                    <AviWrap><PosterAvi src={user1}/></AviWrap>
                    <PosterName>Hanna<TextWithin>43 Productos</TextWithin></PosterName>
                    <PosterRate>96.6%</PosterRate>
                    <ContactButton>Contact</ContactButton>
                </PosterInfoWrapper>
            </PosterInfoContainer>

            <ItemVisual>
            <Visual src={Image1} alt="Transportacion" />
            </ItemVisual>

            <ThumbnailTextWrap>
                    <Localizacion>Jul, 1 2021</Localizacion>
                <ThumbnailHeading>$230.00</ThumbnailHeading>
                <ThumbnailInfo>Nintendo Switch con solo dos meses de uso. Mandos en buenas condiciones, con la caja y todos sus cables incluidos.</ThumbnailInfo>
                <ThumbnailAuthor>
                    <TextArea>                                        
                        <SomeText>Como Nuevo</SomeText>
                        <SomeText>En su caja</SomeText>
                        <SomeText>Hago envíos</SomeText>
                    </TextArea>

                    <ThumbnailInfo>Ubicación</ThumbnailInfo>
                    <Localizacion>Cayey, Urb. Las Lomas</Localizacion>
                    
                    <TheMapContainer>
                    {/* <TheMap /> */}
                    <MapImage src={Map1}/>
                    </TheMapContainer>

                    <ThumbnailInfo>Mas Imagenes</ThumbnailInfo>
                    <MoreImagesContainer>
                        <MoreImagesWrapper>
                            <MoreImages src={Image1} />
                            <MoreImages src={Image1} />
                            <MoreImages src={Image1} />
                            <MoreImages src={Image1} />
                        </MoreImagesWrapper>
                    </MoreImagesContainer>

                </ThumbnailAuthor>
            </ThumbnailTextWrap>
            </ItemCard>

        </CategoriesWrapper>
      </CategoriesSection>
    </IconContext.Provider>
    
  );
}
export default Categories;