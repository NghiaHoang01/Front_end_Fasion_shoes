import { useScrollDirection } from "Hook/UseScrollDirection"
import HeaderLogo from "./components/HeaderLogo"
import HeaderRight from "./components/HeaderRight"
import NavbarMenu from "./components/NavbarMenu"
import './Style.css'

const Header = () => {

    const scrollDirection = useScrollDirection()

    return <div className={`header px-[26px] py-4 flex justify-between items-center shadow-md bg-white sticky ${scrollDirection === "down" ? "-top-24" : "top-0"} z-50 w-full h-20 duration-[400ms] ease-linear`}>
        <HeaderLogo />
        <NavbarMenu />
        <HeaderRight />
    </div>
}

export default Header