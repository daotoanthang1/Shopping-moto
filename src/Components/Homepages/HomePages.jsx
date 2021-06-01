import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import SignIn from './SignIn/SignIn'
import "./HomePages.scss";
import SignUp from "./SignUp/SignUp"
import FilterProduct from '../Body/SearchedProduct/FilterProduct';
import DetailProduct from '../Body/DetailProduct/DetailProduct';
import ConfirmBuyProduct from '../Body/ConfirmBuyProduct/ConfirmBuyProduct';
const HomePages = () => {
    return (
        <div id="page-motor">
            <Body />
        </div>
    );
};

HomePages.propTypes = { 
    Nav:PropTypes.func,
};


export default HomePages;
