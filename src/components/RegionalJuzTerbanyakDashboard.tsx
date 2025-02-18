import RegionalCardDashboard from "./RegionalCardDashboard"
import useFetch from "../hooks/useFetch"
import {  useEffect } from "react"
import { DashboardResponse } from "../constants/DASHBORAD_RESPONSES"
import { API_DASHBOARD } from "../constants/URL_API"
const RegionalJuzTerbanyakDashboard = () => {
  const {error, loading, data, fetchData} = useFetch<DashboardResponse>(
    API_DASHBOARD, 
    "GET", 
    {Authorization: `Bearer ${localStorage.getItem("access_token")}`}
  );

  useEffect(() => {
    fetchData()
            if (error) {
                alert(error);
            }
  }, [])


  return (
    <div className="flex flex-col gap-2 py-[1rem] px-[1.5rem]">
       <h3 className="text-base font-semibold font-source">Regional dengan Jumlah Juz Terbanyak</h3>
       {loading ? (<p>Loading...</p>) :(<>
         {!data?.top_region.error  && data?.top_region.map((region, ) => {
          const displayRegion = region.region.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
          return (
            <RegionalCardDashboard medal="orange">
              <div className="flex flex-col">
              <h3 className="text-[15px] font-semibold font-source">{displayRegion}</h3>
              <span className="text-neutral-300 text-xs font-source">{region.total_juz} Juz Terbaca</span>
              </div>
          </RegionalCardDashboard>
          )})}
       
       </>)}
    </div>
  )
}

export default RegionalJuzTerbanyakDashboard