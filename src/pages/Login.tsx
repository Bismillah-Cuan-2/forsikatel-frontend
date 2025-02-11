import BackgroundLogin from "../components/LoginBackground"
import LoginForm from "../components/LoginForm"

const Login = () => {
    return (
      <div>
          <BackgroundLogin>
              <LoginForm />

              <div className="h-[0px] border border-neutral-200 w-full hidden sm:block"></div>

              <div className="w-full gap-4">
                <p className="text-sm">Belum punya akun? <a href="/register" className="text-primary-300 underline">Daftar Sekarang</a></p>
              </div>
          </BackgroundLogin>
      </div>
    )
  }
  
  export default Login