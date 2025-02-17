import { useMediaQuery } from "@react-hook/media-query"
import { TABLET, DESKTOP } from "../constant/DEVICES_SIZE"
import ProgressKhatamDashboard from "../components/ProgressKhatamDashboard";

const Dashboard = () => {
  const isTablet = useMediaQuery(TABLET);
  const isDesktop = useMediaQuery(DESKTOP);

  return (
    <>
      {isTablet && 
      <>
        <div className="flex flex-col w-full h-full items-center px-4 gap-4">
          <div className="bg-white flex justify-center items-center h-16 w-full rounded-3xl box-shadow">
            Header
          </div>
          <div className="bg-white flex justify-center items-center h-16 w-full rounded-3xl box-shadow">
            Kalender
          </div>
          <div className="flex gap-4 h-16 justify-between w-full">
            <div className="bg-white flex justify-center items-center rounded-3xl box-shadow h-full w-full">
              <ProgressKhatamDashboard />
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="bg-white flex justify-center items-center rounded-3xl box-shadow h-full">
                Hadits Hari Ini
              </div>
              <div className="bg-white flex justify-center items-center rounded-3xl box-shadow h-full">
                Regional
              </div>
            </div>
          </div>
          <div className="bg-white flex justify-center items-center h-16 w-full rounded-3xl box-shadow">
            Statistik Aktivitas Mengaji (Coming Soon✨)
          </div>
          <div className="bg-white flex justify-center items-center h-16 w-full rounded-3xl box-shadow">
            Aktivitas Mengaji Terbaru
          </div>
        </div>
      </>
      }

      {isDesktop && 
        <>
          <div className="flex flex-row w-full h-full justify-between px-4 gap-4">
            <div className="bg-neutral-100 flex flex-col rounded-3xl w-11/12 h-full justify-center items-center p-4 gap-4">
              <div className="bg-white flex justify-center items-center h-40 w-full rounded-3xl box-shadow">
                Header
              </div>
              <div className="bg-white flex justify-center items-center h-28 w-full rounded-3xl box-shadow">
                Kalender
              </div>
              <div className="flex w-full gap-4 justify-between items-stretch">
                <div className="bg-white flex justify-center items-center rounded-3xl box-shadow h-64 w-1/3">
                  Regional
                </div>
                <div className="bg-white flex justify-center items-center h-64 w-full rounded-3xl box-shadow">
                  Statistik Aktivitas Mengaji (Coming Soon✨)
                </div>
              </div>
              <div className="bg-white flex justify-center items-center h-48 w-full rounded-3xl box-shadow">
                Aktivitas Mengaji Terbaru
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-lg w-1/3 h-full justify-center items-center">
              <div className="bg-white flex justify-center items-center rounded-3xl box-shadow h-3/5 w-full">
                <ProgressKhatamDashboard />
              </div>
              <div className="bg-white flex justify-center items-center rounded-3xl box-shadow h-full w-full">
                Hadits Hari Ini
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Dashboard