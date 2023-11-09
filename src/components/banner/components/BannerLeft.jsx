const BannerLeft = (props) => {
    return <a href="/" className="overflow-hidden mr-2 w-[49.2%] h-[49.4%] relative rounded banner__left">
        <img src={props.url} alt="" className="object-center object-cover w-full h-full duration-1000" />
        <div className="absolute bottom-5 left-7 text-white align-left">
            <p className="text-2xl tracking-wide">{props.title}</p>
            <p className="text-base uppercase flex items-center tracking-wide">
                {props.brand}
                <i className='bx bx-chevron-right text-base' ></i>
            </p>
        </div>
    </a>
}

export default BannerLeft