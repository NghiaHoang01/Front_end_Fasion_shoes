import { filter } from "page/User/ShopNow/ShopNowSlice";
import { useDispatch, useSelector } from "react-redux";
import FilterTilte from "./FilterTitle"

const FilterBrand = (props) => {

    const dispatch = useDispatch();

    const shopNow = useSelector(state => state.shopNow)

    const handleChangeBrand = (item) => {
        dispatch(filter({ brand: item.value }))
    }

    return <div className="filter-brand pb-3 mb-5 border-b border-light-gray">
        <FilterTilte title='Brand' />
        <ul className="flex flex-col items-start text-eclipse text-[16px] ml-1">
            {
                props.options?.map((item, index) => <li
                    className={`tracking-[0.75px] mb-1 duration-200 ease-linear cursor-pointer font-normal flex items-center hover:text-red-custom ${shopNow.filter.brand === item.value && 'text-red-custom font-semibold'}`}
                    key={index}
                    onClick={() => handleChangeBrand(item)}
                >
                    <span className={`check before:text-red-custom duration-200 ease-linear ${shopNow.filter.brand === item.value ? 'opacity-100' : 'opacity-0'}`}></span>
                    {item.label}
                </li>)
            }
        </ul>
    </div>
}

export default FilterBrand