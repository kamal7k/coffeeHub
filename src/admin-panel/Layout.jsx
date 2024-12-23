import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router";


const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); //state to hold the searchQuery

  return (
    <div className="flex min-h-screen w-full">
      {/* Admin Sidebar */}
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />

      {/* Admin Header */}
      <div className="flex flex-1 flex-col">
        <Header setOpen={setOpenSidebar} setSearchQuery={setSearchQuery} />

        <main className=" bg-muted/40 p-4">
          <Outlet context={{ searchQuery }} />
          {/* Provide search query to Outlet */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
