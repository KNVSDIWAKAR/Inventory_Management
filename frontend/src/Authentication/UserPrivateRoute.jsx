import { Outlet, Navigate } from 'react-router-dom';
import UDashboardLayout from '../UDashboard/UDashboardLayout';

const UserPrivateRoute = () => 
{
    // Assume auth is obtained from a successful verification
    var flag =localStorage.getItem("isLoggedIn")
    console.log(flag)
    return flag  ? (
        <UDashboardLayout/>
    ) : (

        <Navigate to="/login" />
    );
};

export default UserPrivateRoute
