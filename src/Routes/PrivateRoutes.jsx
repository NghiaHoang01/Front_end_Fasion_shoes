import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {

    const user = localStorage.getItem("user")

    // phần sử dụng bên page Admin
    // if (GetRolesFormToken(token).filter(item => item === variable.ROLE_USER).length !== 0) {
    //     return <Outlet />
    // } else if (GetRolesFormToken(token).length !== 0) {
    //     return <Navigate to='/home' />
    // }
    return user ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes