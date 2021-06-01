import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header';
import Footer from '../../../Footer/Footer';
import "./NavList.scss"
import { Link } from 'react-router-dom';

const Investor = () => {
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
                    <h1>Nhà đầu tư MOTO (Công ty TNHH Moto Việt Nam)</h1>
                    <ol>
                        <li>
                            Dự án MOTO ( theo tiếng thổ nhĩ kì, có nghĩa là hạnh phúc ) được thành lập vào cuối năm 2020 với mục tiêu trở thành nơi cung cấp sỉ&lẻ các sản phẩm MOTO độc đáo và là nơi giao dịch giữa người làm ra sản phẩm và người sử dụng sản phẩm.
                    </li>
                        <li>
                            Với mục tiêu nhằm mang đến các sản phẩm và dịch vụ MOTO tốt nhất đến khách hàng, MOTO tập trung và liên kết chặt chẽ với các nhà cung cấp để nâng cao quy trình kiểm định tính an toàn, minh bạch của sản phẩm trước khi đưa vào thị trường và chuyển đến tận tay khách hàng.
                    </li>
                        <li>
                            Ngoài ra, với sự kết hợp với các đơn vị giao hàng và các sàn thương mại điện tử khác trên thị trường, MOTO hy vọng sự tiện lợi trong khâu vận chuyển và mua hàng sẽ mang đến được trãi nghiệm hài lòng cho khách hàng khi lựa chọn sản phẩm từ MOTO.
                    </li>
                        <li>
                            Với slogan “ Nâng niu từng khách hàng ” MOTO tập trung mang đến cho khách hàng sự trãi nghiệm và những sản phẩm thú vị, lí thú qua từng khoảng khắc. Hãy cùng MOTO trãi nghiệm và cảm nhận những sản phẩm thú vị đấy nhé!
                    </li>
                        <li>
                            Nếu quý khách hàng có bất kì thắc mắc, trao đổi hay đóng góp ý kiến về MOTO, thì vui lòng tham khảo các thông tin bên dưới, chúng tôi sẽ kiểm tra và phản hồi sau đó :
                            
                            <ul>
                                <li>Văn phòng :Số nhà 42B,ngách 62/224 Đường Hoàng Văn Thụ,Hoàng Mai,Hà Nội</li>
                                <li>Website: MOTO.vn ( Nơi cung cấp những sản phẩm an toàn và minh bạch )</li>
                                <li>Fanpage: MOTO.vn</li>
                                <li>SĐT Hỗ trợ khách hàng : 0352862383</li>
                                <li>Gmail: hotroMOTO@gmail.com</li>
                                <li>Đối tác có nhu cầu hợp tác quảng cáo hoặc mở gian hàng trên MOTO : 0383598874</li>
                                <li>Địa chỉ nhận hàng đổi/trả/bảo hành :  Số nhà 42B,ngách 62/224 Đường Hoàng Văn Thụ,Hoàng Mai,Hà Nội</li>
                            </ul> 
                    </li>
                    </ol>
                    <i>Chúng tôi chân thành cám ơn đến quý khách hàng đã tin tưởng và sử dụng MOTO. Chúc quý khách hàng có một ngày làm việc thật vui vẻ và tràn đầy năng lượng.</i>
                    <img src="https://olma.s3-ap-southeast-1.amazonaws.com/images/5827a810-ae15-4a67-9eb7-eaf1b4596de9.jpg" />
                </div>
                
            </div>
        </div>
        </div>
    );
};

Investor.propTypes = {

};


export default Investor;
