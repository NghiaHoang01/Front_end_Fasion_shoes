import { useNavigate } from "react-router-dom"

const HeadingTitle = () => {
    const navigate = useNavigate();

    return <div className="heading-title w-full text-center py-12 bg-white">
        <p className="text-[100px] uppercase italic tracking-[10px] font-semibold text-eclipse">unbelievable</p>
        <p className="text-[50px] uppercase italic font-bold text-eclipse tracking-[1px] mt-[-25px] mb-2">speed.comfort.</p>
        <button onClick={() => { navigate('/shop-now') }} className="button-custom py-[10px] px-[70px] text-[18px]">Shop now</button>
    </div>
}

export default HeadingTitle