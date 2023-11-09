import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "page/User/CartDetail/CartSlice"
import shopNowReducer from "page/User/ShopNow/ShopNowSlice"
import loginReducer from "page/Login/LoginSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer,
        shopNow: shopNowReducer,
        login: loginReducer
    }
})

export default store