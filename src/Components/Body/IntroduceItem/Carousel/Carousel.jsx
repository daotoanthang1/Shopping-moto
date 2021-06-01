import React from 'react';
import PropTypes from 'prop-types';
import "./Carousel.scss"
const Carousel = () => {
    return (
        <div className="carousel-box">
            <div id="carouselId" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselId" data-slide-to={0} className="active toolbar-carousel">
                        <i className="fa fa-circle" aria-hidden="true"></i>
                    </li>
                    <li data-target="#carouselId" data-slide-to={1} className="toolbar-carousel"/>
                    <li data-target="#carouselId" data-slide-to={2} className="toolbar-carousel"/>
                    <li data-target="#carouselId" data-slide-to={3} className="toolbar-carousel"/>
                    <li data-target="#carouselId" data-slide-to={4} className="toolbar-carousel"/>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <a href="https://vcdn-vnexpress.vnecdn.net/2020/10/04/CB350-3-bai-2404-1601789082.jpg">
                            <img className="carousel-img" src="https://vcdn-vnexpress.vnecdn.net/2020/10/04/CB350-3-bai-2404-1601789082.jpg" alt="First slide" />
                        </a><div className="carousel-caption d-none d-md-block"><a href="https://vcdn-vnexpress.vnecdn.net/2020/10/04/CB350-3-bai-2404-1601789082.jpg">
                            <div className="about-brand">
                                <div className="text-product-carousel">
                                    <img className="themes-product" src="https://themes.muffingroup.com/be/webdesign/wp-content/uploads/2016/11/home_webdesign_slide1_cover3.png" alt="" />
                                    <img className="themes-products" src="https://themes.muffingroup.com/be/webdesign/wp-content/uploads/2016/11/home_webdesign_slide1_cover3.png" alt="" />
                                    <h3>1.HONDA</h3>
                                    <h5>DEVELOPMENT:</h5>
                                    <p>Hãng Honda đặt trụ sở tại Tokyo và có niêm yết trên các thị trường chứng khoán Tokyo, Thành phố New York, Luân Đôn, Paris, Hãng Honda Hoa Kỳ đặt tại Torrance, California (Hoa Kỳ)</p>

                                </div>
                            </div>

                        </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <a href="https://media.thethao247.vn/upload/hiep95/2018/11/06/yamaha2.jpg"><img className="carousel-img" src="https://media.thethao247.vn/upload/hiep95/2018/11/06/yamaha2.jpg" alt="Second slide" />
                        </a><div className="carousel-caption d-none d-md-block"><a href="https://media.thethao247.vn/upload/hiep95/2018/11/06/yamaha2.jpg">
                            <div className="about-brand">
                                <div className="text-product-carousel">
                                    <img className="themes-product" src="https://themes.muffingroup.com/be/webdesign/wp-content/uploads/2016/11/home_webdesign_slide1_cover3.png" alt="" />
                                    <img className="themes-products" src="https://themes.muffingroup.com/be/webdesign/wp-content/uploads/2016/11/home_webdesign_slide1_cover3.png" alt="" />
                                    <h3>2.YAMAHA</h3>
                                    <h5>DEVELOPMENT:</h5>
                                    <p>Công ty công nghiệp Yamaha là một công ty Nhật Bản chuyên nhiều lĩnh vực khác nhau từ những nhạc cụ, động cơ, xe gắn máy cho đến những thiết bị điện.</p>

                                </div>
                            </div>


                        </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <a href="https://khoahocphattrien.vn/Images/Uploaded/Share/2017/10/21/Loat-moto-Kawasaki-phien-ban-2018-do-bo-ve-Viet-Nam_3.jpg"><img className="carousel-img" src="https://khoahocphattrien.vn/Images/Uploaded/Share/2017/10/21/Loat-moto-Kawasaki-phien-ban-2018-do-bo-ve-Viet-Nam_3.jpg" />
                        </a><div className="carousel-caption d-none d-md-block"><a href="https://khoahocphattrien.vn/Images/Uploaded/Share/2017/10/21/Loat-moto-Kawasaki-phien-ban-2018-do-bo-ve-Viet-Nam_3.jpg">
                            <div className="about-brand">
                                <div className="text-product-carousel">
                                    <img className="themes-product" src="https://themes.muffingroup.com/be/webdesign/wp-content/uploads/2016/11/home_webdesign_slide1_cover3.png" alt="" />
                                    <img className="themes-products" src="https://themes.muffingroup.com/be/webdesign/wp-content/uploads/2016/11/home_webdesign_slide1_cover3.png" alt="" />
                                    <h3>3.KAWASAKI</h3>
                                    <h5>DEVELOPMENT:</h5>
                                    <p>Kawasaki là hãng xe môtô Nhật Bản, được thành lập vào năm 1896 bởi Shozo Kawasaki, đến nay hãng đã trở thành tập đoàn môtô nổi tiếng thế giới</p>

                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <a href="https://ggstorage.oxii.vn/images/oxii-2020-8-23/728/ducati-va-nhung-chiec-moto-quyen-ru-11.jpg"><img className="carousel-img" src="https://ggstorage.oxii.vn/images/oxii-2020-8-23/728/ducati-va-nhung-chiec-moto-quyen-ru-11.jpg" alt="Second slide" />
                        </a><div className="carousel-caption d-none d-md-block"><a href="https://ggstorage.oxii.vn/images/oxii-2020-8-23/728/ducati-va-nhung-chiec-moto-quyen-ru-11.jpg">
                            <div className="about-brand">
                                <div className="text-product-carousel">
                                    <img className="themes-product" src="https://themes.muffingroup.com/be/webdesign/wp-content/uploads/2016/11/home_webdesign_slide1_cover3.png" alt="" />
                                    <img className="themes-products" src="https://themes.muffingroup.com/be/webdesign/wp-content/uploads/2016/11/home_webdesign_slide1_cover3.png" alt="" />
                                    <h3>4.DUCATI</h3>
                                    <h5>DEVELOPMENT:</h5>
                                    <p>Ducati motor Holding S.p.A. là bộ phận sản xuất xe máy của công ty Ducati của Ý, có trụ sở tại Bologna, Ý. Công ty thuộc sở hữu của nhà sản xuất ô tô Đức của Đức thông qua công ty con Lamborghini của Ý, thuộc sở hữu của Tập đoàn Volkswagen.</p>

                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <a href="https://img.dichvuhay.vn/wp-content/uploads/2018/08/gia-xe-moto-bmw.jpg">
                            <img className="carousel-img" src="https://img.dichvuhay.vn/wp-content/uploads/2018/08/gia-xe-moto-bmw.jpg" alt="Third slide" />
                        </a><div className="carousel-caption d-none d-md-block"><a href="https://img.dichvuhay.vn/wp-content/uploads/2018/08/gia-xe-moto-bmw.jpg">
                            <div className="about-brand">
                                <div className="text-product-carousel">
                                    <img className="themes-product" src="https://themes.muffingroup.com/be/webdesign/wp-content/uploads/2016/11/home_webdesign_slide1_cover3.png" alt="" />
                                    <img className="themes-products" src="https://themes.muffingroup.com/be/webdesign/wp-content/uploads/2016/11/home_webdesign_slide1_cover3.png" alt="" />
                                    <h3>5.BWM</h3>
                                    <h5>DEVELOPMENT:</h5>
                                    <p>Ô tô được bán trên thị trường dưới các thương hiệu BMW, Mini và Rolls-Royce, và xe máy được bán dưới thương hiệu BMW motorrad.</p>

                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


Carousel.propTypes = {

};


export default Carousel;
