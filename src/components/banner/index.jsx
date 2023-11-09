import BannerLeft from "./components/BannerLeft"
import BannerRight from "./components/BannerRight"
import firstSlide from 'assets/Image/slide_1.jpg'
import secondSlide from 'assets/Image/slide_2.jpg'
import thirdSlide from 'assets/Image/slide_3.jpg'
import fourthSlide from 'assets/Image/slide_4.jpg'
import fifthSlide from 'assets/Image/slide_5.jpg'
const Banner = () => {

    const lstBannerLeft = [
        {
            'url': firstSlide,
            'title': 'Ultra Boots Shoes',
            'brand': 'adidas'
        }, {
            'url': secondSlide,
            'title': 'Nike ClassNameic Cortez',
            'brand': 'nike'
        }, {
            'url': thirdSlide,
            'title': 'Puma Basic Sneakers',
            'brand': 'puma'
        }, {
            'url': fourthSlide,
            'title': 'Converse All Star',
            'brand': 'converse'
        }
    ]

    return <div className="flex h-screen pb-2 w-full overflow-hidden banner">
        <div className="flex flex-wrap content-between">
            {
                lstBannerLeft.map((item, index) => <BannerLeft key={index} url={item.url} title={item.title} brand={item.brand} />)
            }
        </div>
        <div className="overflow-hidden h-full">
            <BannerRight url={fifthSlide} title='The Rangged Priest' brand='Orther' />
        </div>
    </div>

}

export default Banner