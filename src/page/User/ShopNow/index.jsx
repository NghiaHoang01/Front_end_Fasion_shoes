import Container from "./components/Container/Container"
import Navbar from "./components/Navbar/Navbar"
import { TabTitle } from '../../../utils/TabTitle'
import { useEffect, useState } from "react";
import './Style.css'
import FilterSection from "./components/FilterSection/FilterSection";
import { LIST_SORT_BY } from "constants/variable";
import { useSelector } from "react-redux";
const ShopNow = () => {

    const listProducts = [
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
        }, {
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
        }, {
            'id': 9,
            'name': 'Nike Pegasus FlyEase',
            'url': 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/04c3a599-cfc7-40de-9ad2-b5a9242d2ddd/zoom-fly-5-road-running-shoes-lkx7Zp.png',
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

    const listBrand = [
        {
            value: 'ALL',
            label: 'All brands'
        },
        {
            value: 'NIKE',
            label: 'Nike'
        }, {
            value: 'ADIDAS',
            label: 'Adidas'
        }, {
            value: 'PUMA',
            label: 'Puma'
        }, {
            value: 'CONVERSE',
            label: 'Converse'
        }, {
            value: 'OTHER',
            label: 'Other'
        },
    ]

    const listCategoryFirst = [
        {
            value: 'MEN',
            label: 'Men'
        }, {
            value: 'WOMEN',
            label: 'Women'
        }, {
            value: 'KIDS',
            label: 'Kids'
        }
    ]

    const listCategorySecond = [
        {
            value: 'FOOTBALL',
            label: 'Football'
        }, {
            value: 'RUNNING',
            label: 'Running'
        }, {
            value: 'LIFESTYLE',
            label: 'Lifestyle'
        }, {
            value: 'GYM',
            label: 'Gym and Training'
        }, {
            value: 'SANDALS',
            label: 'Sandals'
        }
    ]

    const [showNavbar, setShowNavbar] = useState(true)

    const [page, setPage] = useState({
        pageIndex: 1,
        pageSize: 9
    })

    const shopNow = useSelector(state => state.shopNow)

    useEffect(() => {
        TabTitle('Shop Now')
    }, [])

    useEffect(() => {
        console.log(shopNow.filter)
    }, [shopNow])

    useEffect(() => {
        console.log(page)
    }, [page])

    return <div className="pt-6 pb-10 px-9 min-h-screen">
        <FilterSection
            totalProduct={listProducts.length}
            listSortBy={LIST_SORT_BY}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
        />
        <div className="flex justify-between">
            <Navbar
                listBrand={listBrand}
                listCategoryFirst={listCategoryFirst}
                listCategorySecond={listCategorySecond}
                showNavbar={showNavbar}
            />
            <Container listProducts={listProducts} showNavbar={showNavbar} page={page} setPage={setPage} />
        </div>
    </div>
}

export default ShopNow