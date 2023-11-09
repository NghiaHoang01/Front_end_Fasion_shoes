import { Pagination } from "antd"
import ProductItem from "components/ProductItem"

const Container = (props) => {
    const { showNavbar, listProducts, page, setPage } = props

    const onChangePage = (page) => {
        setPage({
            pageIndex: page,
            pageSize: 9
        });
    };

    return <div className={`${showNavbar ? 'w-[80%]' : 'w-full'} flex flex-wrap justify-between duration-150`}>
        {
            listProducts?.map((item, index) => <ProductItem key={index} className={`${showNavbar ? 'card-product__max' : 'card-product__max'}`}
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
        <div className="pagination text-center mt-6 w-full">
            <Pagination current={page.pageIndex} onChange={onChangePage} pageSize={page.pageSize} total={90} showSizeChanger={false} />
        </div>
    </div>
}

export default Container