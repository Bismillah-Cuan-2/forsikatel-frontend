import Button from "./Button"
import uploadIcon from "../assets/svg/upload-icon.svg"

const SetorNgajiInput = () => {
  return (
    <div className="flex shadow-sm rounded-lg w-full h-12 overflow-auto">
        <input 
            className="py-2 px-4 font-source w-full focus-visible:outline-none" 
            type="text" 
            placeholder="Input Jumlah Juz"
        />
        <Button 
            className="p-2 text-primary-300 w-full justify-center font-semibold gap-2 hover:bg-primary-300 hover:text-neutral-50" 
            Icon={uploadIcon}
            color="bg-neutral-100"
        >
            Kirim Setoran
        </Button>
    </div>
  )
}

export default SetorNgajiInput