export const BASE_URL = 'http://localhost:8080'
// role
export const ROLE_USER = 'USER';
export const ROLE_ADMIN = 'ADMIN';

//token cookie
export const TOKEN_COOKIE = "token_cookie"

// price
export const FEE_SHIPPING = 30000;
export const ORDER_FREESHIP = 5000000;

// url
export const APP_URLS = {
    URL_HOME: '/home',
    URL_SHOP_NOW: '/shop-now',
    URL_ABOUT: '/about',
    URL_CONTACT: '/contact',
    URL_SYSTEM_STORE: '/system-store',
    URL_LOGIN: '/login',
    URL_SIGNUP: '/signup',
    URL_FORGOT_PASSWORD: '/forgot-password',
    URL_VALIFATE_OTP: '/validate-otp',
    URL_RESET_PASSWORD: '/reset-password',
    URL_CART: '/cart',
    URL_PRODUCT: '/product',
    URL_CHECKOUT: '/checkout',
    URL_ORDERS: '/orders',
    URL_ACCOUNT: '/account'
}

//navbar
export const NAVBAR_MENU = [
    {
        'name': 'home',
    }, {
        'name': 'shop now',
    }, {
        'name': 'about'
    }, {
        'name': 'contact'
    }, {
        'name': 'system store'
    }
]

// list gender
export const LIST_GENDER = [
    {
        value: 'male',
        label: 'Male',
    },
    {
        value: 'female',
        label: 'Female',
    },
    {
        value: 'other',
        label: 'Other',
    }
]

// name color
export const BLACK = 'BLACK'

export const BLUE = 'BLUE'

export const BROWN = 'BROWN'

export const GREEN = 'GREEN'

export const GREY = 'GREY'

export const ORANGE = 'ORANGE'

export const PINK = 'PINK'

export const PURPLE = 'PURPLE'

export const RED = 'RED'

export const WHITE = 'WHITE'

export const YELLOW = 'YELLOW'

export const MULTIPLE = 'MULTIPLE'



// list colors
export const LIST_COLORS = [
    {
        value: BLACK,
        label: 'Black'
    }, {
        value: BLUE,
        label: 'Blue'
    }, {
        value: BROWN,
        label: 'Brown'
    }, {
        value: GREEN,
        label: 'Green'
    }, {
        value: GREY,
        label: 'Grey'
    }, {
        value: ORANGE,
        label: 'Orange'
    }, {
        value: PINK,
        label: 'Pink'
    }, {
        value: PURPLE,
        label: 'Purple'
    }, {
        value: RED,
        label: 'Red'
    }, {
        value: WHITE,
        label: 'White'
    }, {
        value: YELLOW,
        label: 'Yellow'
    }, {
        value: MULTIPLE,
        label: 'Multiple'
    },
]

// list range price
export const LIST_RANGE_PICE = [
    {
        minPrice: null,
        maxPrice: 1000000,
    }, {
        minPrice: 1000000,
        maxPrice: 2000000,
    }, {
        minPrice: 2000001,
        maxPrice: 4999999,
    }, {
        minPrice: 5000000,
        maxPrice: null
    }
]

// list sort by
export const LIST_SORT_BY = [
    {
        value: 'newest',
        label: 'Newest'
    }, {
        value: 'price_low',
        label: 'Price: Low-High'
    }, {
        value: 'price_high',
        label: 'Price: Higth-Low'
    },
]

