import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./Nav.scss"
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { openSignIn, openSignUp } from '../../Action';
import HomePages from "./../../Homepages/HomePages";
// function isChangeStatusFormSignIn(){
//     this.props.isOpenSigninForm()
// }
const Nav = () => {
    const [userName, setUserName] = useState();
    const [nickname, setNickName] = useState(localStorage.getItem("signUp"));
    const [deleteAccount, setDeleteAccount] = useState([])
    const dispatch = useDispatch();
    const navList = [
        {
            pageName: "HOME",
            to: "/"
        },
        {
            pageName: "BRAND",
            to: "/navList/brand"
        },
        {
            pageName: "INVESTOR",
            to: "/navList/investor"
        },
        {
            pageName: "CONTACT",
            to: "/navList/contact"
        },
        {
            pageName: "ABOUT",
            to: "/navList/about"
        }
    ]
    // const accountFormSignUp = useSelector(state => state.FormSignUp);
    useEffect(async () => {
        const userNameSpecific = await axios("https://5fc0723cfd14be0016749ca0.mockapi.io/dataForm");
        const userNameValue = userNameSpecific.data[0];
        if (userNameValue) {
            setUserName(userNameValue.username);
            setDeleteAccount(userNameValue.id);
            
        }
    }, []);

    const ChangeStatusFormSignIn = () => {
        const action = openSignIn();
        dispatch(action);
    }
    const ChangeStatusFormSignUp = () => {
        const action = openSignUp();
        dispatch(action);
    }
    const deleteAccountLogOut = () => {
        localStorage.removeItem("signInUser");
        localStorage.removeItem("signUp");
        window.location.reload();
    }
    // var usernameSignin = localStorage.getItem(JSON.parse("signInUser"));
    // console.log(usernameSignin["username"]);
    if (localStorage.getItem("signInUser")) {
        return (
            <div className="nav-lists">
                <ul className="nav">
                    {
                        navList.map((navLinks,key) => (
                            <li  key={key}>
                                <Link to={navLinks.to}>{navLinks.pageName}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div id="dropdown-log-out">
                    <p className="username">Username : {localStorage.getItem("signInUser")}</p>
                    <i className="fa fa-caret-up" aria-hidden="true"></i>
                    <ul className="sign-out">
                        <li>Đơn mua</li>
                        <li>Settings</li>
                        <li onClick={deleteAccountLogOut}>Log Out</li>
                    </ul>
                </div>

            </div>
        );
    }
    else if (nickname) {
        return (

            <div className="nav-lists">
                <ul className="nav">
                    {
                        navList.map((navLinks,key) => (
                            <li  key={key}>
                                <Link to={navLinks.to}>{navLinks.pageName}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div id="dropdown-log-out">
                    <p className="username">Username : {nickname}</p>
                    <i className="fa fa-caret-up" aria-hidden="true"></i>
                    <ul className="sign-out">
                        <li>Đơn mua</li>
                        <li>Settings</li>
                        <li onClick={deleteAccountLogOut}>Log Out</li>
                    </ul>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="nav-lists">
                <ul className="nav">
                    {
                        navList.map((navLinks,key) => (
                            <li key={key}>
                                <Link to={navLinks.to}>{navLinks.pageName}</Link>
                            </li>
                        ))
                    }

                    <li className="sign-in-register" onClick={ChangeStatusFormSignIn}>Đăng nhập</li>
                    <hr />
                    <li className="sign-in-register" onClick={ChangeStatusFormSignUp}>Đăng kí</li>
                </ul>
            </div>
        );
    }
};
Nav.propTypes = {
    nav: PropTypes.array.isRequired,
};
Nav.defaultProps = {
    nav: []
}

export default Nav;
