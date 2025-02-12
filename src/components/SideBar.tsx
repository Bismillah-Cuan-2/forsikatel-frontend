import Button from "./Button"
import berandaIcon from "../assets/svg/beranda-icon.svg"
import haditsDankultumIcon from "../assets/svg/hadits-kultum-icon.svg"
import progressHarianIcon from "../assets/svg/progress-icon.svg"
import rekapIcon from "../assets/svg/rekap-icon.svg"
import setoranIcon from "../assets/svg/setor-icon.svg"
import logoutIcon from "../assets/svg/logout-icon.svg"
import { NavLink, Link } from "react-router-dom"
import classes from "../MainNavigation.module.css"

const getNavLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? classes.active : undefined);
const SideBar = () => {
  return (
    <div className="flex min-w-64 flex-col justify-center items-center">
      <div className="flex flex-col gap-8 justify-around h-full">
        <div className={`flex flex-col gap-4 ${classes.sideBarMenu}`}>
            <NavLink to="/" className={getNavLinkClass}>
              <Button Icon={berandaIcon} color="transparent" className="font-source font-semibold">  
                  Beranda
              </Button>
            </NavLink>    
            <NavLink to="/haditskultum" className={getNavLinkClass}>
              <Button Icon={haditsDankultumIcon} color="transparent" className="font-source font-semibold">
                  Hadits dan Kultum
              </Button>
            </NavLink>
          <NavLink to="/progress" className={getNavLinkClass}>
            <Button Icon={progressHarianIcon} color="transparent" className="font-source font-semibold">
              Progress Harian
            </Button>
          </NavLink>
          <NavLink to="/rekap" className={getNavLinkClass}>
            <Button Icon={rekapIcon} color="transparent" className="font-source font-semibold">
              Rekapitulasi Mengaji
            </Button>
          </NavLink>
          <NavLink to="/setorngaji" className={getNavLinkClass}>
              <Button Icon={setoranIcon} color="transparent" className="font-source font-semibold">
                Setoran Mengaji
              </Button>
          </NavLink>
        </div>
        <div className={`flex flex-col justify-center px-8 ${classes.logoutIcon}`}>
          <Button 
              Icon={logoutIcon} 
              color="bg-neutral-100" 
              className="justify-center font-semibold font-source text-primary-300 rounded-md hover:bg-primary-300 hover:text-white transition-all"
              id="logoutIcon"
              >
                Keluar Akun
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SideBar