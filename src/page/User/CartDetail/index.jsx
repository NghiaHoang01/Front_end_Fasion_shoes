import { useEffect } from "react"
import { useState } from "react"
import Bag from "./components/Bag"
import ProductAlsoLike from "./components/ProductsAlsoLike"
import Summary from "./components/Summary"
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd';
import './Style.css'
import { APP_URLS } from "constants/variable"
import { TabTitle } from "utils/TabTitle"
import { useDispatch } from "react-redux"
import { saveListCart } from "./CartSlice"

const CartDetail = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch();

    const listCartItem = [
        {
            'id': 1,
            'name': 'Nike Pegasus Fly Ease',
            'url': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/332f7c6e-daf5-4a8c-94fa-49db6399d133/streakfly-road-racing-shoes-V17qZm.png',
            'totalPrice': 4699000,
            "title": "Men's Running",
            'colors': 'blue',
            'quantity': 1,
            "size": 43
        }, {
            'id': 2,
            'name': 'FORUM 84 LOW ADV SHOES',
            'url': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bc26760f-9fd1-456b-9e60-47def7cec2d6/pegasus-40-road-running-shoes-3JpHzl.png',
            'totalPrice': 4699000,
            "title": "Men's Running",
            'colors': 'blue',
            'quantity': 1,
            "size": 43
        }, {
            'id': 3,
            'name': 'FORUM LOW SHOES',
            'url': 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e45472f2dd04b0187bfafb2018802fb_9366/Forum_Low_Shoes_Red_IE7176_01_standard.jpg',
            'totalPrice': 4699000,
            "title": "Men's Running",
            'colors': 'blue',
            'quantity': 1,
            "size": 43
        }, {
            'id': 4,
            'name': 'ADIZERO BOSTON 12 RUNNING SHOES',
            'url': 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d9be7869e7444cebbcb1907eaf593f8d_9366/Adizero_Boston_12_Running_Shoes_White_HP9705_01_standard.jpg',
            'totalPrice': 4699000,
            "title": "Men's Running",
            'colors': 'blue',
            'quantity': 1,
            "size": 43
        }
    ]

    const listSimilarProducts = [
        {
            'id': 1,
            'name': 'Nike Pegasus FlyEase',
            'url': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/332f7c6e-daf5-4a8c-94fa-49db6399d133/streakfly-road-racing-shoes-V17qZm.png',
            'price': 4699000,
            'discountedPercent': 0,
            'discountedPrice': 4699000,
            'brand': 'Nike',
            "title": "Men's Running",
            "description": "When it comes to achieving your goals, every second counts. From training to race day, powerful performances call for high-tech gear that's optimized for speed. Introducing the latest range of lightweight running staples that help you to push beyond your limits without distraction.",
            "sizes": [
                {
                    "name": 36,
                    "quantity": 5
                },
                {
                    "name": 37,
                    "quantity": 5
                },
                {
                    "name": 38,
                    "quantity": 5
                },
                {
                    "name": 39,
                    "quantity": 5
                },
                {
                    "name": 40,
                    "quantity": 5
                },
                {
                    "name": 41,
                    "quantity": 5
                },
                {
                    "name": 42,
                    "quantity": 5
                },
                {
                    "name": 43,
                    "quantity": 5
                }
            ]
        }, {
            'id': 2,
            'name': 'FORUM 84 LOW ADV SHOES',
            'url': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bc26760f-9fd1-456b-9e60-47def7cec2d6/pegasus-40-road-running-shoes-3JpHzl.png',
            'price': 4699000,
            'discountedPercent': 30,
            'discountedPrice': 4699000,
            'brand': 'Nike',
            "title": "Men's Running",
            "description": "When it comes to achieving your goals, every second counts. From training to race day, powerful performances call for high-tech gear that's optimized for speed. Introducing the latest range of lightweight running staples that help you to push beyond your limits without distraction.",
            "sizes": [
                {
                    "name": 36,
                    "quantity": 5
                },
                {
                    "name": 37,
                    "quantity": 5
                },
                {
                    "name": 38,
                    "quantity": 5
                },
                {
                    "name": 39,
                    "quantity": 5
                },
                {
                    "name": 40,
                    "quantity": 5
                },
                {
                    "name": 41,
                    "quantity": 5
                },
                {
                    "name": 42,
                    "quantity": 5
                },
                {
                    "name": 43,
                    "quantity": 5
                }
            ]
        }, {
            'id': 3,
            'name': 'FORUM LOW SHOES',
            'url': 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e45472f2dd04b0187bfafb2018802fb_9366/Forum_Low_Shoes_Red_IE7176_01_standard.jpg',
            'price': 4699000,
            'discountedPercent': 0,
            'discountedPrice': 4699000,
            'brand': 'Nike',
            "title": "Men's Running",
            "description": "When it comes to achieving your goals, every second counts. From training to race day, powerful performances call for high-tech gear that's optimized for speed. Introducing the latest range of lightweight running staples that help you to push beyond your limits without distraction.",
            "sizes": [
                {
                    "name": 36,
                    "quantity": 5
                },
                {
                    "name": 37,
                    "quantity": 5
                },
                {
                    "name": 38,
                    "quantity": 5
                },
                {
                    "name": 39,
                    "quantity": 5
                },
                {
                    "name": 40,
                    "quantity": 5
                },
                {
                    "name": 41,
                    "quantity": 5
                },
                {
                    "name": 42,
                    "quantity": 5
                },
                {
                    "name": 43,
                    "quantity": 5
                }
            ]
        }, {
            'id': 4,
            'name': 'ADIZERO BOSTON 12 RUNNING SHOES',
            'url': 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d9be7869e7444cebbcb1907eaf593f8d_9366/Adizero_Boston_12_Running_Shoes_White_HP9705_01_standard.jpg',
            'price': 4699000,
            'discountedPercent': 15,
            "title": "Men's Running",
            'discountedPrice': 4699000,
            'brand': 'Nike',
            "description": "When it comes to achieving your goals, every second counts. From training to race day, powerful performances call for high-tech gear that's optimized for speed. Introducing the latest range of lightweight running staples that help you to push beyond your limits without distraction.",
            "sizes": [
                {
                    "name": 36,
                    "quantity": 5
                },
                {
                    "name": 37,
                    "quantity": 5
                },
                {
                    "name": 38,
                    "quantity": 5
                },
                {
                    "name": 39,
                    "quantity": 5
                },
                {
                    "name": 40,
                    "quantity": 5
                },
                {
                    "name": 41,
                    "quantity": 5
                },
                {
                    "name": 42,
                    "quantity": 5
                },
                {
                    "name": 43,
                    "quantity": 5
                }
            ]
        }
    ]

    const [listCartItemIdChoose, setListCartItemIdChoose] = useState([]);
    const [listCartItemChoose, setListCartItemChoose] = useState([]);

    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = () => {
        api.warning({
            message: 'Notification',
            description: 'Your shopping list is empty. Please select the product you want to purchase.',
        });
    };

    const handleCheckout = async () => {
        if (listCartItemChoose.length === 0) {
            openNotificationWithIcon()
        } else {
            await dispatch(saveListCart(listCartItemChoose))
            navigate(APP_URLS.URL_CHECKOUT)
        }
    }

    useEffect(() => {
        TabTitle('Cart')

        setListCartItemChoose(listCartItem.filter((item) => listCartItemIdChoose.includes(item.id)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listCartItemIdChoose])

    return <div className="min-h-screen pt-6">
        <div className="flex justify-between px-[180px] mb-12">
            <Bag listCartItem={listCartItem} listCartItemIdChoose={listCartItemIdChoose} setListCartItemIdChoose={setListCartItemIdChoose} />
            <Summary subTotal={listCartItemChoose.length > 0 ? listCartItemChoose.reduce((total, current) => total + current.totalPrice, 0) : 0} handleCheckout={handleCheckout} />
        </div>
        <ProductAlsoLike listProductsAlsoLike={listSimilarProducts} />
        {contextHolder}
    </div>
}

export default CartDetail