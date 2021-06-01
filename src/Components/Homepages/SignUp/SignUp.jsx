import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import "./SignUp.scss"
import { useDispatch, useSelector } from 'react-redux';
import { dataFormSignUp, getCheckConfirmPassword, openSignUp } from '../../Action';
import imgSignUp from "./../SignUp/graphic-map.png";
import axios from 'axios';
const { Option } = Select;
const residences = [

];
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const RegistrationForm = () => {
    const isSignUp = useSelector(state => state.dataFormSignUp);
    console.log(isSignUp);
    const [form] = Form.useForm();
    const updateDataFormSignUp = useDispatch();
    const dispatch = useDispatch();
    const isSignUpOn = useSelector(state=>state.dataFormSignUp);

    const onFinish = (values) => {
        const infomationSignUp = dataFormSignUp(values.nickname);
        updateDataFormSignUp(infomationSignUp);
        localStorage.setItem("signUp",values.nickname);
        const action = openSignUp();
        dispatch(action);
        axios({
            method:"POST",
            url:"https://5fc0723cfd14be0016749ca0.mockapi.io/dataForm",
            data:values
        })
        .then(res=>{
            return window.location.reload();
        })
        // .then(res=>{
        //     console.log(res.data);
        // })
    };

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };

    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));
    const ChangeStatusFormSignUp = () => {
        console.log(isSignUp);
        const action = openSignUp();
        dispatch(action);
    }
    // Regex check password:
    const regex = /^[a-z0-9_-]{6,15}$/;
    const checkPassword = (e)=>{
        const targetPassword = e.target.value;
        if(regex.test(targetPassword)){
            e.target.classList.remove('border-accept');
        }
        else{
            e.target.classList.add('border-accept');
        }
    }
    
    if (isSignUpOn === false) {
        return (
            <div className="wrapper-form-sign-up">
                <div className="form-sign-up-registration">
                <i className="fa fa-times" aria-hidden="true" onClick={ChangeStatusFormSignUp}></i>
                    <div className="col-5 title-sign-up">
                        <h3 id="title-h3">TẠO TÀI KHOẢN</h3>
                        <p id="text-sign-up">Tạo tài khoản để theo dõi đơn hàng, lưu
                        danh sách sản phẩm yêu thích, nhận
                        nhiều ưu đãi hấp dẫn.
                    </p>
                        <img id="img-sign-up" src={imgSignUp} />
                    </div>
                    <div className="form col-7">
                        <section id="label-sign-up">
                            <div className="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <h4>WELCOME TO MOTO</h4>
                            </div>
                        </section>
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password onChange={checkPassword}/>
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="nickname"
                                label={
                                    <span>
                                        Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                                            <QuestionCircleOutlined />
                                        </Tooltip>
                                    </span>
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your nickname!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="residence"
                                label="Habitual Residence"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Habitual Residence!',
                                        whitespace: true,
                                    },
                                ]}

                            >
                                {/* <Cascader options={residences} /> */}
                                <input type="text" />
                            </Form.Item>


                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" className="button-sign-up">
                                    Register
            </Button>
                            </Form.Item>
                        </Form>

                    </div>
                </div>

            </div>
        );
    }
    return null;
};
export default RegistrationForm;