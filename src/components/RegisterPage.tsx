import register_img from '../assets/images/register_desktop.png'
import noisyGradient from '../assets/images/noisyGradient.png'
import { Formik, useFormik, } from "formik"
import HeaderLogo from './HeaderLogo'
import { validate } from "../util/validation"
import { Link, useNavigate } from "react-router-dom"
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

    const Navigate = useNavigate()
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
            handleSubmit(values)
        }
    })

    function handleSubmit(e: MyFormValues) {
        Navigate('/login')
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
                        <HeaderLogo className="w-[1.6rem] md:w-full" widthHeader='w-auto md:w-[29rem] justify-center' />
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
                                                onClick={() => setShowSearch(true)}    
                                                onBlur={() => {
                                                    setTimeout(() => {
                                                        setShowSearch(false);
                                                    }, 150);
                                                    formik.handleBlur("regional")
                                                    console.log(showSearch)
                                                }}
                                                value={formik.values.regional}
                                            />
                                        </div>
                                        {showSearch && 
                                            <RegionalPopOut 
                                                searchRegional={formik.values.regional} 
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
