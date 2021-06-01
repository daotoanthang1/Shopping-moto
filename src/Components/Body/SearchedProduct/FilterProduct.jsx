import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, dataProductById } from "../../Action";
import "./FilterProduct.scss";
import LoadingPage from "./LoadingPage/LoadingPage";
const SearchedProduct = () => {
    const [slideProducts, setSlideProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const dispatchActionQuantity = useDispatch();
    const [priceSearchSubmit, setPriceSearchSubmit] = useState([]);
    const ratingFilter = [5, 4, 3, 2, 1];
    const listBrands = ["Honda", "Yamaha", "Kawasaki", "Ducati", "BMW"];
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    // const textSearch = useSelector(state=>state.SearchProduct.searchText);
    // console.log(textSearch);
    useEffect(async () => {
        setLoading(true);
        const result = await axios("https://5fc0723cfd14be0016749ca0.mockapi.io/Products");
        setSlideProducts(result.data[0].slideProducts);
        setProducts(result.data[0].slideProducts);
        setLoading(false);
    }, []);
    const productFromListBrand = useSelector(state=>state.InfoProducts.product);
    var [product,setProduct] = useState(productFromListBrand);
    var [productByBrand,setProductByBrand] = useState(productFromListBrand);
    var brandFromListBrand = useSelector(state=>state.InfoProducts.brandName);
    if (loading) {
        return (<LoadingPage />)
    }
    //Favorite product by heart:
    const changeHeart = (e) => {
        const changeHeartToggle = e.target;
        changeHeartToggle.classList.toggle("activeHeart");
    }
    //Add quantity of product:
    const addToCarts = (product) => {

        setQuantity([...quantity, product]);
        console.log(quantity.length);
        const action = addToCart(quantity.length + 1)
        dispatchActionQuantity(action)
        const actionDispatch = dataProductById(product.target.id);
        dispatch(actionDispatch);

    }
    //Star in each product:
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
    //Value of input price tag:
    const priceSearch = (e) => {
        var value = e.target.value;
        var name = e.target.name;
        setPriceSearchSubmit({
            ...priceSearchSubmit,
            [name]:value
        });
    }
    //Submit to find by price:
    const SubmitSearchPrice = () => {
        const lastPriceToCompare = parseFloat(priceSearchSubmit.lastPrice);
        const firstPriceToCompare = parseFloat(priceSearchSubmit.firstPrice);
        const productByArrangePrice = [];
        if(slideProducts === products){
            for(let i=0;i<slideProducts.length;i++){
                if(slideProducts[i].price <= lastPriceToCompare && slideProducts[i].price >= firstPriceToCompare){
                    productByArrangePrice.push(slideProducts[i])
                }
                setSlideProducts(productByArrangePrice);
            }
            
        }
        if(product){
            for(let i=0;i<product.length;i++){
                if(product[i].price <= lastPriceToCompare && product[i].price >= firstPriceToCompare){
                    productByArrangePrice.push(product[i])
                }
                setProduct(productByArrangePrice);
            }
        }
        else{
            for(let i=0;i<products.length;i++){
                if(products[i].price <= lastPriceToCompare && slideProducts[i].price >= firstPriceToCompare){
                    productByArrangePrice.push(products[i])
                }
                setSlideProducts(productByArrangePrice);
            }
        }
    }
    //Map star function in filter tool:
    function ratingFilters(ratingCheck) {
        var result = [];
        for (let i = 1; i <= ratingCheck; i++) {
            result.push(<i className="fa fa-star distance-star" aria-hidden="true"></i>)
        }
        for (let i = 1; i <= (5 - ratingCheck); i++) {
            result.push(<i className="fa fa-star-o distance-star" aria-hidden="true"></i>)
        }
        
        return result;
    }
    //Filter by star by See All:
    const findByStar = (ratings) => {
        if(slideProducts !== product){
            const filterByRating = [];
            console.log(ratings);
            for(let i=0;i<products.length;i++){
                if(products[i]["rating"] === ratings){
                    filterByRating.push(products[i]);
                }
            }
            setSlideProducts(filterByRating);
        }
        else{
            const filterByRating = [];
            for(let i=0;i<slideProducts.length;i++){
                if(slideProducts[i]["rating"] === ratings){
                    filterByRating.push(slideProducts[i]);
                }
            }
            setSlideProducts(filterByRating);
        }
    }
    //Filter theo brand:
    const valueBrand = (e) => {
        const brandName = e.target.textContent;
        const newListproductFilter = [];
        if(slideProducts === products){
            for (let i = 0; i < slideProducts.length; i++) {
                if (slideProducts[i].title.indexOf(brandName) >= 0) {
                    newListproductFilter.push(slideProducts[i])
                }
            }
            setSlideProducts(newListproductFilter);
        }
        else{
            for (let i = 0; i < products.length; i++) {
                if (products[i].title.indexOf(brandName) >= 0) {
                    newListproductFilter.push(products[i])
                }
            }
            setSlideProducts(newListproductFilter);
            
        }
    }
    //filter by selection brand:
    const findByBrand = (e) => {
        var brandName = e.target.value;
        const newListproductFilter = [];
        if(slideProducts === products){
            for (let i = 0; i < slideProducts.length; i++) {
                if (slideProducts[i].title.indexOf(brandName) >= 0) {
                    newListproductFilter.push(slideProducts[i])
                }
            }
            setSlideProducts(newListproductFilter);
        }
        else if(brandName === "Thương hiệu"){
            setSlideProducts(products);
        }
        else if(slideProducts === products){
            console.log(brandName);
            for (let i = 0; i < slideProducts.length; i++) {
                if (slideProducts[i].title.indexOf(brandName) >= 0) {
                    setSlideProducts(slideProducts);
                }
            }
            
        }
        else{
            for (let i = 0; i < products.length; i++) {
                if (products[i].title.indexOf(brandName) >= 0) {
                    newListproductFilter.push(products[i])
                }
            }
            setSlideProducts(newListproductFilter);
            
        }
    }
    //Filter product by Arrangement:
    var newListproductFilter = [];
    const sortPrice = (e) => {
        const ArrangementCategory = e.target.value;
        if(slideProducts !=""){
            for (let i = 0; i < slideProducts.length; i++) {
                newListproductFilter.push(slideProducts[i]);
            }
            if (ArrangementCategory.indexOf("Giảm")) {
                var arrangeBySort = newListproductFilter.sort(function (a, b) {
                    return a.price - b.price;
                })
                setSlideProducts(arrangeBySort)
            }
            else {
                var arrangeBySort = newListproductFilter.reverse
                    (function (a, b) {
                        return a.price - b.price;
                    })
                setSlideProducts(arrangeBySort)
            }
        }
    }
    const backToTop = (e) => {
        window.scroll({
            top: 100,
            left: 0,
            behavior: 'smooth'
        })
        const action = dataProductById(e.target.id);
        dispatch(action);
    };
    if(product !=""){
        function filterByStar(ratings){
            if(product === productByBrand){
                const filterByRating = [];
                for(let i=0;i<product.length;i++){
                if(product[i]["rating"] === ratings){
                    filterByRating.push(product[i]);
                }
            }
                setProduct(filterByRating);
            }
            if(product !== productByBrand){
                const filterByRating = [];
                for(let i=0;i<productByBrand.length;i++){
                if(productByBrand[i]["rating"] === ratings){
                    filterByRating.push(productByBrand[i]);
                }
            }
                setProduct(filterByRating);
            }
            
        }
        function filterByBrand(e){
            const brandName = e.target.textContent;
            const newListproductFilter = [];
            if(product === productByBrand){
                for (let i = 0; i < product.length; i++) {
                    if (product[i].title.indexOf(brandName) >= 0) {
                        newListproductFilter.push(product[i])
                    }
                }
                setProduct(newListproductFilter);
            }
            else{
                for (let i = 0; i < slideProducts.length; i++) {
                    if (slideProducts[i].title.indexOf(brandName) >= 0) {
                        newListproductFilter.push(slideProducts[i])
                    }
                }
                setProduct(newListproductFilter);
            }
        }
        function arrangeByPrice(e){
            const ArrangementCategory = e.target.value;
            if(product !=""){
                for (let i = 0; i < product.length; i++) {
                    newListproductFilter.push(product[i]);
                }
                if (ArrangementCategory.indexOf("Giảm")) {
                    var arrangeBySort = newListproductFilter.sort(function (a, b) {
                        return a.price - b.price;
                    })
                    setProduct(arrangeBySort)
                }
                else {
                    var arrangeBySort = newListproductFilter.reverse
                        (function (a, b) {
                            return a.price - b.price;
                        })
                    setProduct(arrangeBySort)
                }
            }
            else{
                for (let i = 0; i < product.length; i++) {
                    newListproductFilter.push(product[i]);
                }
                if (ArrangementCategory.indexOf("Giảm")) {
                    var arrangeBySort = newListproductFilter.sort(function (a, b) {
                        return a.price - b.price;
                    })
                    setProduct(arrangeBySort)
                }
                else {
                    var arrangeBySort = newListproductFilter.reverse
                        (function (a, b) {
                            return a.price - b.price;
                        })
                    setProduct(arrangeBySort)
                }
            }
            
        }
        function findByBrands(e){
            var brandName = e.target.value;
            const newListproductFilter = [];
            if(slideProducts === products){
                for (let i = 0; i < slideProducts.length; i++) {
                    if (slideProducts[i].title.indexOf(brandName) >= 0) {
                        newListproductFilter.push(slideProducts[i])
                    }
                }
                setProduct(newListproductFilter);
            }
            else if(brandName === "Thương hiệu"){
                setProduct(products);
            }
            else if(slideProducts === products){
                console.log(brandName);
                for (let i = 0; i < slideProducts.length; i++) {
                    if (slideProducts[i].title.indexOf(brandName) >= 0) {
                        setProduct(slideProducts);
                    }
                }
                
            }
            else{
                for (let i = 0; i < products.length; i++) {
                    if (products[i].title.indexOf(brandName) >= 0) {
                        newListproductFilter.push(products[i])
                    }
                }
                setProduct(newListproductFilter);
                
            }
        }
        return (
            <div className="container detail-product">
            <div className="searched-product">
                <h1><i className="fa fa-question-circle-o" aria-hidden="true"></i>Kết quả tìm kiếm của {brandFromListBrand.toUpperCase()}</h1>
                <div className="row">
                    <div className="col-3 filter">
                        <h2 className="filter-title">BỘ LỌC TÌM KIẾM</h2>
                        <hr />
                        <div className="price-search">
                            <h3>Khoảng giá</h3>
                            <input type="number" placeholder="Từ" onChange={priceSearch} name="firstPrice"/> -<input type="number" placeholder="Đến" onChange={priceSearch} name="lastPrice"/>
                            <button className="btn btn-warning" onClick={SubmitSearchPrice}>Tìm kiếm</button>
                        </div>
                        <hr />
                        <div className="star-search">
                            <h3>Theo sao</h3>
                            <ul id="star">
                                {ratingFilter.map((rating, key) => (
                                    <li key={key} onClick={()=>filterByStar(ratingFilter.length-key)} >{ratingFilters(rating)}</li>
                                ))}
                            </ul>

                        </div>
                        <hr />
                        <div className="brand-search">
                            <h3>Brand</h3>
                            <ul id="brand">
                                {listBrands.map((brand, key) => (
                                    <li key={key} onClick={filterByBrand}>{brand}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-9 searched-product-list">
                        <div className="container">
                            <div className="title-search">
                                <h4>
                                    Sắp xếp theo
                    </h4>
                                <form>
                                    <select onChange={arrangeByPrice}>
                                        <option>Giá</option>
                                        <option>Tăng dần</option>
                                        <option>Giảm dần</option>
                                    </select>
                                    <br /><br />
                                </form>
                                <form>
                                    <select onChange={findByBrands}>
                                        <option>Thương hiệu</option>
                                        <option>Honda</option>
                                        <option>Yamaha</option>
                                        <option>Kawasaki</option>
                                        <option>Ducati</option>
                                        <option>BMW</option>
                                    </select>
                                    <br /><br />
                                </form>
                            </div>
                            <div className="list-product-search">
                                {product.map((slideProduct, key) => (
                                    <div className="product" >
                                        <div className="icon-heart" onClick={changeHeart}>
                                            <i className="fa fa-heart" aria-hidden="true"></i>
                                        </div>
                                        <div className="img-and-icon" key={slideProduct.id}>
                                            <img src={slideProduct.img} alt="" />
                                        </div>
                                        <div className="info-buy">
                                            <h3 key={slideProduct.id}>{slideProduct.title}</h3>
                                            <ul className="rating" >
                                                <li>Đánh Giá: {showRating(slideProduct.rating)} </li>
                                            </ul>
                                            <h4 >Giá :<br />{slideProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
                                            <div className="buy-now" onClick={addToCarts}>
                                                <p className="buy-title">BUY</p>
                                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>

                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    
        )
    }
    else{
        return (
            <div className="container detail-product">
                <div className="searched-product">
                    <h1><i className="fa fa-question-circle-o" aria-hidden="true"></i>Tất cả sản phẩm</h1>
                    
                    
                    <div className="row">
                        <div className="col-3 filter">
                            <h2 className="filter-title">BỘ LỌC TÌM KIẾM</h2>
                            <hr />
                            <div className="price-search">
                                <h3>Khoảng giá</h3>
                                <input type="number" placeholder="Từ" onChange={priceSearch} name="firstPrice"/> - <input type="number" placeholder="Đến" onChange={priceSearch} name="lastPrice"/>
                                
                                <button className="btn btn-warning" onClick={SubmitSearchPrice}>Tìm kiếm</button>
                            </div>
                            <hr />
                            <div className="star-search">
                                <h3>Theo sao</h3>
                                <ul id="star">
                                    {ratingFilter.map((rating, key) => (
                                        <li key={key} onClick={()=>findByStar(ratingFilter.length-key)} >{ratingFilters(rating)}</li>
                                    ))}
                                </ul>
    
                            </div>
                            <hr />
                            <div className="brand-search">
                                <h3>Brand</h3>
                                <ul id="brand">
                                    {listBrands.map((brand, key) => (
                                        <li key={key} onClick={valueBrand}>{brand}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-9 searched-product-list">
                            <div className="container">
                                <div className="title-search">
                                    <h4>
                                        Sắp xếp theo
                        </h4>
                                    <form>
                                        <select onChange={sortPrice}>
                                            <option>Giá</option>
                                            <option>Tăng dần</option>
                                            <option>Giảm dần</option>
                                        </select>
                                        <br /><br />
                                    </form>
                                    <form>
                                        <select onChange={findByBrand}>
                                            <option>Thương hiệu</option>
                                            <option>Honda</option>
                                            <option>Yamaha</option>
                                            <option>Kawasaki</option>
                                            <option>Ducati</option>
                                            <option>BMW</option>
                                        </select>
                                        <br /><br />
                                    </form>
                                </div>
                                <div className="list-product-search">
                                    {slideProducts.map((slideProduct, key) => (
                                        <div className="product" >
                                            <div className="icon-heart" onClick={changeHeart}>
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                            <Link to="/detail-product">
                                                <div className="img-and-icon" id={key} onClick={backToTop}>
                                                <img src={slideProduct.img} alt="" />
                                            </div>
                                            </Link>
                                            <div className="info-buy">
                                                <h3 key={slideProduct.id}>{slideProduct.title}</h3>
                                                <ul className="rating" >
                                                    <li>Đánh Giá: {showRating(slideProduct.rating)} </li>
                                                </ul>
                                                <h4 >Giá :<br />{slideProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
                                                <div className="buy-now" onClick={addToCarts} id={key}>
                                                    <p className="buy-title" id={key}>BUY</p>
                                                    <i className="fa fa-shopping-cart" aria-hidden="true" id={key}></i>
                                                </div>
                                            </div>
                                        </div>
    
                                    ))}
    
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        );
    }
};


SearchedProduct.propTypes = {

};


export default SearchedProduct;