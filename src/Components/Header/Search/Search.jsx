import React from 'react';
import PropTypes from 'prop-types';
import "./Search.scss"
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ShowProductPurchase from './ShowProductPurchase/ShowProductPurchase';
import { searchProductText, showProductAddedToCart } from '../../Action';
import searchProduct from "./../../Action/index";
const Search = () => {
    const [infoSearch, setInfoSearch] = useState([]);
    const [productTitleFind, setProductTitleFind] = useState()
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();
    const textSearch = useDispatch();
    useEffect(async () => {
        const dataToSearch = await axios("https://5fc0723cfd14be0016749ca0.mockapi.io/Products");
        dataToSearch.data[0].slideProducts.forEach(titles => {
            setInfoSearch(titles.title.toLowerCase())
        });
    }, []);
    // console.log(infoSearch);
    const searchProduct = (e) => {
        if (e.key === "Enter") {
            setProductTitleFind(e.target.value.toLowerCase());
        }
        const action = searchProductText(productTitleFind);
        textSearch(action);
    };
    
    const showProductFromCart = ()=>{
        const action = showProductAddedToCart();
        dispatch(action);
    }
    return (
        <div className="search-sign-in-register">
            <div className="search">
                <input type="text" placeholder="Search" onKeyUp={searchProduct} />
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
                <Link to="/purchase-product">
                <div className="cart-icon" onMouseOver={showProductFromCart}>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <p id="count-products">{product.quantity}</p>
                </div>
                </Link>
            <div id="show-product-prepare-to-buy">
                    <ul>
                       <ShowProductPurchase />
                    </ul>
            </div>        
            
        </div>
    );
};


Search.propTypes = {

};


export default Search;
