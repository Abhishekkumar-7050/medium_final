


import { Navigate, Outlet } from 'react-router-dom';

const RequireUser = () => {
    const user = localStorage.getItem("token");
    // console.log(" which user", user);
    return user ? <Outlet /> : <Navigate to='/signin' />;
}

export default RequireUser;
