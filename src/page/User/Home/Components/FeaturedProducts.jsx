import ProductItem from "components/ProductItem";
import SectionHeading from "components/SectionHeading";
import { useNavigate } from "react-router-dom"

const FeaturedProducts = (props) => {

    const navigate = useNavigate();

    return <div className="featured-products pb-12 pt-7">
        <SectionHeading title='Featured products' />
        <div className="flex justify-between overflow-hidden flex-wrap">
            {
                props.listFeaturedProducts.map((item, index) => <ProductItem className='card-product__medium' key={index} brand={item.brand}
                    discountedPercent={item.discountedPercent} url={item.url} name={item.name} title={item.title}
                    price={item.price} discountedPrice={item.discountedPrice} id={item.id} description={item.description}
                    sizes={
                        item.sizes?.map((size) => {
                            return {
                                id: item.id + '.' + size.name,
                                value: size.name,
                                label: size.name
                            }
                        })
                    }
                />)
            }
        </div>
        <div className="text-center mt-5">
            <button onClick={() => { navigate('/shop-now') }} className="button-custom py-[10px] px-[70px] text-[18px]">see more</button>
        </div>
    </div>
}

export default FeaturedProducts