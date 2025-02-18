import { createPortal } from "react-dom"
import {  useRef } from "react"

type regionalListProps = {
    id: number,
    regional: string,
    values: string,
}
export const regionalList: regionalListProps[] = [
    {
        id: 1,
        regional: "Head Office",
        values: "ho",
    }, 
    {
        id: 2,
        regional: "R1 Sumatera",
        values: "r1_sumatera",
    },
    {
        id: 3,
        regional: "R2 Jakarta",
        values: "r2_jakarta",
    },
    {
        id: 4,
        regional: "R3 Jawa Barat",
        values: "r3_jabar",
    },{
        id: 5,
        regional: "R4 Jawa Tengah dan Yogyakarta",
        values: "r4_jateng_jogja",
    },
    {
        id: 6,
        regional: "R5 Jawa Timur, Bali, dan Nusa Tenggara",
        values: "r5_jatim_bali_nt",
    },
    {
        id: 7,
        regional: "R6 Kalimantan",
        values: "r6_kalimantan",
    },
    {
        id: 8,
        regional: "R7 Kawasan Timur Indonesia",
        values: "r7_kti",
    },
]

interface RegionalPopOutProps {
    searchRegional: string,
    isSearchOpen?: boolean
    OnBlur: () => void
    OnSelected: (e: regionalListProps) => void
}
const RegionalPopOut: React.FC<RegionalPopOutProps> = ({searchRegional,  OnBlur, OnSelected}) => {
    const popOutRef = useRef<HTMLDivElement>(null)
    function handleSelect(e: regionalListProps) {
        OnSelected(e)
        OnBlur()
    }


    const filteredRegionalList = regionalList.filter((reg) => reg.regional.toLowerCase().includes(searchRegional.toLowerCase()))
  return (createPortal(
    <>
        <div className="overflow-y-auto absolute
                text-sm font-light md:top-[70%] md:left-1/2 top-[71%]  w-[25rem] max-h-[10rem] z-[999] border rounded-md mt-3 bg-neutral-100 px-2 py-2 scrollbar-popSearch"
                tabIndex={0}
                ref={popOutRef}
                onBlur={OnBlur}    
            >
            {filteredRegionalList.map((reg) => (
                <div 
                    key={reg.id}
                    onClick={() => handleSelect(reg)}
                    className="cursor-pointer hover:bg-neutral-300 hover:text-primary-300 rounded-md p-2"
                    tabIndex={0}
                    onBlur={OnBlur}
                    >
                    {reg.regional}
                </div>
            ))}
        </div>
    </>, document.body
    
  ))
}

export default RegionalPopOut