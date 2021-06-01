import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import "./Footer.scss"
import ContactIcon from './ContactIcon/ContactIcon';

const Footer = () => {
    return (
        <Fragment>
            <div className="footer-VR">
                <div className="container">
                    <div className="row">
                        <div className="col-4 footer">
                            <h5>ABOUT US</h5>
                            <ul>
                                <li>
                                    <b>CÔNG TY TNHH CÔNG NGHỆ MOTO</b>
                                </li>
                                <li>
                                    <b>Địa chỉ:</b>
                  62/224 Đường Hoàng Văn Thụ,Hoàng Mai,Hà Nội
                </li>
                                <li>
                                    <b>Email: </b>
                  hotromoto@gmail.com
                </li>
                                <li><b>Hotline: </b>0352862383</li>
                                <li><ContactIcon /></li>
                            </ul>
                        </div>
                        <div className="col-4 footer">
                            <h5>HỢP TÁC VÀ LIÊN KẾT</h5>
                            <ul>
                                <a href="#"><li>Về moto</li></a>
                                <a href="#"><li>Quy chế hoạt động của moto</li></a>
                                <a href="#"><li>Đăng kí bán hàng</li></a>
                                <a href="#"><li>Đăng ký Affiliate Partner</li></a>
                                <a href="#"><li>Đăng nhập Affiliate Partner</li></a>
                                <a href="#"><li>Chính sách điểm thưởng</li></a>
                            </ul>
                        </div>
                        <div className="col-4 footer">
                            <h5>HỖ TRỢ KHÁCH HÀNG</h5>
                            <ul>
                                <a href="#"><li>Điều khoản và Quy định</li></a>
                                <a href="#"><li>Hướng dẫn đặt hàng</li></a>
                                <a href="#"><li>Hình thức thanh toán</li></a>
                                <a href="#"><li>Vận chuyển và Giao nhận</li></a>
                                <a href="#"><li>Chính sách đổi trả/hoàn tiền và bảo mật thông tin</li></a>
                                <a href="#"><li>Liên hệ Hotline ( 8h - 18h )</li></a>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <h4>Hope you guys<br />come back</h4>
                </div>
            </div>
            
        </Fragment>
    );
};


Footer.propTypes = {

};


export default Footer;
