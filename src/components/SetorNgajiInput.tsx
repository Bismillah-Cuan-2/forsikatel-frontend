import Button from "./Button"
import uploadIcon from "../assets/svg/upload-icon.svg"
import useFetch from "../hooks/useFetch"
import { API_SETOR_NGAJI } from "../constant/URL_API"
import { Formik, Form, Field, ErrorMessage } from "formik"
import validationSchema from "../schemas/SetorNgajiValidationSchema"

interface SetorNgajiInputValue {
  juz: number | string
}

interface SetorNgajiResponse {
  msg: string
}

const SetorNgajiInput = () => {
  const { data, error, loading, fetchData } = useFetch<SetorNgajiResponse>(
    API_SETOR_NGAJI, 
    "POST", 
    {Authorization: `Bearer ${localStorage.getItem("access_token")}`});

  const handleSubmit = async (values: SetorNgajiInputValue) => {
    await fetchData({ juz_read: values.juz });
    if (data) {
      console.log(data, error)
    }

    if (error) {
      alert(error)
    }
  }

  return (
      <Formik
        initialValues={{ juz: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-2 w-full rounded-lg h-12 font-source">
            <Field 
              className="px-4 font-source w-full bg-white focus-visible:outline-primary-300 rounded-l-lg"
              id="juz"
              name="juz"
              placeholder="Input Jumlah Juz"
            />
            <Button 
              className="p-2 text-primary-300 lg:text-xs xl:text-sm w-full justify-center font-semibold gap-2 hover:bg-primary-300 hover:text-neutral-50 rounded-r-lg" 
              Icon={loading ? "" : uploadIcon}
              color="bg-neutral-100"
              type="submit"
              disabled={isSubmitting}
            >
              { loading ? "Loading..." : "Kirim Setoran" }
            </Button>
            <ErrorMessage name="juz" component="div" className="text-sm text-primary-300 px-3 pt-1" />
          </Form> 
        )}
      </Formik>
  )
}

export default SetorNgajiInput