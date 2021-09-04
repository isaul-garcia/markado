  
import React, {useState} from 'react';
import { IconContext } from 'react-icons/lib';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  FiltersCardMobile,
  FilterSectionMobile,
  FilterButton,
  FilterLabel,
  IconStyle,
  FiltersWrapperMobile,
} from './Filters.elements';


function Filters() {
    const [click1, setClick1] = useState(false);
    const handleClick1 = () => setClick1(!click1);

  return (
    <IconContext.Provider value={{ color: '#75827f', size: 35 }}>
        <FiltersCardMobile>
            <FiltersWrapperMobile>
                <FilterSectionMobile>
                <FilterButton  onClick={handleClick1}>
                    <FilterLabel>Filtrar</FilterLabel>
                    <IconStyle>{click1 ? <IoIosArrowUp size='20' /> : <IoIosArrowDown size='20' />}</IconStyle>
                </FilterButton>
                </FilterSectionMobile>
            </FiltersWrapperMobile>
        </FiltersCardMobile>
    </IconContext.Provider>
    
  );
}
export default Filters;