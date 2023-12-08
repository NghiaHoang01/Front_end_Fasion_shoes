import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "page/User/CartDetail/CartSlice"
import shopNowReducer from "page/User/ShopNow/ShopNowSlice"
import loginReducer from "page/Login/LoginSlice"
import accountReducer from "page/User/Account/AccountSlice"
import homeReducer from "page/User/Home/HomeSilce"
import productReducer from "page/User/ProductDetail/ProductSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer,
        shopNow: shopNowReducer,
        login: loginReducer,
        account: accountReducer,
        home: homeReducer,
        product: productReducer
    }
})

export default store