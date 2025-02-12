import mushafLogo from "../assets/images/mushaf_1.png"
import HeaderLogo from "./HeaderLogo"
import loginDesktop from "../assets/images/login_desktop.png"

const BackgroundLogin = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="pt-[10rem] noisy-gradient-background sm:bg-neutral-50] sm:pt-0">
      <img src={mushafLogo} className="block sm:hidden object-cover z-10 absolute top-0 left-1/2 -translate-x-1/2" />
      <div className="sm:flex">
        <div className="flex flex-col justify-between items-center py-24 px-16 gap-14 w-full h-full bg-neutral-50 rounded-ss-[100px] sm:flex-1">
          <div className="flex justify-center">
            <HeaderLogo className="w-[2rem] sm:w-full" widthHeader="w-full"/>
          </div>
          <div className="sm:w-full">
            <h1 className="text-3xl font-bold text-primary-300">Selamat Datang!</h1>
            <p>Masuk untuk melihat dan memperbarui laporan mengajimu.</p>
          </div>
          { children }
        </div>
        <div className="hidden lg:flex justify-center items-center flex-1 p-8">
          <img src={loginDesktop} className="object-cover" />
        </div>
      </div>
    </div>
  )
}

export default BackgroundLogin