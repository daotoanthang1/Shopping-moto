import React, { Fragment } from 'react';
import IntroduceItem from './IntroduceItem/IntroduceItem';
import MotoPlaceFavorite from './MotoPlaceFavorite/MotoPlaceFavorite';
import MotoShare from "./MotoShare/MotoShare";
import Products from './Products/Products';
import SlideProduct from './SlideProduct/SlideProduct';
// import VideoIntro from './VideoIntro/VideoIntro';

const Body = () => {
    return (
        <Fragment>
            {/* <VideoIntro /> */}
            <div className="container body">
                <IntroduceItem />
                <SlideProduct />
                <Products />
                <MotoPlaceFavorite />
                <MotoShare />
            </div>
            
        </Fragment>
    );
};


Body.propTypes = {

};


export default Body;
