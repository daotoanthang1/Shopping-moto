import React from 'react';
import PropTypes from 'prop-types';
import "./VoucherDisCount.scss";
import { useDispatch, useSelector } from 'react-redux';
import { Statistic, Row, Col } from 'antd';
import { voucherChosen } from '../../Action';
const VoucherDiscount = () => {
    const openDiscountForm = useSelector(state => state.Voucher);
    const dispatch = useDispatch();
    const { Countdown } = Statistic;
    const deadline1 = Date.now() + 1000 * 60 * 60 * 10 * 2 + 1000 * 30;
    const deadline2 = Date.now() + 1000 * 60 * 60 * 5 * 2 + 1000 * 17;
    function onFinish() {
        console.log('finished!');
    }
    const checkToDisCount = (e) =>{
        console.log(e.target.id);
        const action = voucherChosen(e.target.id);
        dispatch(action);
    }
    if (openDiscountForm === false) {
        
        return (
            <div id="voucher-discount">
                <i className="fa fa-caret-up" aria-hidden="true"></i>
                <div id="vouchers">
                    <div className="voucher" onClick={checkToDisCount}>
                        <p>Miễn phí vận chuyển</p>
                        <h5>Thời gian hạn dụng <br />
                        <Row gutter={16}>
                            <Col span={12}>
                                <Countdown value={deadline1} onFinish={onFinish} />
                            </Col>    
                        </Row></h5>
                        <b>Giá giảm:1.000.000đ</b>
                        <input type="checkbox" id="1"/>
                    </div>
                    <div className="voucher" onClick={checkToDisCount}>
                        <p>Sales <br /> 30%</p>
                        <h5>Thời gian hạn dụng <br />
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Countdown value={deadline2} onFinish={onFinish} />
                                </Col>    
                            </Row>
                        </h5>
                        <b>Giá giảm:1.000.000đ</b>
                        <input type="checkbox" id="2" />
                    </div>
                </div>
            </div>
        );
    }
    return null
};


VoucherDiscount.propTypes = {
};


export default VoucherDiscount;
