import RecordComponentMobile from "./SetorNgajiRecordMobileComponent"
import totalJuzIcon from "../assets/svg/repository-icon.svg"
import lastJuzIcon from "../assets/svg/triangle-flag-circle-icon.svg"
import khatamIcon from "../assets/svg/verified-badge-icon.svg"
import { MOBILE } from "../constants/DEVICES_SIZE"
import { useMediaQuery } from "@react-hook/media-query"
import RecordComponentDesktop from "./SetorNgajiRecordDesktopComponent"

const SetorNgajiRecord = () => {
  const isMobile = useMediaQuery(MOBILE);
  return (
    <div className="flex justify-between lg:justify-center lg:items-center rounded-3xl shadow-component py-2 px-1 lg:p-0 bg-record-gradient lg:bg-none lg:gap-2">
      { isMobile ? (
        <>
          <RecordComponentMobile
           Icon={totalJuzIcon}
            label="Total Juz Dibaca"
            value="100"
          />
          <div className="line-div"/>
          <RecordComponentMobile
              Icon={lastJuzIcon}
              label="Juz Terakhir Dibaca"
              value="100"
          />
          <div className="line-div"/>
          <RecordComponentMobile
              Icon={khatamIcon}
              label="Total Khatam"
              value="100"
          />
        </>
      )
      : (
        <>
          <RecordComponentDesktop Icon={totalJuzIcon} label="Total Juz Dibaca"  bgColor="bg-record-gradient" size="lg:h-32 lg:w-32 xl:h-36 xl:w-36"> 
            100 <span className="text-xs">juz</span>
          </RecordComponentDesktop>
          <RecordComponentDesktop Icon={lastJuzIcon} label="Juz Terakhir Dibaca"  bgColor="bg-record-gradient-2" labelSize="text-md" size="lg:h-36 lg:w-36 xl:h-40 xl:w-40"> 
            <span className="text-xs">juz</span> 100
          </RecordComponentDesktop>
          <RecordComponentDesktop Icon={khatamIcon} label="Total Khatam"  bgColor="bg-record-gradient" size="lg:h-32 lg:w-32 xl:h-36 xl:w-36"> 
            100<span className="text-xs">kali</span>
          </RecordComponentDesktop>
        </>
      )
      }
    </div>
  )
}

export default SetorNgajiRecord