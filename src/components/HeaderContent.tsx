import HeaderLogo from "./HeaderLogo"

const HeaderContent = () => {
  return (
    <div className="flex items-center w-full justify-between">
        <span className="text-sm font-normal text-neutral-300">
            Copyright ©2025 All Rights Reserved | Forsikatel Group Telkom Akses - KTI
        </span>
        <HeaderLogo className="w-[10rem]" />
    </div>
  )
}

export default HeaderContent