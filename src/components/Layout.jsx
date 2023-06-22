import { Outlet } from "react-router-dom";
import React from 'react'
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
        <Sidebar/>
        <Outlet/>
    </div>
  )
};

export default Layout