import { Outlet, useLocation } from "react-router"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {

  return (
    <>
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        closeOnClick={true}
        pauseOnHover={false}
      />

    </>
  )
}
export default RootLayout