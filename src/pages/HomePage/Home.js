import React from 'react';
import { homeObjOne,homeObjTwo, homeObjThree } from  './Data';
import {InfoSection} from '../../components';
import Categories from '../../components/Categories/Categories';


const Home = () => {
    return (
        <>
            <Categories />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home
