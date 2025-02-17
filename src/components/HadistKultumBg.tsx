import MushafSajaddah from "./MushafSajaddah"
import MushafTasbih from "../assets/images/mushaf_tasbih.png"
import Sajaddah from "../assets/images/sajaddah.png"
import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import EmbedVideo from "./EmbedVideo"
import { API_HADIST_KULTUM } from "../constant/URL_API"
import { useMediaQuery } from "@react-hook/media-query"
import { MOBILE } from "../constant/DEVICES_SIZE";

type hadistKultumProps = {
    hadist_kultum: {
        day: number,
        hadist: string,
        id: number,
        kultum: string,
        metadata: {
            created_at: string,
            is_deleted: boolean,
            updated_at: string
        }
    },
    message: string
}

const headers = {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
}
const HadistKultumBg = ({children}: {children: React.ReactNode}) => {
    const isMobile = useMediaQuery(MOBILE);
    const { data, error, loading, fetchData } = useFetch<hadistKultumProps>(API_HADIST_KULTUM, "GET",headers );

    useEffect(() => {
            fetchData();

            if (error) {
                alert(error);
            }
    }, [])
    return (
        <>
            <section className="flex lg:flex-row flex-col pr-[2.1rem] md:gap-0 gap-10 items-center lg:items-start w-full lg:mt-5 mt-5">
                {/* Hadits dan kultum headline */}
                <div className="flex flex-col md:gap-2 2xl:w-[40%] lg:w-[30%] w-full md:px-4 px-[4rem]">
                    <h2 className="lg:text-4xl text-[28px] font-bold text-primary-300 text-center lg:text-start">
                        Hadist dan Kultum Hari Ini
                    </h2>
                    <span className="font-semibold font-source text-neutral-900 md:text-base text-xs text-center lg:text-start">
                        Temukan inspirasi dan ilmu baru setiap hari!
                    </span>
                    <div className="hidden items-center mt-5 lg:flex lg:flex-col">
                        <MushafSajaddah />
                    </div>

                    {isMobile && (
                    <div className="absolute z-[-10]"> 
                        <img src={MushafTasbih} alt="MushafTasbih" className="fixed right-0 top-[2rem]"/>
                        <img src={Sajaddah} alt="Sajaddah" className="fixed left-[-13rem] rotate-[11deg] top-[1rem]"/>
                    </div>
                )}
                </div>
                {/* Tonton Kultum hari ini */}
                <div className="flex flex-col gap-2 2xl:w-auto lg:w-[70%] w-full">
                    <h2 className="text-2xl hidden md:block font-semibold text-neutral-900">
                        Tonton Kultum Hari Ini
                    </h2>
                    <div className="bg-neutral-50 rounded-2xl pb-[4rem] drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]">
                       {loading ? "Loading..." : <EmbedVideo videoId={"https://youtu.be/XEYkMaxZmIE?si=jShtgkb-RAXHGvA3"} />} 
                    </div>
                </div>
            </section>
                {children}
            {/* Hadist hari ini */}
            <section className="flex flex-col w-full gap-2 2xl:pb-[5rem] pr-[2.1rem]">
                <h2 className="text-2xl hidden md:block font-semibold text-neutral-900">Hadist Hari Ini</h2>
                <div className=" bg-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)] rounded-2xl px-5 py-3 min-h-[10rem]">
                    <p>{data?.hadist_kultum.hadist || loading}</p>
                </div>
            </section>
        </>
        
    )
}

export default HadistKultumBg