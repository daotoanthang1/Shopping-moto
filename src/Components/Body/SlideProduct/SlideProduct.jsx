import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Product from '../Products/Product/Product';
import "./SlideProducts.scss"
import axios from "axios";
import { addToCart, dataProductById } from '../../Action';
import { useDispatch } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const SlideProduct = () => {
    const [slideProducts, setSlideProducts] = useState([]);
    const [productIndex, setProductIndex] = useState(0);
    const firstFiveProducts = slideProducts.slice(productIndex, productIndex + 5);
    const [productSlide, setProductSlide] = useState();
    const [quantity, setQuantity] = useState([]);
    const dispatchActionQuantity = useDispatch();
    const dispatch = useDispatch()
    const addToCarts = (product) => {

        setQuantity([...quantity, product]);
        // console.log(quantity.length);
        const action = addToCart(quantity.length + 1)
        dispatchActionQuantity(action);
        const actionDispatch = dataProductById(product.target.id);
        dispatch(actionDispatch);

    }
    const products = (e) => {
        const target = e.target.name;
        setProductSlide(target);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await axios("https://5fc0723cfd14be0016749ca0.mockapi.io/Products");
            setSlideProducts(result.data[0].slideProducts);
        };
        fetchProducts()
    }, [])
    const changeHeart = (e) => {
        const changeHeartToggle = e.target;
        changeHeartToggle.classList.toggle("activeHeart");
    }
    function showRating(ratingCheck) {
        var result = [];
        for (let i = 1; i <= ratingCheck; i++) {
            result.push(<i className="fa fa-star" aria-hidden="true"></i>)
        }
        for (let i = 1; i <= (5 - ratingCheck); i++) {
            result.push(<i className="fa fa-star-o" aria-hidden="true"></i>)
        }
        return result;
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // fade: true,
        arrows: true
    };
    const backToTop = (e) => {
        window.scroll({
            top: 100,
            left: 0,
            behavior: 'smooth'
        });
        const action = dataProductById(e.target.id);
        dispatch(action);
    }
    return (
        <div className="slide-products">
            <h3 className="title-product">SẢN PHẨM NỔI BẬT</h3>
            <Fragment>
                <Slider {...settings}>
                    {slideProducts.map((slideProduct,key) => (
                            <div className="product">
                                <div className="icon-heart" onClick={changeHeart}>
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                </div>
                                <Link to="detail-product">
                                    <div className="img-and-icon" onClick={backToTop} id={key}>
                                        <img src={slideProduct.img} alt="" />
                                    </div>
                                </Link>

                                <div className="info-buy">
                                    <h3 onChange={products}>{slideProduct.title}</h3>
                                    <ul className="rating">
                                        <li>Đánh Giá: {showRating(slideProduct.rating)} </li>
                                    </ul>
                                    <h4>{slideProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
                                    <div className="buy-now" onClick={addToCarts} id={key}>
                                        <p className="buy-title" id={key}>BUY</p>
                                        <i className="fa fa-shopping-cart" aria-hidden="true" id={key}></i>
                                    </div>
                                </div>
                            </div>
                    ))}
                </Slider>
            </Fragment>
        </div>
    );
};


SlideProduct.propTypes = {
    slideProducts: PropTypes.func,
};


export default SlideProduct;
