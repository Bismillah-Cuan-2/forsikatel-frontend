import LoginInput from "./LoginInput"
import Button from "./Button"
import { Formik, Form } from "formik";
import validationSchema from "../schemas/LoginValidationSchema";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { API_LOGIN  } from "../constant/URL_API";

interface LoginValues {
  fullName: string;
  phoneNumber: string;
}

interface LoginResponse {
  access_token: string;
  msg: string;
  refresh_token: string;
}

const LoginForm = () => {
  const { data, error, loading, fetchData } = useFetch<LoginResponse>(API_LOGIN, "POST");

  const Navigate = useNavigate()
  const initialValues = {
    fullName: "",
    phoneNumber: "",
  }

  const handleSubmit = async (values: LoginValues) => {
    await fetchData({ name_husband: values.fullName, phone_number: values.phoneNumber });
    if (data) { 
      console.log(data, error)
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      Navigate("/");
    }

    if (error) {
      alert(error);
    }
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
              { loading ? "Loading..." : "Masuk" }
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm