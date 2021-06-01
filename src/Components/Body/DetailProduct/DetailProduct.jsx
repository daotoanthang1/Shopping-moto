import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, infoProductByDetailProduct } from '../../Action';
import Product from "../Products/Product/Product";
import LoadingPage from '../SearchedProduct/LoadingPage/LoadingPage';
import "./DetailProduct.scss";
const DetailProduct = () => {
    const [products, setProducts] = useState([])
    const [smallImgs, setSmallImgs] = useState([]);
    const [deliveryFeeEachLocation, setDeliveryFeeEachLocation] = useState("5000");
    const [locationDelivery, setLocationDelivery] = useState();
    const [color,setColor] = useState();
    const dispatchProduct = useDispatch()
    var [countQuantity, setCountQuantity] = useState(1);
    const dataProductById = JSON.stringify(useSelector(state => state.product.infoProduct));
    const numberDataProductById = parseInt(JSON.parse(dataProductById));
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState([]);
    const dispatch = useDispatch();
    var [imgMainPicture,setImgMainPicture] = useState();
    const productIndex = products[numberDataProductById];
    useEffect(async () => {
        setLoading(true)
        const result = await axios("https://5fc0723cfd14be0016749ca0.mockapi.io/Products");
        setProducts(result.data[0].slideProducts)
        setSmallImgs(result.data[0].slideProducts[0].smallImg);
        setLoading(false)
    }, []);
    if (loading) {
        return (<LoadingPage />)
    }
    const switchImg = (e) => {
        var target = e.target.src;
        setImgMainPicture(target);
    }
    const deliveryFee = (e) => {
        if (e.target.value !== "") {
            setLocationDelivery("Hà Nội")
        }
        if (e.target.value === "1") {
            setDeliveryFeeEachLocation("5000");
            setLocationDelivery("Hà Nội")
        }
        else if (e.target.value === "2") {
            setDeliveryFeeEachLocation("10000")
            setLocationDelivery("Thanh Hóa")
        }
        else if (e.target.value === "3") {
            setDeliveryFeeEachLocation("15000")
            setLocationDelivery("Huế")
        }
        else if (e.target.value === "4") {
            setDeliveryFeeEachLocation("20000")
            setLocationDelivery("Bình Định")
        }
        else if (e.target.value === "5") {
            setDeliveryFeeEachLocation("25000")
            setLocationDelivery("Sài Gòn")
        }
        else {
            setDeliveryFeeEachLocation("30000")
            setLocationDelivery("Cà Mau")
        }
    }
    const decreaseQuantity = () => {
        const quantity = countQuantity === 1 ? 1 : countQuantity -= 1;
        return setCountQuantity(quantity);
    }
    const increaseQuantity = () => {
        countQuantity += 1;
        setCountQuantity(countQuantity)
    }
    const getInfoProduct = (product) => {
        const infoProduct = [];
        infoProduct.push(productIndex);
        infoProduct.push(countQuantity);
        infoProduct.push(deliveryFeeEachLocation);
        infoProduct.push(color);
        if (locationDelivery === undefined) {
            infoProduct.push("Hà Nội")
        }
        else {
            infoProduct.push(locationDelivery);
        }

        const action = infoProductByDetailProduct(infoProduct);
        dispatchProduct(action);

        setQuantity([...quantity, product]);
        const actionQuantity = addToCart(quantity.length + 1)
        dispatch(actionQuantity);
    }
    const getDataColor = (e) => {
        const target = e.target.value;
        setColor(target);
        console.log();
        if(target === undefined){
            setColor("Black")
        };
        var buttonChangeColor = document.querySelectorAll(".color-each-element label span");
        for(let i=0;i<buttonChangeColor.length;i++){
            buttonChangeColor[i].addEventListener("click",function(){
                for(let i=0;i<buttonChangeColor.length;i++){
                    buttonChangeColor[i].classList.remove("svgUnNone");
                };
                this.classList.add("svgUnNone")
            })
        }
    }
    const scrollToAnotherProduct = () => {
        window.scroll({
            top: 1100,
            left: 0,
            behavior: 'smooth'
        });
    }
    const backToTop = () => {
        window.scroll({
            top: 100,
            left: 0,
            behavior: 'smooth'
        });
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

    };
    
    console.log(productIndex);
    if (productIndex) {
        if(imgMainPicture === undefined){
            setImgMainPicture(productIndex["img"])
        }
        const props = {width: 500, height: 500, zoomWidth: 500 , left: 100 , img: `${imgMainPicture}`};
        return (
            <Fragment>
                <div id="wrapper-detail-product">
                    <h1>Moto {">"} {productIndex["brand"]} {">"} {productIndex["title"]}</h1>
                    <div className="container detail-item">
                        <div className="row product-elemental">
                            <div className="col-5 ">
                                <div className="main-picture">
                                    
                                        <ReactImageZoom {...props}/>
                                </div>
                                <div className="elemential-pictures">
                                    <div className="small-img">
                                        {smallImgs.map(smallImgs => (
                                            <img id="xzoom-gallary"
                                                src={smallImgs.img} onMouseOver={switchImg} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="inf-detail-product">
                                    <p className="text-detail-product">{productIndex.title}</p>
                                    <div id="from-rating-star">
                                        <div className="rating-detail-product">
                                            <p>{productIndex["rating"]}</p>
                                            <ul>
                                                {showRating(productIndex["rating"])}
                                            </ul>
                                        </div>
                                        <h2 className="price-detail-product" name="price">135.000.000</h2>
                                        <div className="delivery">
                                            <h5>Vận chuyển</h5>
                                            <i className="fa fa-truck" aria-hidden="true"></i>
                                            <form>
                                                <p>Vận chuyển tới</p>
                                                <select onClick={deliveryFee}>
                                                    <option value="1">Hà Nội</option>
                                                    <option value="2">Thanh Hóa</option>
                                                    <option value="3">Huế</option>
                                                    <option value="4">Bình Định</option>
                                                    <option value="5">Sài gòn</option>
                                                    <option value="6">Cà Mau</option>
                                                </select>
                                            </form>
                                            <div className="fee-delivery">
                                                <form>
                                                    <p>Phí vận chuyển</p>
                                                    <select disabled>
                                                        <option>{deliveryFeeEachLocation}</option>
                                                    </select>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="product_color">
                                            <span className="color_name">Màu sắc</span>
                                            <div className="color_choose" onClick={getDataColor}>
                                                <div className="color-each-element">
                                                    <input data-image="black" type="radio" id="black" name="color" value="Black" />
                                                    <label><span className="svgUnNone"><svg height="417pt" viewBox="0 -46 417.81333 417" width="417pt" xmlns="http://www.w3.org/2000/svg"><path d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0" /></svg></span></label>
                                                </div>
                                                <div className="color-each-element">
                                                    <input data-image="blue" type="radio" id="blue" name="color" value="Blue" />
                                                    <label><span><svg height="417pt" viewBox="0 -46 417.81333 417" width="417pt" xmlns="http://www.w3.org/2000/svg"><path d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0" /></svg></span></label>
                                                </div>
                                                <div className="color-each-element">
                                                    <input data-image="red" type="radio" id="red" name="color" value="Red" />
                                                    <label>
                                                        <span><svg height="417pt" viewBox="0 -46 417.81333 417" width="417pt" xmlns="http://www.w3.org/2000/svg"><path d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0" /></svg></span>
                                                    </label>
                                                </div>
                                                <div className="color-each-element">
                                                    <input data-image="yellow" type="radio" id="yellow" name="color" value="Yellow" />
                                                    <label><span><svg height="417pt" viewBox="0 -46 417.81333 417" width="417pt" xmlns="http://www.w3.org/2000/svg"><path d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0" /></svg></span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quantity-detail-product">
                                            <p>Số lượng:</p>
                                            <div className="manage-quantity">
                                                <div className="button-increase-decrease">
                                                    <i className="fa fa-minus increase-decrease" aria-hidden="true" onClick={decreaseQuantity}></i>
                                                    <i className="fa fa-plus increase-decrease" aria-hidden="true" onClick={increaseQuantity}></i>
                                                </div>
                                                <div className="input-quantity">
                                                    <input type="text" value={countQuantity} name="quantity" />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-danger others-product" onClick={scrollToAnotherProduct}>Sản phẩm khác</button>
                                        <Link to="purchase-product">
                                            <button className="btn btn-warning" onClick={getInfoProduct}>
                                            BUY NOW
                                        </button>
                                        </Link>
                                        <i id="happy-buying">Chúc bạn mua hàng vui vẻ ^_^</i>
                                    </div>   
                                </div>
                            </div>
                        </div>
                        <div className="more-inf-product">
                            <div className="row">
                                <h3>Chi tiết sản phẩm</h3>
                                <div className="col-4">
                                    <ul>
                                        <li>Danh mục</li>
                                        <li>Thương hiệu</li>
                                        <li>Kho hàng</li>
                                        <li>Xuất xứ</li>
                                        <li>Năm sản xuất</li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li>Moto {">"} {productIndex["brand"]} {">"} {productIndex["title"]}</li>
                                        <li>{productIndex["brand"].toUpperCase()}</li>
                                        <li>Còn Hàng</li>
                                        <li>America</li>
                                        <li>2020</li>
                                    </ul>
                                </div>
                                <div className="col-2">
                                    <p>CREDIBILITY</p>
                                    <img src="https://i.pinimg.com/736x/29/85/ae/2985ae8ef7683f84498143b7079ba85e.jpg"></img>
                                </div>
                            </div>
                        </div>
                        <div className="others-product">
                            <div className="products">
                                <h3 className="title-product">DANH SÁCH SẢN PHẨM</h3>
                                <ul className="product-lists">
                                    <a onClick={backToTop} href="filter-product"><h4 className="see-all">XEM TẤT CẢ</h4></a>
                                    <li><Product /></li>

                                </ul>


                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>

        );
    }
    else {
        return null;
    }
};


DetailProduct.propTypes = {

};


export default DetailProduct;