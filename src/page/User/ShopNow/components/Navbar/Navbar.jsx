import { LIST_COLORS, LIST_RANGE_PICE } from "constants/variable"
import { useDispatch } from "react-redux"
import { resetFilter } from "../../ShopNowSlice"
import FilterBrand from "./Components/FilterBrand"
import FilterCategory from "./Components/FilterCategories"
import FilterColor from "./Components/FilterColors"
import FilterPrice from "./Components/FilterPrice"
import FilterSale from "./Components/FilterSale"

const Navbar = (props) => {

    const dispatch = useDispatch()
    const { listBrand, listCategoryFirst, listCategorySecond, showNavbar } = props

    const reset = () => {
        dispatch(resetFilter())
    }

    return <div className={`${showNavbar ? 'w-[18%]' : 'w-0 h-0'} duration-150 overflow-hidden`}>
        <FilterBrand options={listBrand} />
        <FilterCategory code='CATEGORY' title='Category' options={listCategoryFirst} />
        <FilterCategory code='ACTIVITY' title='Activity' options={listCategorySecond} />
        <FilterSale />
        <FilterColor listColors={LIST_COLORS} />
        <FilterPrice listRangePrice={LIST_RANGE_PICE} />
        <div className="text-center mb-2">
            <button type="button" className="button-reset px-7 py-1" onClick={() => reset()}>Reset Filter</button>
        </div>
    </div>
}

export default Navbar