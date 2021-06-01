import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./ShowProductPurchase.scss";
const ShowProductPurchase = () => {
    const [infoProduct, setInfoProduct] = useState([]);
    useEffect(async () => {
        const dataToSearch = await axios("https://5fc0723cfd14be0016749ca0.mockapi.io/Products");
        setInfoProduct(dataToSearch.data[0].slideProducts);
    }, []);
    var dataProductById = useSelector(state => state.product.IDProductsToSmallCart);
    console.log(dataProductById);
    const dataProductByIds = [];
    dataProductByIds.push(dataProductById);
    console.log(dataProductByIds);
    
    // const filterIDProduct = []
    // for (let i = 0; i < dataProductById.length; i++) {
    //     if (dataProductById[i] = dataProductByIds[0][i]) {
    //         dataProductByIds[0].pop(dataProductById[i]);
    //     }
    // }
    // console.log(filterIDProduct);

    const showProductPurchases = useSelector(state => state.SearchProduct.onShow);
    function productCart(quantity) {
        var result = [];
        quantity.forEach(quantityProductShow => {
            result.push(
                <Link to="purchase-product">
                    <li>
                        <div className="product-buy">
                            <div className="col-5">
                                <div id="img">
                                    <img src={infoProduct[quantityProductShow]["img"]} id={quantityProductShow} alt="" />
                                </div>
                            </div>
                            <div className="col-7">
                                <div id="info-product-buy">
                                    <h3>{infoProduct[quantityProductShow]["title"]}</h3>
                                    <h4>Giá: {infoProduct[quantityProductShow]["price"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
                                </div>
                            </div>
                        </div>
                    </li>
                </Link>
            );
        });
        return result;

    };
    if (showProductPurchases === true) {
        console.log(dataProductById);

        if (dataProductByIds != "") {
            return (
                <Fragment>
                    {productCart(dataProductByIds[0])}
                </Fragment>
            );
        }
        else {
            return (
                <h1>Bạn chưa thêm sản phẩm nào cả!</h1>
            )
        }
    }
    return null;
}

ShowProductPurchase.propTypes = {

};


export default ShowProductPurchase;
