import { createPortal } from "react-dom"
import { useEffect, useRef } from "react"

const regionalList = [
    {
        id: 1,
        regional: "Head Office",
    }, 
    {
        id: 2,
        regional: "Sumatera",
    },
    {
        id: 3,
        regional: "Jakarta",
    },
    {
        id: 4,
        regional: "Jawa Barat",
    },{
        id: 5,
        regional: "Jawa Tengah dan Yogyakarta",
    },
    {
        id: 6,
        regional: "Jawa Timur, Bali, dan Nusa Tenggara",
    },
    {
        id: 7,
        regional: "Kalimantan",
    },
    {
        id: 8,
        regional: "Kawasan Timur Indonesia",
    },
]

interface RegionalPopOutProps {
    searchRegional: string,
    isSearchOpen: boolean
    OnBlur: () => void
    OnSelected: (e:{regional: string}) => void
}
const RegionalPopOut: React.FC<RegionalPopOutProps> = ({searchRegional, isSearchOpen, OnBlur, OnSelected}) => {
    const popOutRef = useRef<HTMLDivElement>(null)
    function handleSelect(e: string) {
        OnSelected({regional: e})
        OnBlur()
    }

    // useEffect(() => {
    //     if (isSearchOpen) {
    //         popOutRef.current?.focus()
    //     }
    // }, [isSearchOpen])

    const filteredRegionalList = regionalList.filter((reg) => reg.regional.toLowerCase().includes(searchRegional.toLowerCase()))
  return (createPortal(
    <>
        <div className="overflow-y-auto absolute
                text-sm font-light top-2/3 left-1/2 w-[25rem] max-h-[10rem] z-[999] border rounded-md mt-3 bg-neutral-100 px-2 py-2 scrollbar-popSearch"
                tabIndex={0}
                ref={popOutRef}
                onBlur={OnBlur}    
            >
                    
            {filteredRegionalList.map((reg) => (
                <div 
                    key={reg.id}
                    onClick={() => handleSelect(reg.regional)}
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