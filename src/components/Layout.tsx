import React from "react";
import { useLocation } from "react-router-dom"
import SideBar from "./SideBar";

const Layout = ({ children }: { children: React.ReactNode}) => {
    const location = useLocation();
    const noSideBarRoutes = ["/login", "/register"];
    const showSideBar = !noSideBarRoutes.includes(location.pathname);

  return (
    <div className="flex h-screen p-4 gap-4">
        {showSideBar && <SideBar />}
        <main className="flex flex-col justify-center items-center">
            {children}
        </main>
    </div>
  )
}

export default Layout