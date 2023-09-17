import { useState } from "react"
import BtnLR from "../componets/BtnLR"
import Footer from "../componets/Footer"
import Header from "../componets/Header"
import InputControllers from "../componets/InputControllers"
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'
import ErrorMessage from "../componets/ErrorMessage"
import { useLogin } from "../hooks/useLogin"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useToggleContext } from "../hooks/useToggle"

const Login = () => {
  const inputClass = "w-full p-3 border-r-3 focus:border-red-500 outline-none text-black"

  const {dispatch_toggle} = useToggleContext()

  // hooks
  const {login, error, loading} = useLogin();

  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  })
  // error message state

  const inputHandle = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
  }
  const formControl = async (e) => {
    e.preventDefault();
    await login(inputData.email, inputData.password)
    toast.success("You have loged In", {
        position: toast.POSITION.BOTTOM_LEFT
    });
    dispatch_toggle({type: "UN_AUTHORIZE_CLEAR"})
  }

  return (
    <div>
      <ToastContainer/>
      <Header />

      <div data-aos="zoom-out" className="form sm:w-[500px] mx-auto text-center w-full sm:px-0 px-5 h-[70vh]">
        <h2 className="text-2xl my-5 font-mono">Insert your Login information</h2>
        <form onSubmit={formControl}>
          <div className="flex justify-between items-center border border-red-500 w-full mt-5">
            <label htmlFor="email"><AiOutlineMail className="p-3 text-5xl border-r-2 border-red-500" /></label>
            <InputControllers
              type="email"
              placeholder="Input your Email"
              value={inputData.email}
              name="email"
              id="email"
              inputClass={inputClass}
              inputHandle={inputHandle}
            />
          </div>
          <div className="flex justify-between items-center border border-red-500 w-full mt-5">
            <label htmlFor="password"><RiLockPasswordFill className="p-3 text-5xl border-r-2 border-red-500" /></label>
            <InputControllers
              type="password"
              placeholder="Input your Password"
              value={inputData.password}
              name="password"
              id="password"
              inputClass={inputClass}
              inputHandle={inputHandle}
            />
          </div>
          <BtnLR BtnName={loading ? "Logging..." : "Login"} submit="submit"/>
        </form>

        {error && <ErrorMessage errorMessage={error}/>}

      </div>

      <Footer />
    </div>

  )
}

export default Login