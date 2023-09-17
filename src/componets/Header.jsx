import { NavLink } from "react-router-dom"
import Button from "./Button"
import { AiOutlinePlus } from 'react-icons/ai'
import { useToggleContext } from "../hooks/useToggle"
import { useAuthContext } from "../hooks/useAuthContext"
import AOS from "aos";
import "aos/dist/aos.css";

const Header = ({ handleModel }) => {
    AOS.init();
    const { mode, dispatch_toggle } = useToggleContext();
    const { user, auth_dispatch } = useAuthContext()
    const handleToggle = () => {
        if (mode == 'dark') {
            dispatch_toggle({ type: 'LIGHT' })
        }
        if (mode == 'light') {
            dispatch_toggle({ type: 'DARK' })
        }
    }

    // state signout 
    const signOut = () => {
        auth_dispatch({ type: 'LOGOUT' })
        localStorage.removeItem('user')
    }
    return (
        //"flex items-center justify-between h-[100px] sm:flex-col"
        <header className="grid grid-rows-2 lg:flex lg:items-center lg:justify-between h-[100px] pt-7 pr-8">
            <div data-aos="flip-up" className="logo flex items-center justify-center text-3xl font-bold dark:text-white text-red-500 tracking-widest cursor-pointer">
                <NavLink to="/" className="sm:ml-0 -ml-8">Dharia</NavLink>
            </div>
            <div data-aos="flip-up" className="flex justify-between items-center">
                <Button text="dark" handleToggle={handleToggle} />
                {user && <h2 onClick={handleModel} className="cursor-pointer w-[12rem] flex bg-red-500 items-center justify-center p-1 rounded-md text-white hover:bg-red-800 duration-300 font-mono"><AiOutlinePlus /> Add post</h2>}
            </div>
            <div className="flex justify-end pt-10 lg:pt-0" data-aos="zoom-in">
                <nav className="flex sm:gap-8 gap-2">
                    {!user && <NavLink to='/login' className="font-light text-lg hover:text-red-500 duration-300">Login</NavLink>}
                    {!user && <NavLink to='/register' className="font-light text-lg hover:text-red-500 duration-300">Register</NavLink>}
                    <div className="flex items-center justify-end sm:gap-2 gap-1 flex-wrap">
                        {user && <img src={user ? `${import.meta.env.VITE_BASE_URL}/${user.profile}` : ""} className="object-cover rounded-full h-10 w-10 border-2 border-y-red-500 duration-300 hover:border-x-red-500 hover:border-y-white active:border-x-red-500 active:border-y-white"/>}
                        {user && <p>{user.email}</p>}
                    {user && <button onClick={signOut} className="text-medium bg-red-500 sm:p-3 p-2 rounded-full hover:rounded-md duration-300 text-white">SignOut</button>}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header