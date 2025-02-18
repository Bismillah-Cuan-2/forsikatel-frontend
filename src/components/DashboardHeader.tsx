import Header1 from "./Header1"
import Button from "./Button"
import mushafLogo from "../assets/images/mushaf_1.png"
import arrowIcon from "../assets/svg/arrow-icon.svg"
import { MOBILE  } from "../constants/DEVICES_SIZE"
import { useMediaQuery } from "@react-hook/media-query"

const DashboardHeader = () => {
    const isMobile = useMediaQuery(MOBILE);

  return (
    <div className="lg:bg-white lg:box-shadow flex lg:flex-row-reverse justify-center lg:justify-around items-center p-2 lg:p-6 gap-2 w-full rounded-3xl">
        <div className="flex w-5/6 h-11/12 justify-center items-center xl:w-48 lg:w-8/12 lg:h-8 lg:z-10">
            <img src={mushafLogo} className="object-cover h-52 lg:h-56" />
        </div>
        <div className="flex flex-col gap-2 justify-center">
            <Header1 
                title={ isMobile ?
                    <>
                        Selamat Pagi, <br /> Bu Lety!
                    </> :
                    <>
                        Selamat Pagi, Bu Lety!
                    </>
                } 
                text="Jangan lupa mengaji hari ini. Yuk, lanjutkan bacaanmu!"
            />
            <Button 
                Icon={arrowIcon} color="bg-neutral-100" 
                padding="px-4 py-3"
                className="font-source justify-center font-semibold gap-2 rounded-lg lg:rounded-xl w-9/12 xl:w-6/12 lg:w-10/12 lg:text-lg text-sm text-primary-300">Mulai Mengaji</Button>
        </div>
    </div>
  )
}

export default DashboardHeader