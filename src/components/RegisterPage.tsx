import register_img from '../assets/images/register_desktop.png'
import noisyGradient from '../assets/images/noisyGradient.png'
import { Formik, Form,  ErrorMessage, Field} from "formik"
import HeaderLogo from './HeaderLogo'
import { Link, useNavigate } from "react-router-dom"
import RegisterInput from './AuthInput'
import searchSVG from '../assets/svg/search.svg'
import Button from './Button'
import { useState } from "react"
import RegionalPopOut from './RegionalPopOut'
import useFetch from '../hooks/useFetch'
import { API_REGISTER } from '../constants/URL_API'
import validationSchema from '../schemas/RegisterValidationSchema'

interface RegisterValues {
    fullName: string,
    phoneNumber: string,
    regional?: string,
    regionalValue: string,

}

interface LoginResponse {
    access_token: string;
    msg: string;
    refresh_token: string;
  }



export const RegisterPage = () => {
    const [showSearch, setShowSearch] = useState(false);
    const { data, error, loading, fetchData } = useFetch<LoginResponse>(API_REGISTER, "POST");
    const initialValues = { fullName: "", phoneNumber: "",  regional: "", regionalValue: "" };
    const Navigate = useNavigate()

    async function handleSubmit(e: RegisterValues) {
        await fetchData({ name_husband: e.fullName, phone_number: e.phoneNumber, regional: e.regionalValue });
        if (data) {
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("refresh_token", data.refresh_token);
            Navigate("/login");
        }

        if (error) {
            alert(error);
          }
        console.log(e)
    }

  return (
    <>
         {/* Background gradient mobile */} 
        <div className={`md:hidden fixed z-[-10] top-0 left-0`}>
            <img className='object-cover w-full h-full' draggable={false} src={noisyGradient} alt="noisyGradient" />
        </div>

        {/* Background white for mobile */}
        <div className='mt-[4.5rem] rounded-tl-[6rem] md:hidden fixed left-0 top-0 w-full h-screen bg-white'> </div>
        <div className='mt-[7rem] md:mt-0 relative px-3 py-1 md:py-8 md:px-[2.4rem] flex lg:flex-row flex-col overflow-y-hidden md:overflow-hidden items-center w-full h-screen'>
            {/* RegisterImage */}
            <div className='hidden lg:block relative z-10 w-full'>
                <img draggable={false} className='hidden  lg:block object-contain md:w-full 2xl:w-[35rem] h-full' src={register_img} alt="register_desktop" />
            </div>
            {/* Form Section */}
            <section className='relative flex flex-col px-2 2xl:w-full lg:py-[6rem] 2xl:pt-[10rem] lg:pr-[5rem] 2xl:px-[6rem] lg:left-[-2rem] gap-5'>
                <div className='flex flex-col  gap-3'>
                    <div className='flex justify-center'>
                    <HeaderLogo imgSize="w-12 h-8"/>
                    </div>          
                    <div className='mt-[1rem]'>
                        <h2 className='text-[2.5rem] font-bold text-primary-300'>Mulai Perjalanan Mengajimu!</h2>
                        <p className='text-base font-normal font-source text-neutral-900'>
                            Daftar sekarang dan pantau progres mengaji dengan mudah
                        </p>
                    </div>
                </div>
                <div className='mt-5'>
                    <div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                            >
                        {({ isSubmitting, values, setFieldValue }) => (
                            <Form className="w-full">
                                <div className="flex flex-col gap-5 mb-4">
                                    <RegisterInput 
                                        id="fullName" 
                                        label="Nama Lengkap" 
                                        type="text" 
                                        placeholder='Masukkan nama sesuai identitas (Nama Istri - Nama Suami)'
                                        value={values.fullName}   
                                    />
                                    <RegisterInput 
                                        id="phoneNumber" 
                                        label="Nomor Handphone" 
                                        type="text" 
                                        placeholder='Gunakan nomor yang aktif'
                                        value={values.phoneNumber} 
                                    />
                                    <div>
                                        <img src={searchSVG} alt="searchLogo" className='absolute mt-9 ml-2'/>
                                        <div className="w-full flex flex-col gap-2">
                                            <label className="text-sm font-normal font-source text-neutral-900" htmlFor="regional">Regional</label>
                                            <Field 
                                                className="text-sm pr-2 pl-10 h-10 bg-neutral-100 font-source border-b-neutral-900 border-b-2" 
                                                id="regional" 
                                                type="text" 
                                                placeholder='Pilih kantor regionalmu'
                                                // onChange={(e: ChangeEvent<HTMLInputElement>) => {setShowSearch(true), setFieldValue("regional", e.target.value)}}
                                                onClick={() => setShowSearch(true)}    
                                                value={values.regional}
                                            />
                                            <ErrorMessage name="regional" component="div" className="text-sm text-primary-300" />
                                        </div>
                                        {showSearch && 
                                            <RegionalPopOut 
                                                searchRegional={values.regional} 
                                                OnBlur={() => setShowSearch(false)} 
                                                OnSelected={(e) => {setFieldValue("regional", e.regional), setFieldValue("regionalValue", e.values)}} 
                                            /> 
                                        }
                                    </div>
                                    <div className="w-full flex justify-center">
                                            <Button 
                                                className="justify-center px-3 py-2 rounded-none font-bold text-base font-source"
                                                color='bg-primary-300  text-white w-full hover:bg-primary-200 '
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                {loading ? "Loading..." : "Daftar Sekarang"}
                                            </Button>
                                    </div>

                                    <hr className="h-px my-8 border-0 bg-[#DDE1E6] " />
                                    <p className="text-neutal-900 text-sm font-normal font-source mb-[5rem]">Sudah punya akun?  
                                        <Link to="/login" className="text-primary-300 hover:text-primary-100 font-normal underline"> Masuk di sini</Link>
                                    </p>
                                </div>
                                
                            </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </section>
        </div>
        
    </>
  )
}
