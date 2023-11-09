import { filter } from "page/User/ShopNow/ShopNowSlice";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import FilterTilte from "./FilterTitle"

const FilterCategory = (props) => {
    const { title, options, code } = props;

    const dispatch = useDispatch()

    const shopNow = useSelector(state => state.shopNow)

    const [dropDown, setDropDown] = useState(false);

    const handleChangeParentCategory = (item) => {
        code === 'CATEGORY' ? dispatch(filter({ parentCategory: item.value })) : dispatch(filter({ childCategory: item.value }))
    }

    return <div className="filter-category pb-3 border-b border-light-gray mb-5">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => setDropDown(!dropDown)}>
            <FilterTilte title={title} />
            <i className={`fa-solid fa-angle-down font-bold ${dropDown && 'rotate-[-180deg]'} duration-300 ease-linear`}></i>
        </div>
        <ul className={`flex flex-col items-start text-eclipse ml-1 text-[16px] duration-150 ease-linear ${dropDown && 'drop-down'}`}>
            {
                options.length !== 0 ? options.map((item, index) => <li
                    className={`tracking-[0.75px] mb-1 duration-200 ease-linear cursor-pointer font-normal flex items-center hover:text-red-custom ${(code === 'CATEGORY' ? shopNow.filter.parentCategory : shopNow.filter.childCategory) === item.value && 'text-red-custom font-semibold'}`}
                    key={index}
                    onClick={() => handleChangeParentCategory(item)}
                >
                    <span className={`check before:text-red-custom duration-200 ease-linear ${(code === 'CATEGORY' ? shopNow.filter.parentCategory : shopNow.filter.childCategory) === item.value ? 'opacity-100' : 'opacity-0'}`}></span>
                    {item.label}
                </li>) : <li className="w-full text-center text-[14.5px]">No data</li>
            }
        </ul>
    </div >
}

export default FilterCategory