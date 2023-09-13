import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import { PrivateRoute } from "./PrivateRouter";
import Courses from "../Pages/Courses";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";



const MainRoute = () => {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/courses" element={<PrivateRoute><Courses /></PrivateRoute>} />
        </Routes>
    );

};
export default MainRoute;
