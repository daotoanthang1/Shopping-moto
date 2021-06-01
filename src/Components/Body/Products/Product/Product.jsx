import { Pagination } from 'antd';
import axios from "axios";
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, dataProductById } from '../../../Action';
import "./Product.scss";
const Product = () => {
    const [slideProducts, setSlideProducts] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const dispatch = useDispatch();
    useEffect(async () => {
        const result = await axios("https://5fc0723cfd14be0016749ca0.mockapi.io/Products");
        setSlideProducts(result.data[0].slideProducts);
    }, []);
    const changeHeart = (e) => {
        const changeHeartToggle = e.target;
        changeHeartToggle.classList.toggle("activeHeart");
    };
    const addToCarts = (product) => {
        setQuantity([...quantity, product]);
        const action = addToCart(quantity.length + 1)
        dispatch(action);
        const actionDispatch = dataProductById(product.target.id);
        dispatch(actionDispatch);
    };
    function showRating(ratingCheck) {
        var result = [];
        for (let i = 1; i <= ratingCheck; i++) {
            result.push(<i className="fa fa-star" aria-hidden="true"></i>)
        }
        for (let i = 1; i <= (5 - ratingCheck); i++) {
            result.push(<i className="fa fa-star-o" aria-hidden="true"></i>)
        }
        return result;

    };
    const backToTop = (e) => {
        window.scroll({
            top: 100,
            left: 0,
            behavior: 'smooth'
        })
        const action = dataProductById(e.target.id);
        dispatch(action);
    };
    const pageChange = ()=>{
        
    }
    return (
        <Fragment>
            {slideProducts.map((slideProduct,key) => (
                <div className="product" key={key}> 
                    <div className="icon-heart" onClick={changeHeart}>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </div>
                    <Link to="/detail-product">
                        <div className="img-and-icon" onClick={backToTop} id={key}>
                            <img src={slideProduct.img} alt="" />
                        </div>
                    </Link>
                    <div className="info-buy" key={key}>
                        <h3 name="title">{slideProduct.title}</h3>
                        <ul className="rating">
                            <li>Đánh Giá: {showRating(slideProduct.rating)} </li>
                        </ul>
                        <h4>Giá :<br />{slideProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
                        <div className="buy-now" onClick={addToCarts} id={key}>
                            <p className="buy-title" id={key}>BUY</p>
                            <i className="fa fa-shopping-cart" id={key} aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            ))}
            <Pagination defaultCurrent={1} total={slideProducts.length} current={3} pageSize={10} defaultPageSize={10} onChange={pageChange}/>
        </Fragment>

    );

};


Product.propTypes = {

};


export default Product;
