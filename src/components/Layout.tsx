import React from "react";
import { useLocation } from "react-router-dom"
import SideBar from "./SideBar";
import HeaderContent from "./HeaderContent";

const Layout = ({ children }: { children: React.ReactNode}) => {
    const location = useLocation();
    const noSideBarRoutes = ["/login", "/register"];
    const showSideBar = !noSideBarRoutes.includes(location.pathname);

  return (
    <div className="flex h-screen p-4 gap-4 w-full">
        {showSideBar && <SideBar />}
        <main className="flex flex-col items-center w-full px-[3rem]">
            <HeaderContent />
            {children}
        </main>
    </div>
  )
}

export default Layout