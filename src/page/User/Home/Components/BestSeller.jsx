import ProductItem from "components/ProductItem";
import SectionHeading from "components/SectionHeading";
import { useNavigate } from "react-router-dom"

const BestSeller = (props) => {

    const navigate = useNavigate();

    return <div className="best-seller pb-5">
        <SectionHeading title='Best Seller' />
        <div className="flex justify-between overflow-hidden flex-wrap">
            {
                props.listBestSeller.map((item, index) => <ProductItem key={index} className='card-product__medium'
                    discountedPercent={item.discountedPercent} discountedPrice={item.discountedPrice} name={item.name} title={item.title}
                    brand={item.brand} price={item.price} url={item.url} id={item.id} description={item.description}
                    sizes={
                        item.sizes?.map((size) => {
                            return {
                                id: item.id + '.' + size.name,
                                value: size.name,
                                label: size.name
                            }
                        })
                    } />)
            }
        </div>
        <div className="text-center mt-5">
            <button onClick={() => { navigate('/shop-now') }} className="button-custom py-[10px] px-[70px] text-[18px]">See more</button>
        </div>
    </div>
}

export default BestSeller