import SetorNgajiLayout from "../components/SetorNgajiLayout"
import SetorNgajiHeader from "../components/SetorNgajiHeader"
import SetorNgajiInput from "../components/SetorNgajiInput"
import SetorNgajiRecord from "../components/SetorNgajiRecord"
import SetorMengajiChart from "../components/SetorMengajiChart"
import SetorNgajiTable from "../components/SetorNgajiTable"

const SetorNgaji = () => {
    return (
      <SetorNgajiLayout>
        <SetorNgajiHeader />
        <SetorNgajiInput />
        <SetorNgajiRecord />
        <SetorMengajiChart />
        <SetorNgajiTable />
      </SetorNgajiLayout>
    )
  }
  
  export default SetorNgaji