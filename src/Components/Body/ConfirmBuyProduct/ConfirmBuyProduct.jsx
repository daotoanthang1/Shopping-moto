import axios from "axios";
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { voucherForm } from '../../Action';
import VoucherDiscount from "./../../Homepages/VoucherDiscount/VoucherDiscount";
import Product from "./../Products/Product/Product";
import LoadingPage from "./../SearchedProduct/LoadingPage/LoadingPage";
import "./ConfirmBuyProduct.scss";
const ConfirmBuyProduct = () => {
    const [loading,setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    useEffect(async () => {
        setLoading(false)
        const dataToSearch = await axios("https://5fc0723cfd14be0016749ca0.mockapi.io/Products");
        setProduct(dataToSearch.data[0].slideProducts);
        setLoading(true)
    }, []);
    if(loading){
        <LoadingPage />
    }
    const openDiscountForm = useSelector(state => state.Voucher);
    const dispatchStatusForm = useDispatch();
    var productFromDetailProduct = useSelector(state => state.InfoProducts.infoProduct);
    const dataProductById = useSelector(state => state.product.IDProductsToSmallCart);
    const [totalPriceByQuantity,setTotalPriceByQuantity] = useState(1);
    const [IDProduct,setIDProduct] = useState();
    var [acceptToBuy,setAcceptToBuy] = useState(0);
    // const IDVoucherChosen = useSelector(state=>state.Voucher.voucherChosen);
    // console.log(IDVoucherChosen); 
    const deleteProduct = (e) =>{
        window.confirm("Bạn có muốn xóa sản phẩm này không?");
        console.log(e.target.id);
    }
    const onDiscountForm = () => {
        const action = voucherForm(openDiscountForm);
        dispatchStatusForm(action)
    }
    const backToTop = () => {
        window.scroll({
            top: 100,
            left: 0,
            behavior: 'smooth'
        });
    };
    const acceptBuy = (e)=>{
        if(e.target.checked === true){
            setAcceptToBuy(acceptToBuy += 1);
        }
        else{
            setAcceptToBuy(acceptToBuy = acceptToBuy - 1)
            if(acceptToBuy === -1){
                setAcceptToBuy(0)
            }
        }
    };
    const quantityToTotalPrice = (e)=>{
        setIDProduct(e.target.id);
        setTotalPriceByQuantity(e.target.value);
        if(e.target.value < 1){
            e.target.value = 1;
            setTotalPriceByQuantity(1)
        }
    };
    const changeColorToBuy = (e)=>{
        console.log(e.target.value);
        if(e.target.value === "red"){
            e.target.classList.add("red");
            e.target.classList.remove("black");
            e.target.classList.remove("blue");
            e.target.classList.remove("yellow");

        }
        if(e.target.value === "blue"){
            e.target.classList.add("blue");
            e.target.classList.remove("black");
            e.target.classList.remove("red");
            e.target.classList.remove("yellow")
        }
        if(e.target.value === "yellow"){
            e.target.classList.add("yellow");
            e.target.classList.remove("black");
            e.target.classList.remove("blue");
            e.target.classList.remove("red")
        }
        if(e.target.value === "black"){
            e.target.classList.add("black");
            e.target.classList.remove("yellow");
            e.target.classList.remove("blue");
            e.target.classList.remove("red")
        }
    };
    //From detail product:
    if (productFromDetailProduct.length > 0 && productFromDetailProduct !== "") {
        if (productFromDetailProduct[3] === undefined) {
            productFromDetailProduct[3] = "Black";
        }
        var totalPrice = productFromDetailProduct[0]["price"] * productFromDetailProduct[1];
        return (
            <Fragment>
                <hr className="hr-confirm-product" />
                <div className="container">
                    <h1>Các sản phẩm đã chọn</h1>
                    <div id="header-title-product">
                        <p>Sản phẩm</p>
                        <ul>
                            <li>Đơn giá</li>
                            <li>Số lượng</li>
                            <li>Thành tiền</li>
                            <li>Màu sắc</li>
                        </ul>
                    </div>
                    <div id="product-list-purchase">
                        <div className="product-prepare-to-purchase">
                            <input type="checkbox" onClick={acceptBuy}/>
                            <div className="col-4">
                                <img src={productFromDetailProduct[0]["img"]}></img>
                                <h3>{productFromDetailProduct[0]["title"]}</h3>
                            </div>
                            <div className="col-8">
                                <ul>
                                    <li>{productFromDetailProduct[0]["price"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</li>
                                    <li><input type="number" placeholder="0" onChange={quantityToTotalPrice} defaultValue="1"/></li>
                                    <li>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</li>
                                    <li>{productFromDetailProduct[3]}</li>
                                    <li className="delete-product" onClick={deleteProduct}>Xóa</li>
                                </ul>
                            </div>
                        </div>
                        <hr className="hr-confirm-product" />
                    </div>

                    <div className="shop-voucher-discount">
                        <svg fill="none" viewBox="0 -2 23 22" className="shopee-svg-icon icon-voucher-line"><g filter="url(#voucher-filter0_d)"><mask id="a" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"></path></mask><path d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z" mask="url(#a)"></path></g><path clipRule="evenodd" d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"></path><defs><filter id="voucher-filter0_d" x="0" y="1" width="20" height="16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=".5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
                        <h5>Shop Voucher</h5>
                        <p onClick={onDiscountForm}>Click để chọn mã giảm giá</p>
                        <VoucherDiscount />
                    </div>
                    <hr className="confirm-product" />
                    <div id="total-price">
                        <div className="wrapper-total-price">
                            <h4>Số sản phẩm đã chọn <br /> (1)</h4>
                            <h2>Tổng tiền<br />(1 sản phẩm)</h2>
                            <button className="btn btn-warning">
                                Mua Hàng
                        </button>
                        </div>
                    </div>
                    <hr className="confirm-product" />
                    <div className="others-product">
                        <div className="products">
                            <h3 className="title-product">CÁC SẢN PHẨM KHÁC</h3>
                            <ul className="product-lists">
                                <a href="filter-product"><h4 onClick={backToTop} className="see-all product-text-see-all">XEM TẤT CẢ</h4></a>
                                <li><Product /></li>
                            </ul>


                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
    //From small cart on top:
    else if (product.length > 0 && dataProductById != 0) {
        var totalPurchase;
        var totalAll;
        function productAddedToConfirmedProduct(dataProductById){
            var result = [];
            
            dataProductById.forEach(index=>{
                if(totalPriceByQuantity !== 1 && IDProduct){
                    totalPurchase = totalPriceByQuantity * product[IDProduct]["price"];
                }
                else {
                    totalPurchase = product[index]["price"];    
                }
                totalAll = totalPurchase * acceptToBuy;
                result.push(
                    <div className="product-prepare-to-purchase">
                            <input type="checkbox" onClick={acceptBuy}/>
                            <div className="col-4">
                                <img src={product[index]["img"]} />
                                <h3>{product[index]["title"]}</h3>
                            </div>
                            <div className="col-8">
                                <ul>
                                    <li>{product[index]["price"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</li>
                                    <input type="number" id={index} placeholder="0" onChange={quantityToTotalPrice} defaultValue="1"/>
                                    <li>{totalPurchase.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</li>
                                    <select id="cars" name="cars" onClick={changeColorToBuy}>
                                        <option value="black">Black</option>
                                        <option value="blue">Blue</option>
                                        <option value="red">Red</option>
                                        <option value="yellow">Yellow</option>
                                    </select>
                                    <li className="delete-product" onClick={deleteProduct} id={index}>Xóa</li>
                                </ul>
                            </div>
                    </div>
                )
            })
            return result;
        }
        return (
            <Fragment>
                <hr className="hr-confirm-product" />
                <div className="container">
                    <h1>Các sản phẩm đã chọn</h1>
                    <div id="header-title-product">
                        <p>Sản phẩm</p>
                        <ul>
                            <li>Đơn giá</li>
                            <li>Số lượng</li>
                            <li>Thành tiền</li>
                            <li>Màu sắc</li>
                        </ul>
                    </div>
                    <div id="product-list-purchase">
                        
                        {productAddedToConfirmedProduct(dataProductById)}
                        <hr className="hr-confirm-product" />
                    </div>

                    <div className="shop-voucher-discount">
                        <svg fill="none" viewBox="0 -2 23 22" className="shopee-svg-icon icon-voucher-line"><g filter="url(#voucher-filter0_d)"><mask id="a" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"></path></mask><path d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z" mask="url(#a)"></path></g><path clipRule="evenodd" d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"></path><defs><filter id="voucher-filter0_d" x="0" y="1" width="20" height="16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=".5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
                        <h5>Shop Voucher</h5>
                        <p onClick={onDiscountForm}>Click để chọn mã giảm giá</p>
                        <VoucherDiscount />
                    </div>
                    <hr className="confirm-product" />
                    <div id="total-price">
                        <div className="wrapper-total-price">
                            <h4>Số sản phẩm đã chọn <br /> ({acceptToBuy})</h4>
                            <h2>Tổng tiền<br />{totalAll.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h2>
                            <button className="btn btn-warning">
                                Mua Hàng
                        </button>
                        </div>
                    </div>
                    <hr className="confirm-product" />
                    <div className="others-product">
                        <div className="products">
                            <h3 className="title-product">CÁC SẢN PHẨM KHÁC</h3>
                            <ul className="product-lists">
                                <a href="filter-product"><h4 onClick={backToTop} className="see-all product-text-see-all">XEM TẤT CẢ</h4></a>
                                <li><Product /></li>
                            </ul>


                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
    //No product:
    else {
        return (
            <div id="no-product">
                <h1>Bạn chưa có sản phẩm nào trong giỏ hàng</h1>
                <Link to="filter-product"><h3>Click ngay để mua sản phẩm</h3></Link>
            </div>
        )
    }
};


ConfirmBuyProduct.propTypes = {

};


export default ConfirmBuyProduct;
