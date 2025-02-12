import MushafSajaddah from "./MushafSajaddah"
import { useEffect } from "react"
// import useFetch from "../hooks/useFetch"
import EmbedVideo from "./EmbedVideo"

const HadistKultumBg = ({children}: {children: React.ReactNode}) => {

    useEffect(() => {
        
    }, [])
    return (
        <>
            <section className="flex gap-2 w-full mt-5">
                {/* Hadits dan kultum headline */}
                <div className="flex flex-col gap-2 md:w-[30%] 2xl:w-[40%]">
                    <h2 className="text-4xl font-semibold text-primary-300">
                        Hadist dan Kultum Hari Ini
                    </h2>
                    <span className="font-semibold font-source text-neutral-900 text-base">
                        Temukan inspirasi dan ilmu baru setiap hari!
                    </span>
                    <div className="flex flex-col items-center">
                        <MushafSajaddah />
                    </div>
                </div>
                {/* Tonton Kultum hari ini */}
                <div className="flex flex-col gap-2 md:w-[70%] 2xl:w-[60%]">
                    <h2 className="text-2xl font-semibold text-neutral-900">
                        Tonton Kultum Hari Ini
                    </h2>
                    <div className="bg-neutral-50 rounded-2xl pb-[2rem] drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]">
                        <EmbedVideo videoId="https://youtu.be/FTL55q-b5B4?si=1_8OoEH47RMQ5Yl0" />
                    </div>
                </div>
            </section>

            {/* Hadist hari ini */}
            <section className="flex flex-col w-full gap-2 2xl:pb-[5rem]">
                <h2 className="text-2xl font-semibold text-neutral-900">Hadist Hari Ini</h2>
                <div className=" bg-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)] rounded-lg px-3 py-3 min-h-[10rem]">
                    <p>Test</p>
                </div>
            </section>
        </>
        
    )
}

export default HadistKultumBg