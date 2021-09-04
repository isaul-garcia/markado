  
import React, {useState} from 'react';
import { IconContext } from 'react-icons/lib';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  FiltersCard,
  ExpandableFilter,
  FilterButton,
  FilterInputCheck,
  FilterSpanCheck,
  FilterLabel,
  IconStyle,
  FilterButtonSubmit,
  FilterSection,
} from './Filters.elements';


function Filters() {
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const [click4, setClick4] = useState(false);
    const [click5, setClick5] = useState(false);
    const handleClick1 = () => setClick1(!click1);
    const handleClick2 = () => setClick2(!click2);
    const handleClick3 = () => setClick3(!click3);
    const handleClick4 = () => setClick4(!click4);
    const handleClick5 = () => setClick5(!click5);

  return (
    <IconContext.Provider value={{ color: '#75827f', size: 35 }}>
        <FiltersCard>
            <FilterSection>
            <FilterButton  onClick={handleClick1}>
                <FilterLabel>Tipo de Mueble</FilterLabel>
                <IconStyle>{click1 ? <IoIosArrowUp size='20' /> : <IoIosArrowDown size='20' />}</IconStyle>
            </FilterButton>
            <ExpandableFilter click={click1}>
                <FilterInputCheck type="checkbox"></FilterInputCheck>
                <FilterSpanCheck></FilterSpanCheck>
                Escritorio
            </ExpandableFilter>
            <ExpandableFilter click={click1}>
                <FilterInputCheck type="checkbox"></FilterInputCheck>
                <FilterSpanCheck></FilterSpanCheck>
                Juego de Mesa
            </ExpandableFilter>
            </FilterSection>

            <FilterSection>
            <FilterButton  onClick={handleClick2}>
                <FilterLabel>Estado</FilterLabel>
                <IconStyle>{click2 ? <IoIosArrowUp size='20' /> : <IoIosArrowDown size='20' />}</IconStyle>
            </FilterButton>
            <ExpandableFilter click={click2}>
                <FilterInputCheck type="checkbox"></FilterInputCheck>
                <FilterSpanCheck></FilterSpanCheck>
                Escritorio
            </ExpandableFilter>
            <ExpandableFilter click={click2}>
                <FilterInputCheck type="checkbox"></FilterInputCheck>
                <FilterSpanCheck></FilterSpanCheck>
                Juego de Mesa
            </ExpandableFilter>
            </FilterSection>

            <FilterSection>
            <FilterButton  onClick={handleClick3}>
                <FilterLabel>Precio</FilterLabel>
                <IconStyle>{click3 ? <IoIosArrowUp size='20' /> : <IoIosArrowDown size='20' />}</IconStyle>
            </FilterButton>
            <ExpandableFilter click={click3}>
                <FilterInputCheck type="checkbox"></FilterInputCheck>
                <FilterSpanCheck></FilterSpanCheck>
                Escritorio
            </ExpandableFilter>
            <ExpandableFilter click={click3}>
                <FilterInputCheck type="checkbox"></FilterInputCheck>
                <FilterSpanCheck></FilterSpanCheck>
                Juego de Mesa
            </ExpandableFilter>
            </FilterSection>

            <FilterSection>
            <FilterButton  onClick={handleClick4}>
                <FilterLabel>Material</FilterLabel>
                <IconStyle>{click4 ? <IoIosArrowUp size='20' /> : <IoIosArrowDown size='20' />}</IconStyle>
            </FilterButton>
            <ExpandableFilter click={click4}>
                <FilterInputCheck type="checkbox"></FilterInputCheck>
                <FilterSpanCheck></FilterSpanCheck>
                Escritorio
            </ExpandableFilter>
            <ExpandableFilter click={click4}>
                <FilterInputCheck type="checkbox"></FilterInputCheck>
                <FilterSpanCheck></FilterSpanCheck>
                Juego de Mesa
            </ExpandableFilter>
            </FilterSection>

            <FilterSection>
            <FilterButton  onClick={handleClick5}>
                <FilterLabel>Color</FilterLabel>
                <IconStyle>{click5 ? <IoIosArrowUp size='20' /> : <IoIosArrowDown size='20' />}</IconStyle>
            </FilterButton>
            <ExpandableFilter click={click5}>
                <FilterInputCheck type="checkbox"></FilterInputCheck>
                <FilterSpanCheck></FilterSpanCheck>
                Escritorio
            </ExpandableFilter>
            <ExpandableFilter click={click5}>
                <FilterInputCheck type="checkbox"></FilterInputCheck>
                <FilterSpanCheck></FilterSpanCheck>
                Juego de Mesa
            </ExpandableFilter>
            </FilterSection>

            <FilterButtonSubmit backColor={'#d5d736'} hoverColor={'#dddf44'}>
            <FilterLabel>Filtrar</FilterLabel>
            </FilterButtonSubmit>
        </FiltersCard>
    </IconContext.Provider>
    
  );
}
export default Filters;