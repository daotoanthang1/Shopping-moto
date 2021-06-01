import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from "react-redux";
import { getDataFormValues, openSignIn, openSignUp } from '../../Action';
import "./SignIn.scss"
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const FormSignIn = (props) => {
    const {isOnFormSignIn} = props;
    //Send data to mockAPI:
    const onFinish = (values,id) => {
        const dataValues = {
            username:values.username,
            password:values.password
        };
        axios({
            method:"POST",
            url:`https://5fc0723cfd14be0016749ca0.mockapi.io/dataForm`,
            data:dataValues
        });
        localStorage.setItem('signInUser', dataValues.username);
        window.location.reload();
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const dispatch = useDispatch();
    const ChangeStatusFormSignIn = () => {
        const actionStatus = openSignIn();
        console.log(actionStatus);
        dispatch(actionStatus);
    }
    const ChangeStatusFormSignUp = () => {
        
        const action = openSignUp();
        dispatch(action);
        const actionStatus = openSignIn();
        console.log(actionStatus);
        dispatch(actionStatus);
    }
    //Reset Web
    const loadWeb = (e)=>{
        
        // e.preventDefault();
        
    }
    
    if (isOnFormSignIn === true) {
        return (
            <Fragment>
                <div className="wrapper-form">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <i className="fa fa-times" aria-hidden="true" onClick={ChangeStatusFormSignIn}></i>
                        <img className="logo-sign-in-moto" src="https://motosaigon.vn/wp-content/uploads/2017/04/ve-moto-chi-bi-cartoon-de-thuong-motosaigon-9.jpg" />
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                            
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                            // onChange = {checkPassword}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" onClick={loadWeb}>
                                Submit
                            </Button>
                        </Form.Item>
                        <h3 id="registration">Chưa có tài khoản?   <strong onClick={ChangeStatusFormSignUp}>ĐĂNG KÍ</strong></h3>
                    </Form>
                </div>


            </Fragment>
        );
    }
    return null;
};
const mapStateToProps = state => {
    return {
        isOnFormSignIn: state.FormReducer
    }
}
export default connect(mapStateToProps,null)(FormSignIn);
// export default FormSignIn;