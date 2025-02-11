import logoAkhlak from "../assets/images/logo_akhlak.png";
import logoBumn from "../assets/images/logo_bumn.png";
import logoForsikatel from "../assets/images/logo_forsikatel.png";
import logoTelkomAkses from "../assets/images/logo_telkom_akses.png";
import logoTelkom from "../assets/images/logo_telkom.png";

interface HeaderLogoProps {
  className? : string
  widthHeader?: string
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({className, widthHeader = "w-[29rem]"}) => {
  return (
    <header className={`flex gap-5 ${widthHeader}`}>
        <img className={`object-contain ${className}`} src={logoBumn} alt="logo bumn" />
        <img className={`object-contain ${className}`} src={logoAkhlak} alt="logo akhlak" /> 
        <img className={`object-contain ${className}`} src={logoForsikatel} alt="logo forsikatel" />
        <img className={`object-contain ${className}`} src={logoTelkom} alt="logo telkom" />
        <img className={`object-contain ${className}`} src={logoTelkomAkses} alt="logo telkom akses" />
    </header>
  )
}

export default HeaderLogo