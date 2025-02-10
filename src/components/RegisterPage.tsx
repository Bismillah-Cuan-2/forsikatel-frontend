import register_img from '../assets/images/register_desktop.png'
import { Formik, useFormik, useField, FieldConfig } from "formik"
import HeaderLogo from './HeaderLogo'
import { validate } from "../util/validation"
import { Link } from "react-router-dom"
import RegisterInput from './RegisterInput'
import searchSVG from '../assets/vectors/search.svg'
import Button from './Button'
import { useState } from "react"
import RegionalPopOut from './RegionalPopOut'
interface MyFormValues {
    namaLengkap: string,
    nomorHandphone: string,
    regional: string,

}


const initialValues: MyFormValues = { namaLengkap: '', nomorHandphone: '',  regional: '' };
export const RegisterPage = () => {
    const [showSearch, setShowSearch] = useState(false);
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })

  return (
    <>
        <div className='relative px-1 py-5 md:p-[2.4rem] flex lg:flex-row sm:flex-col w-full h-screen'>
            <div className='hidden lg:inline relative z-10 w-full'>
                <img className='hidden lg:block object-contain w-[50rem] h-full' src={register_img} alt="register_desktop" />
            </div>
            <section className='relative flex flex-col px-2 2xl:w-full lg:py-[6rem] 2xl:py-[2rem] lg:pr-[5rem] 2xl:px-[6rem] lg:left-[-2rem] gap-5'>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-center'>
                        <HeaderLogo className="w-[2rem]" widthHeader='w-auto md:w-[29rem]' />
                    </div>
                    
                    <div>
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
                            validate={validate}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2))
                                    setSubmitting(false)
                                }, 400)
                            }}
                            >
                            <form onSubmit={formik.handleSubmit} className="w-full">
                                <div className="flex flex-col gap-5 mb-4">
                                    <RegisterInput 
                                        id="namaLengkap" 
                                        label="Nama Lengkap" 
                                        type="text" 
                                        placeholder='Masukkan nama sesuai identitas'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.namaLengkap}    
                                    />
                                    {/* {formik.touched.username && formik.errors.username ? 
                                    <p className="text-red-500">{formik.errors.username}</p> : null} */}

                                    <RegisterInput 
                                        id="nomorHandphone" 
                                        label="Nomor Handphone" 
                                        type="number" 
                                        placeholder='Gunakan nomor yang aktif'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.nomorHandphone}    
                                    />
                                    {/* { formik.touched.password && formik.errors.password ? 
                                    <p className="text-red-500">{formik.errors.password}</p> : null} */}

                                    <div>
                                        <img src={searchSVG} alt="searchLogo" className='absolute mt-9 ml-2'/>
                                        <div className="w-full flex flex-col gap-2">
                                            <label className="text-sm font-normal font-source text-neutral-900" htmlFor="regional">Regional</label>
                                            <input 
                                                className="text-sm pr-2 pl-10 h-10 bg-neutral-100 font-source border-b-neutral-900 border-b-2" 
                                                id="regional" 
                                                type="text" 
                                                placeholder='Pilih kantor regionalmu'
                                                onChange={(value) => {
                                                    setShowSearch(true);
                                                    formik.handleChange("regional")(value);}}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.regional}
                                            />
                                        </div>
                                        {showSearch && 
                                            <RegionalPopOut 
                                                searchRegional={formik.values.regional} 
                                                isSearchOpen={showSearch} 
                                                OnBlur={() => setShowSearch(false)} 
                                                OnSelected={(e) => formik.setFieldValue("regional", e.regional)} 
                                            /> 
                                        }
                                    </div>
                                    <div className="w-full flex justify-center">
                                            <Button 
                                                className="justify-center px-3 py-2 rounded-none font-bold text-base font-source"
                                                color='bg-primary-300  text-white w-full hover:bg-primary-200 '
                                                type="submit"
                                            >
                                                Daftar Sekarang
                                            </Button>
                                    </div>

                                    <hr className="h-px my-8 border-0 bg-[#DDE1E6] " />
                                    <p className="text-neutal-900 text-sm font-normal font-source mb-[5rem]">Sudah punya akun?  
                                        <Link to="/login" className="text-primary-300 hover:text-primary-100 font-normal underline"> Masuk di sini</Link>
                                    </p>
                                </div>
                                
                            </form>
                        </Formik>
                    </div>
                </div>
            </section>
        </div>

    </>
  )
}
