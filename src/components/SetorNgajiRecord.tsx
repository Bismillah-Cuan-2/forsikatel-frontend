import RecordComponent from "./SetorNgajiRecordComponent"
import totalJuzIcon from "../assets/svg/repository-icon.svg"
import lastJuzIcon from "../assets/svg/triangle-flag-circle-icon.svg"
import khatamIcon from "../assets/svg/verified-badge-icon.svg"

const SetorNgajiRecord = () => {
  return (
    <div className="flex justify-between rounded-3xl shadow-component py-2 px-1 record-gradient-background">
        <RecordComponent
            Icon={totalJuzIcon}
            label="Total Juz Dibaca"
            value="100"
        />
        <div className="line-div"/>
        <RecordComponent
            Icon={lastJuzIcon}
            label="Juz Terakhir Dibaca"
            value="100"
        />
        <div className="line-div"/>
        <RecordComponent
            Icon={khatamIcon}
            label="Total Khatam"
            value="100"
        />
    </div>
  )
}

export default SetorNgajiRecord