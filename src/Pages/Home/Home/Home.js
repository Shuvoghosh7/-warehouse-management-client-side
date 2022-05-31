import React from 'react';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import MostOrderCountries from './MostOrderCountries';

import Reviews from './Reviews';
import Tools from './Tools';
import UpcomingProducts from './UpcomingProducts/UpcomingProducts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Tools/>
            <BusinessSummary/>
            <MostOrderCountries/>
            
            <Reviews/>
            
        </div>
    );
};

export default Home;