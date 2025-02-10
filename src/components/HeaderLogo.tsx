import logoAkhlak from "../assets/images/logo_akhlak.png";
import logoBumn from "../assets/images/logo_bumn.png";
import logoForsikatel from "../assets/images/logo_forsikatel.png";
import logoTelkomAkses from "../assets/images/logo_telkom_akses.png";
import logoTelkom from "../assets/images/logo_telkom.png";

const HeaderLogo = () => {
  return (
    <header className="flex gap-5 w-[29rem]">
        <img className="object-contain" src={logoAkhlak} alt="logo akhlak" />
        <img className="object-contain" src={logoBumn} alt="logo bumn" />
        <img className="object-contain" src={logoForsikatel} alt="logo forsikatel" />
        <img className="object-contain" src={logoTelkom} alt="logo telkom" />
        <img className="object-contain" src={logoTelkomAkses} alt="logo telkom akses" />
    </header>
  )
}

export default HeaderLogo