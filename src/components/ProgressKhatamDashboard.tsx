import CircleProgress from "./CircleProgress"
// import { useEffect, useState } from "react"

const dataDummy = {
    progress: 25,
}
const ProgressKhatamDashboard = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-4 px-[3rem]">
        <h3 className="text-2xl font-bold">Progress Khatam</h3>
        <CircleProgress  progress={dataDummy.progress}/>
        <div className="flex flex-col items-center">
        <span className="text-primary-300 text-xl font-semibold font-source">{Math.floor((dataDummy.progress/30)*100)}% Selesai</span>
        <span className="px-2 text-center text-sm text-neutral-700 font-source">Tetap semangat! Hanya {30-dataDummy.progress} juz lagi menuju khatam</span>
        </div>
    </div>
  )
}

export default ProgressKhatamDashboard