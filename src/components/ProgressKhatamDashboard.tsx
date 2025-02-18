import CircleProgress from "./CircleProgress"


const ProgressKhatamDashboard = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-4 px-[3rem]">
        <h3 className="text-2xl font-bold">Progress Khatam</h3>
        <CircleProgress  progress={20}/>
    </div>
  )
}

export default ProgressKhatamDashboard