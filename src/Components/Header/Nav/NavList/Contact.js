import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header';
import Footer from '../../../Footer/Footer';
import "./NavList.scss"
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="wrapper-nav">
            <div className="container inf-moto">
                <div className="row">
                    <div className="col-4">
                        <ul>
                            <Link to="/navList/brand">Thương hiệu Moto</Link>
                            <Link to="/navList/investor">Nhà đầu tư của Moto</Link>
                            <Link to="/navList/contact">Liên hệ</Link>
                            <Link to="/navList/about">Về moto</Link>
                        </ul>
                    </div>
                    <div className="col-8">
                        <p>Hợp tác cùng phát triển</p>
                        <h1>Liên hệ</h1>
                        <ul>
                            <li>Văn phòng :Số nhà 42B,ngách 62/224 Đường Hoàng Văn Thụ,Hoàng Mai,Hà Nội</li>
                            <li>Website: moto.vn ( Nơi cung cấp những sản phẩm an toàn và minh bạch )</li>
                            <li>Fanpage: moto.vn</li>
                            <li>SĐT Hỗ trợ khách hàng : 0352862383</li>
                            <li>Gmail: hotromoto@gmail.com</li>
                            <li>Đối tác có nhu cầu hợp tác quảng cáo hoặc mở gian hàng trên moto : 0383598874</li>
                            <li>Địa chỉ nhận hàng đổi/trả/bảo hành :  Số nhà 42B,ngách 62/224 Đường Hoàng Văn Thụ,Hoàng Mai,Hà Nội</li>
                        </ul>
                        <i>Chúng tôi chân thành cám ơn đến quý khách hàng đã tin tưởng và sử dụng moto. Chúc quý khách hàng có một ngày làm việc thật vui vẻ và tràn đầy năng lượng.</i>
                        <img src="https://olma.s3-ap-southeast-1.amazonaws.com/images/5827a810-ae15-4a67-9eb7-eaf1b4596de9.jpg" />
                    </div>

                </div>
            </div>
        </div>
    );
};

Contact.propTypes = {

};


export default Contact;
