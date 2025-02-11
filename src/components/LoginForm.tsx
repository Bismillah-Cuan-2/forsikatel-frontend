import LoginInput from "./LoginInput"
import Button from "./Button"
import { Formik, Form } from "formik";
import validationSchema from "../schemas/LoginValidationSchema";

interface LoginValues {
  fullName: string;
  phoneNumber: string;
}

const LoginForm = () => {
  const initialValues = {
    fullName: "",
    phoneNumber: "",
  }

  const handleSubmit = (values: LoginValues) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-8">
            <div className="flex flex-col w-full gap-8">
              <LoginInput label="Nama Lengkap" id="fullName" name="fullName" placeholder="Masukkan Nama Lengkap Anda"/>
              <LoginInput label="Nomor Handphone" id="phoneNumber" name="phoneNumber" placeholder="Masukkan Nomor Handphone Anda"/>
            </div>
            <Button type="submit" className="justify-center px-3 py-2 rounded-none font-bold text-base font-source" color="bg-primary-300  text-white w-full hover:bg-primary-200" disabled={isSubmitting}>
              { isSubmitting ? "Loading..." : "Masuk" }
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm