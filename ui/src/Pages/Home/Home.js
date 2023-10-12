import React from 'react';
import WelcomeBanner from './HomeContent/WelcomeBanner';
import SchoolMotto from './HomeContent/SchoolMotto';
import QuickLinks from './HomeContent/QuickLinks';

function Home() {
    return (
        <>
            <WelcomeBanner/>
            <SchoolMotto />
            <QuickLinks />
        </>
    );
}

export default Home;
