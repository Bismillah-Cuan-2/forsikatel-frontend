import { Link } from "react-router-dom"
import RightArrow from "../assets/svg/right-arrow.svg"
interface HadistHariIniDashBoardProps {
    isMobile?: boolean
    isDesktop?: boolean
}

const HadistHariIniDashBoard: React.FC<HadistHariIniDashBoardProps> = ({isMobile, isDesktop}) => {
  return (
    <>
        {isDesktop && (
            <div className="flex flex-col gap-5 py-[3.5rem] px-[1.8rem] w-full">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold">Hadits</h3>
                        <h4 className="text-xl font-source">Hari ini</h4>
                    </div>
                    <Link to="/haditskultum" className="flex items-center px-5 h-[3rem] rounded-full box-shadow">
                        <img src={RightArrow} alt="right_arrow_icon" className="object-cover"/>
                    </Link>
                </div>
                <p className="text-sm font-source text-justify">Hadist Desktop</p>
            </div>
        )}

        {isMobile && (
            <div className="flex flex-col gap-5 py-[1rem] px-[1rem] w-full">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold">Hadits</h3>
                        <h4 className="text-xl font-source">Hari ini</h4>
                    </div>
                    <Link to="/haditskultum" className="flex items-center px-3 h-[2rem] rounded-full box-shadow">
                        <img src={RightArrow} alt="right_arrow_icon" className="object-cover"/>
                    </Link>
                </div>
            </div>
        )}
        
    
    </>
  )
}

export default HadistHariIniDashBoard