import './Style.css'
import ImageProduct from "./components/ImageProduct"
import InformationProduct from "./components/InformationProduct"
import SimilarProduct from "./components/SimilarProducts"
import { useEffect } from 'react'
import { TabTitle } from 'utils/TabTitle'

const ProductDetail = (props) => {
    const lstImageOfProduct = [
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/43be8545-4e48-45c2-8d49-ba3b8ef7342d/zoom-fly-5-road-running-shoes-lkx7Zp.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1631873c-710a-4a22-8fcd-f544f7987dcc/zoom-fly-5-road-running-shoes-lkx7Zp.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/401a9fa5-f650-4821-b895-12bb06e66c37/zoom-fly-5-road-running-shoes-lkx7Zp.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/14a82023-b626-4858-8184-f3413f870c02/zoom-fly-5-road-running-shoes-lkx7Zp.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0d129953-536e-4750-8698-6a0b1b2e4908/zoom-fly-5-road-running-shoes-lkx7Zp.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa446743-fc0e-493b-af30-90d61572f34d/zoom-fly-5-road-running-shoes-lkx7Zp.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5651c885-aad6-4955-abfc-f2e6540ec8b8/zoom-fly-5-road-running-shoes-lkx7Zp.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f36c6e3c-0fc9-47eb-8443-edf9bb70c02f/zoom-fly-5-road-running-shoes-lkx7Zp.png'

    ]

    const product = {
        'id': 4,
        'name': 'ADIZERO BOSTON 12 RUNNING SHOES',
        'url': 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d9be7869e7444cebbcb1907eaf593f8d_9366/Adizero_Boston_12_Running_Shoes_White_HP9705_01_standard.jpg',
        'price': 4699000,
        'discountedPercent': 15,
        "title": "Men's Running",
        'discountedPrice': 4699000,
        'brand': 'Nike',
        "parentCategory": "men",
        "childCategory": "running",
        'colors': 'blue',
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

    useEffect(() => {
        TabTitle('Product Detail')
    }, [])

    return <div className="product__detail min-h-screen pt-3">
        <div className="flex justify-between py-[30px] px-40">
            <ImageProduct lstImageOfProduct={lstImageOfProduct} discountedPercent={product.discountedPercent} />
            <InformationProduct name={product.name} title={product.title} description={product.description} discountedPercent={product.discountedPercent}
                discountedPrice={product.discountedPrice} price={product.price} colors={product.colors} sizes={product.sizes} brand={product.brand} childCategory={product.childCategory} />
        </div>
        <SimilarProduct listSimilarProducts={listSimilarProducts} />
    </div>
}

export default ProductDetail