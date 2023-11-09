import ProductItem from "components/ProductItem"
import SectionHeading from "components/SectionHeading"

const ProductAlsoLike = (props) => {
    return <div className="product-also-like mb-12">
        <SectionHeading title='You might also like' />
        <div className="flex justify-between overflow-hidden flex-wrap">
            {
                props.listProductsAlsoLike.map((item, index) => <ProductItem key={index} className='card-product__medium'
                    discountedPercent={item.discountedPercent} discountedPrice={item.discountedPrice} name={item.name} title={item.title}
                    brand={item.brand} price={item.price} url={item.url} id={item.id} description={item.description}
                    sizes={item.sizes?.map((size) => {
                        return {
                            id: item.id + '.' + size.name,
                            value: size.name,
                            label: size.name
                        }
                    })} />)
            }
        </div>
        <div className='text-center mt-5'>
            <button className='button-custom py-[10px] px-[44px] text-[18px]'>See more</button>
        </div>
    </div>
}

export default ProductAlsoLike