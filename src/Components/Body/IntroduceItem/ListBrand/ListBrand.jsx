import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./ListBrand.scss"
import { useEffect } from "react";
import axios from "axios";
import "./../../SearchedProduct/FilterProduct";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { brandFromListBrand, dataProductFromList, dataProductFromListBrand } from '../../../Action';
const ListBrand = () => {
    const [slideProducts, setSlideProducts] = useState([]);
    const dataProductDispatch = useDispatch();
    const listBrand = ["HONDA","YAMAHA","KAWASAKI","DUCATI","BWM"];
    useEffect(async () => {
        const result = await axios("https://5fc0723cfd14be0016749ca0.mockapi.io/Products");
        setSlideProducts(result.data[0].slideProducts);
}, [])
    const backToTop = (e) => {
        const brand = e.target.textContent.toLowerCase();
        const actionBrandName = brandFromListBrand(brand);
        dataProductDispatch(actionBrandName);
        const dataToRedux = [];
        for(let i=0;i<slideProducts.length;i++){
            if(slideProducts[i].title.toLowerCase().includes(brand)){
                dataToRedux.push(slideProducts[i])
            }
        }
        const actionProduct = dataProductFromListBrand(dataToRedux);
        dataProductDispatch(actionProduct);
        
        window.scroll({
            top: 100,
            left: 0,
            behavior: 'smooth'
        });
    }
    if(slideProducts){
        return (
            <div className="list-items">
                <i className="fa fa-bars" aria-hidden="true" />
                <p>THƯƠNG HIỆU SẢN PHẨM</p>
                <ul>
                    {listBrand.map((brandSpe, key) => (
                        <Link to="filter-product" key={key}><li onClick={backToTop}>{brandSpe}</li></Link>
                    ))}
                </ul>
                <img src="https://img.websosanh.vn/v10/users/review/images/omddyokx9a24a/1562214370993_5568554.jpg?compress=85" alt="" />
            </div>
        );
    }
    else{
        return (
            <h1>Please wait!!!</h1>
        )
    }
};


ListBrand.propTypes = {

};


export default ListBrand;
