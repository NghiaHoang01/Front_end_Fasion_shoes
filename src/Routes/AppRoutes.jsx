import { Route, Routes, Navigate } from "react-router-dom"
import React from "react"
import { APP_URLS } from "constants/variable";
import Home from "page/User/Home";
import ShopNow from "page/User/ShopNow";
import About from "page/User/About";
import Contact from "page/User/Contact";
import SystemStore from "page/User/SystemStore";
import LoginForm from "page/Login/components/LoginForm";
import Login from "page/Login";
import SignupForm from "page/Login/components/SignupForm";
import EmailForm from "page/Login/components/EmailForm";
import OtpForm from "page/Login/components/OtpForm";
import PrivateRoutes from "./PrivateRoutes";
import CartDetail from "page/User/CartDetail";
import ResetPasswordForm from "page/Login/components/ResetPasswordForm";
import ProductDetail from "page/User/ProductDetail";
import CheckOut from "page/User/CheckOut";
import Error404 from "page/Error404";
import Orders from "page/User/Orders";
import Account from "page/User/Account";
import AnonymousRoutes from "./Anonymous";

const AppRoutes = (props) => {
    return <>
        <Routes>
            <Route path="/" element={<Navigate to={APP_URLS.URL_HOME}></Navigate>}></Route>
            <Route path={APP_URLS.URL_HOME} element={<Home />}></Route>
            <Route path={APP_URLS.URL_SHOP_NOW} element={<ShopNow />}></Route>
            <Route path={APP_URLS.URL_ABOUT} element={<About />}></Route>
            <Route path={APP_URLS.URL_CONTACT} element={<Contact />}></Route>
            <Route path={APP_URLS.URL_SYSTEM_STORE} element={<SystemStore />}></Route>
            <Route path={APP_URLS.URL_PRODUCT} element={<ProductDetail />}></Route>

            <Route element={<AnonymousRoutes />}>
                <Route path={APP_URLS.URL_LOGIN} element={<Login form={<LoginForm />} />}></Route>
                <Route path={APP_URLS.URL_SIGNUP} element={<Login form={<SignupForm />} />}></Route>
                <Route path={APP_URLS.URL_FORGOT_PASSWORD} element={<Login form={<EmailForm />} />}></Route>
                <Route path={APP_URLS.URL_VALIFATE_OTP} element={<Login form={<OtpForm />} />}></Route>
                <Route path={APP_URLS.URL_RESET_PASSWORD} element={<Login form={<ResetPasswordForm />} />}></Route>
            </Route>

            <Route element={<PrivateRoutes />}>
                <Route path={APP_URLS.URL_CART} element={<CartDetail />}></Route>
                <Route path={APP_URLS.URL_PRODUCT} element={<ProductDetail />}></Route>
                <Route path={APP_URLS.URL_CHECKOUT} element={<CheckOut />}></Route>
                <Route path={APP_URLS.URL_ORDERS} element={<Orders />}></Route>
                <Route path={APP_URLS.URL_ACCOUNT} element={<Account />}></Route>
            </Route>

            <Route path="*" element={<Error404 />}></Route>
        </Routes>
    </>
}

export default AppRoutes