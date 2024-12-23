
import useAuth from "../hooks/useAuth"

import AdminLayout from "../admin-panel/Layout";
import FrontPage from "./FrontPage";


const AdminRoute = () => {

  const user = useAuth();

  return user?.isAdmin ? <AdminLayout /> : <FrontPage />
}
export default AdminRoute


