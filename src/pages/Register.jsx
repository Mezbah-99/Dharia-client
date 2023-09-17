
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'
import { SiNamecheap } from 'react-icons/si'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
import InputControllers from '../componets/InputControllers'
import BtnLR from '../componets/BtnLR'
import { useState } from 'react'
import ErrorMessage from '../componets/ErrorMessage'
import { useSignup } from '../hooks/useSignup'
import { useAuthContext } from '../hooks/useAuthContext'
import { useToggleContext } from '../hooks/useToggle'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
  const [file, setFile] = useState()
  const [profileError, setProfileError] = useState()
  const { dispatch_toggle } = useToggleContext()
  const { user } = useAuthContext()
  const inputClass = "w-full p-3 border-r-3 focus:border-red-500 outline-none text-black"
  const [inputData, setInputData] = useState({
    name: '',
    email: "",
    password: ""
  })

  const { signup, error, loading } = useSignup();
  const inputHandle = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
  }
  const formControl = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('file', file)
    axios.post(`${import.meta.env.VITE_BASE_URL}/upload/profile`, formData)
      .then(res => { })
      .catch(er => {
        console.log(er)
        setProfileError(er.response.request.status)
      })

    await signup(inputData.name, inputData.profile, inputData.email, inputData.password);
    dispatch_toggle({ type: "UN_AUTHORIZE_CLEAR" })
    if (profileError) {
      toast.info("Please choose your profile image....", {
        position: toast.POSITION.TOP_RIGHT
      })
    }

  }


  return (
    <div>
      <ToastContainer />
      <Header />

      <div data-aos="zoom-out" className="form sm:w-[500px] mx-auto text-center sm:px-0 px-5 w-full h-[70vh]">
        <h2 className="text-2xl my-5 font-mono">Insert your account information</h2>
        <form onSubmit={formControl}>
          <div className="flex justify-between items-center border border-red-500 w-full mt-5">
            <label htmlFor="name"><SiNamecheap className="p-3 text-5xl border-r-2 border-red-500" /></label>
            <InputControllers
              type="text"
              placeholder="Input your name"
              value={inputData.name}
              name="name"
              id="name"
              inputClass={inputClass}
              inputHandle={inputHandle} />
          </div>
          <div className="flex justify-between items-center border border-red-500 w-full mt-5">
            <label htmlFor="email"><AiOutlineMail className="p-3 text-5xl border-r-2 border-red-500" /></label>
            <InputControllers
              type="email"
              placeholder="Input your Email"
              value={inputData.email}
              name="email"
              id="email"
              inputClass={inputClass}
              inputHandle={inputHandle} />
          </div>
          <div className="flex justify-between items-center border border-red-500 w-full mt-5">
            <label htmlFor="password"><RiLockPasswordFill className="p-3 text-5xl border-r-2 border-red-500" /></label>
            <InputControllers
              type="password"
              placeholder="Input your password"
              value={inputData.password}
              name="password"
              id="password"
              inputClass={inputClass}
              inputHandle={inputHandle} />
          </div>
          <div className="flex justify-between items-center border border-red-500 w-full mt-5">
            <label htmlFor="profile"><CgProfile className="p-3 text-5xl border-r-2 border-red-500" /></label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} className='text-lg w-full bg-white text-red-500 block '/>
          </div>

          <BtnLR BtnName={loading ? "Registering..." : "Register"} submit="submit" />
        </form>

        {error && <ErrorMessage errorMessage={error} />}

      </div>

      <Footer />
    </div>
  )
}

export default Register