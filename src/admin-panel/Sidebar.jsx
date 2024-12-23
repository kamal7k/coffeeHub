import { Drawer, Typography } from "@material-tailwind/react";
import { SiSimpleanalytics } from "react-icons/si";
import { useNavigate } from "react-router";
import { RxDashboard } from "react-icons/rx";

import { BsCart4 } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export const adminSidebarMenuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/admin/admin-dashboard',
    icon: <RxDashboard />
  },


  {
    id: 'products',
    label: 'Products',
    path: '/admin/products',
    icon: <BsCart4 />
  },

  {
    id: 'orders',
    label: 'Orders',
    path: '/admin/order-details',
    icon: <IoCheckmarkCircleOutline />
  },


]


function MenuItems({ setOpen }) {

  const navigate = useNavigate();

  return <nav className="mt-8 flex-col flex gap-2 ">
    {
      adminSidebarMenuItems.map(menuItem => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;

          }} className="flex items-center gap-5 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground text-xl cursor-pointer ">
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>)
      )
    }

  </nav>
}

const Sidebar = ({ open, setOpen }) => {
  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      {/* Sidebar Header */}
      <div className="mb-2 flex flex-col items-center justify-between p-4">

        <div className="flex gap-5 mt-5 items-center">
          <SiSimpleanalytics size={23} />
          <Typography variant="h4" color="black">
            Admin Panel
          </Typography>
        </div>
        <MenuItems setOpen={setOpen} />
      </div>

    </Drawer>
  );
};

export default Sidebar;
