import { useMediaQuery } from "@react-hook/media-query";
import { MOBILE, DESKTOP } from "../constants/DEVICES_SIZE";
import DashboardHeader from "../components/DashboardHeader";
import DashboardKalender from "../components/DashboardKalender";
import ProgressKhatamDashboard from "../components/ProgressKhatamDashboard";
import DashboarAktivitasMengaji from "../components/DashboarAktivitasMengaji";
import { DashboardResponse } from "../constants/DASHBORAD_RESPONSES";
import { API_DASHBOARD } from "../constants/URL_API";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import HadistHariIniDashBoard from "../components/HadistHariIniDashBoard";
import RegionalJuzTerbanyakDashboard from "../components/RegionalJuzTerbanyakDashboard";


const Dashboard = () => {
  const isMobile = useMediaQuery(MOBILE);
  const isDesktop = useMediaQuery(DESKTOP);
  const { data, loading, fetchData } = useFetch<DashboardResponse>(API_DASHBOARD, "GET", {Authorization: `Bearer ${localStorage.getItem("access_token")}`});

  useEffect(() => {
    fetchData();
    console.log(data)
  }, []);


  return (
    <>
      {isMobile && 
        <>
          <div className="flex flex-col w-full h-full items-center px-4 gap-4">
            <DashboardHeader />
            { data && <DashboardKalender data={data.kalender}/> }
            <div className="flex gap-4 h-16 justify-between w-full">
              <div className="bg-white flex justify-center items-center rounded-3xl box-shadow h-full w-full">
              <ProgressKhatamDashboard />
              </div>
              <div className="flex flex-col w-full gap-2">
                <div className=" flex justify-center items-center rounded-2xl box-shadow ">
                  <HadistHariIniDashBoard isMobile={isMobile} />
                </div>
                <div className="flex justify-center items-center rounded-3xl h-full">
                  <RegionalJuzTerbanyakDashboard />
                </div>
              </div>
            </div>
            <div className="bg-white flex justify-center items-center h-16 w-full rounded-3xl box-shadow">
              Statistik Aktivitas Mengaji (Coming Soon✨)
            </div>
            { data ? 
              <DashboarAktivitasMengaji data={data.latest_activity} loading={loading}/>
            : 
              <p>Loading...</p>
            }
          </div>
        </>
      }

      {isDesktop && 
        <>
          <div className="flex flex-row w-full h-full justify-between px-4 gap-4">
            <div className="bg-neutral-100 flex flex-col rounded-3xl w-11/12 h-full justify-center items-center p-4 gap-4">
              <DashboardHeader />
              { data && <DashboardKalender data={data.kalender}/> }
              <div className="flex w-full gap-4 justify-between items-stretch">
                <div className="justify-center items-center rounded-3xl h-64 w-1/3">
                  <RegionalJuzTerbanyakDashboard />
                </div>
                <div className="bg-white flex justify-center items-center h-64 w-full rounded-3xl box-shadow">
                  Statistik Aktivitas Mengaji (Coming Soon✨)
                </div>
              </div>
              { data ? 
              <DashboarAktivitasMengaji data={data.latest_activity} loading={loading}/>
              : 
                <p>Loading...</p>
              }
            </div>
            <div className="flex flex-col gap-4 p-4 rounded-lg w-1/3 h-full justify-center items-center">
              <div className="bg-white flex justify-center items-center rounded-3xl box-shadow h-3/5 w-full">
                <ProgressKhatamDashboard />
              </div>
              <div className="bg-white flex justify-center rounded-3xl box-shadow h-full w-full">
                <HadistHariIniDashBoard isDesktop={isDesktop} />
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Dashboard