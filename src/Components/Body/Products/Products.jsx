import React from 'react';
import PropTypes from 'prop-types';
import "./Products.scss"
import Product from './Product/Product';
import { Link } from 'react-router-dom';

const Products = () => {
    const backToTop = () => {
        window.scroll({
            top: 100,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (

            <div className="products">
                <h3 className="title-product">DANH SÁCH SẢN PHẨM</h3>
                <ul className="product-lists">
                    <a onClick={backToTop} href="filter-product"><h4 className="see-all">XEM TẤT CẢ</h4></a>
                    <li><Product /></li>
                    
                </ul>
                
                
            </div>
    );
};


Products.propTypes = {

};


export default Products;
