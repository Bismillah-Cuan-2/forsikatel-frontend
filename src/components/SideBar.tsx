import Button from "./Button"
import berandaIcon from "../assets/svg/beranda-icon.svg"
import haditsDankultumIcon from "../assets/svg/hadits-kultum-icon.svg"
import progressHarianIcon from "../assets/svg/progress-icon.svg"
import rekapIcon from "../assets/svg/rekap-icon.svg"
import setoranIcon from "../assets/svg/setor-icon.svg"
import logoutIcon from "../assets/svg/logout-icon.svg"

const SideBar = () => {
  return (
    <div className="flex min-w-64 flex-col justify-center items-center">
      <div className="flex flex-col justify-around h-full">
        <div className="flex flex-col gap-4">
          <Button Icon={berandaIcon} >Beranda</Button>
          <Button Icon={haditsDankultumIcon}>Hadits dan Kultum</Button>
          <Button Icon={progressHarianIcon}>Progress Harian</Button>
          <Button Icon={rekapIcon}>Rekapitulasi Mengaji</Button>
          <Button Icon={setoranIcon}>Setoran Mengaji</Button>
        </div>
        <div className="flex flex-col justify-center px-8">
          <Button Icon={logoutIcon} color="bg-neutral-100" className="justify-center text-primary-300">Keluar Akun</Button>
        </div>
      </div>
    </div>
  )
}

export default SideBar