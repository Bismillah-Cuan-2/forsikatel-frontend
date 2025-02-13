import SideBarContent from "./SideBarContent"
import { useSideBarContext } from "../context/SideBarContext";
import { useMediaQuery } from "@react-hook/media-query";
import { MOBILE } from "../constant/DEVICES_SIZE";


const SideBar = () => {
  const { isOpen, toggleSideBar } = useSideBarContext();
  const isMobile = useMediaQuery(MOBILE);

  return (
    isMobile ? (
      <div className={`fixed flex top-0 min-w-64 z-10 justify-center h-full items-center bg-neutral-50 ${isOpen ? "translate-x-0" : "-translate-x-full" } transition-transform duration-300 ease-in-out shadow-md`}
      onClick={toggleSideBar}>
        <SideBarContent />
      </div>
    ) : (
      <div className="flex min-w-64 flex-col justify-start h-full items-center bg-neutral-50">
        <SideBarContent />
      </div>
    )
    
  )
}

export default SideBar