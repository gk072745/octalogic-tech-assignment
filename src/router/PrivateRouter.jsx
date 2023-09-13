import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute = ({ children }) => {
    const isLogin = useSelector((store) => store.AuthReducer.isLogin)
    const location = useLocation()

    if (!isLogin) {
        return <Navigate to={"/login"} state={{ data: location.pathname }} replace />
    }
    return children
}