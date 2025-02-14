import React from "react";
import { useLocation } from "react-router-dom"
import SideBar from "./SideBar";
import { SideBarContextProvider } from "../context/SideBarContext";
import HeaderContent from "./HeaderContent";
import { DESKTOP, MOBILE } from "../constant/DEVICES_SIZE";
import Footer from "./Footer";
import { useMediaQuery } from "@react-hook/media-query";

const Layout = ({ children }: { children: React.ReactNode}) => {
    const location = useLocation();
    const noSideBarRoutes = ["/login", "/register"];
    const showSideBar = !noSideBarRoutes.includes(location.pathname);
    const isDesktop = useMediaQuery(DESKTOP);
    const isMobile =  useMediaQuery(MOBILE);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full h-screen">
        {showSideBar && 
          <SideBarContextProvider>
            <SideBar />
          </SideBarContextProvider>
        }
        <main className="flex flex-col items-center gap-8 w-full md:pr-14 px-2">
          {(isDesktop && showSideBar) && <HeaderContent />}
          <div className="mt-14 w-full">
            {children}
          </div>
        </main>
        {isMobile && <Footer/>}
    </div>
  )
}

export default Layout