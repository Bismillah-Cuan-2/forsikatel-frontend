import Header1 from "../components/Header1"
import SetorNgajiInput from "../components/SetorNgajiInput"
import SetorNgajiRecord from "../components/SetorNgajiRecord"
import SetorMengajiChart from "../components/SetorMengajiChart"
import SetorNgajiTable from "../components/SetorNgajiTable"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import { API_SETOR_NGAJI } from "../constants/URL_API"

const SetorNgaji = () => {
    const { data, fetchData } = useFetch<any>(API_SETOR_NGAJI, "GET", {Authorization: `Bearer ${localStorage.getItem("access_token")}`});

    useEffect(() => {
      fetchData();
      console.log(data);
    }, [])

    return (
      <div className="flex lg:pr-4 px-4 flex-col gap-8">
        <div className="flex lg:gap-8 gap-8 md:flex-row-reverse flex-col lg:justify-around 2xl:px-14 justify-between items-center">
          <div className="flex flex-col lg:justify-center 2xl:pl-14 gap-2">
            <Header1 
              title="Setoran Ngaji Hari Ini"
              text="Yuk catat bacaanmu dan lihat progresnya! Berapa Juz yang Kamu Baca Hari Ini?"
            />
            <SetorNgajiInput />
          </div>
          <SetorNgajiRecord />
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-8 justify-between items-stretch">
          <SetorMengajiChart />
          <SetorNgajiTable />
        </div>
      </div>
    )
  }
  
  export default SetorNgaji