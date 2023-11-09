import HeadingTitle from "./Components/HeadingTitle"
import './Style.css'
import FeaturedProducts from "./Components/FeaturedProducts"
import TrustedPartners from "./Components/TrustedPartners"
import BestSeller from "./Components/BestSeller"
import { useEffect } from "react"
import React from 'react';
import nike from 'assets/Image/brand-nike.jpg'
import adidas from 'assets/Image/brand-adidas.jpg'
import puma from 'assets/Image/brand-puma.jpg'
import converse from 'assets/Image/brand-converse.jpg'
import merrell from 'assets/Image/brand-merrel.jpg'
import { TabTitle } from 'utils/TabTitle'
import Banner from "components/banner"

const Home = () => {
    const listBestSeller = [
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

    const listFeaturedProducts = [
        {
            'id': 5,
            'name': 'Nike Pegasus FlyEase',
            'url': 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/43be8545-4e48-45c2-8d49-ba3b8ef7342d/zoom-fly-5-road-running-shoes-lkx7Zp.png',
            'price': 4699000,
            'discountedPercent': 10,
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
            'id': 6,
            'name': 'Nike Pegasus FlyEase',
            'url': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/220a9e95-2e4e-48ab-87af-6e1e914e3c04/air-force-1-07-shoes-G4VDWz.png',
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
            'id': 7,
            'name': 'Nike Pegasus FlyEase',
            'url': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cbd29b61-8426-46c3-a2c0-de02d5521c4b/streakfly-road-racing-shoes-Gn30VC.png',
            'price': 4699000,
            'discountedPercent': 20,
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
            'id': 8,
            'name': 'Nike Pegasus FlyEase',
            'url': 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/39060014-d57f-4263-a105-66131af46959/wio-10-road-running-shoes-GBqQMW.png',
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
        }
    ]

    const listPartnerts = [
        nike, adidas, puma, converse, merrell
    ]

    useEffect(() => {
        TabTitle('Home')
    }, [])
    return <div className="home pt-0">
        <Banner />
        <HeadingTitle />
        <BestSeller listBestSeller={listBestSeller} />
        <FeaturedProducts listFeaturedProducts={listFeaturedProducts} />
        <TrustedPartners listPartnerts={listPartnerts} />
    </div>
}

export default Home