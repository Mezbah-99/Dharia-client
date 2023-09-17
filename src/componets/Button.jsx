import {CiDark, CiLight} from 'react-icons/ci';
import { useToggleContext } from '../hooks/useToggle';

const Button = ({ text, handleToggle }) => {
    const {mode} = useToggleContext();
    return (
        <>
            <button onClick={handleToggle} className="py-2 px-8 rounded w-full dark:text-white text-2xl text-black">
            {
                mode == 'dark' ? <CiLight/> : <CiDark className='text-black shadow-inner'/>
            }
            </button>
        </>
    )
}

export default Button