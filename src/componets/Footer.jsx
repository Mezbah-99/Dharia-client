import { BsGithub } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'
import { SiNetlify } from 'react-icons/si'
import AOS from "aos";
import "aos/dist/aos.css";


const Footer = () => {
  return (
    <>
      <hr className="h-[2px] dark:bg-sky-400 border-0 rounded bg-red-500" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 p-2 mt-2 pb-10 justify-center m-auto items-center ml-10 sm:ml-0">
        <div data-aos="fade-right" className=''>
          <h2 className="text-red-500 text-3xl">Dharia</h2>
          <h4 className="mt-10 dark:text-sky-400 text-red-700 hover:underline duration-300 text-lg">My social link</h4>
          <ul className="flex gap-3 py-5">
            <li className='text-4xl text-[#000] bg-white rounded-full hover:text-red-500 duration-300'>
              <a href="https://github.com/developer-mezbah"><BsGithub /></a></li>
            <li className='text-4xl text-[#087AEA] hover:text-red-500 duration-300'>
              <a href="https://www.facebook.com/mezbah.uddin.99"><CiFacebook /></a>
            </li>
            <li className='text-4xl text-[#fff] bg-[#087AEA] rounded hover:text-red-500 duration-300'>
              <a href="#"><AiOutlineLinkedin /></a>
            </li>
            <li className='text-4xl text-[#32E6E2] hover:text-red-500 duration-300'>
              <a href="https://app.netlify.com/teams/mezbah-99/overview"><SiNetlify /></a>
            </li>
          </ul>
        </div>
        <div data-aos="fade-down-right" className=''>
          <h4 className="mt-10 dark:text-sky-400 text-red-700 hover:underline duration-300 text-lg">My Experience is:-</h4>
          <ul className='ml-3 font-semibold'>
            <li className='hover:ml-3 duration-300'>HTML</li>
            <li className='hover:ml-3 duration-300'>CSS</li>
            <li className='hover:ml-3 duration-300'>JAVASCRIPT</li>
            <li className='hover:ml-3 duration-300'>REACT</li>
            <li className='hover:ml-3 duration-300'>STATE MANAGEMENT REDUX</li>
            <li className='hover:ml-3 duration-300'>NODE.JS</li>
            <li className='hover:ml-3 duration-300'>MONGODB</li>
          </ul>
        </div>
        <div data-aos="fade-down-left">
          <h4 className="mt-10 dark:text-sky-400 text-red-700 hover:underline duration-300 text-lg">My personal information:-</h4>
          <ul className='ml-3 font-semibold'>
            <li className='hover:ml-3 duration-300'>I'm Mezbah uddin</li>
            <li className='hover:ml-3 duration-300'>I'm a cse student</li>
            <li className='hover:ml-3 duration-300'>The collage name of ccn polytecnic institute</li>
            <li className='hover:ml-3 duration-300'>I am from bangladesh</li>
            <li className='hover:ml-3 duration-300'>This is my first project</li>
            <li className='hover:ml-3 duration-300'>I am a full stack web development</li>
            <li className='hover:ml-3 duration-300'>My Experience is 2 years</li>
          </ul>
        </div>
        <div data-aos="fade-left">
          <h4 className="mt-10 dark:text-sky-400 text-red-700 hover:underline duration-300 text-lg">The following equipments have been used for this project:-</h4>
            <li className='hover:ml-3 duration-300'>React</li>
            <li className='hover:ml-3 duration-300'>node</li>
            <li className='hover:ml-3 duration-300'>Mongodb</li>
            <li className='hover:ml-3 duration-300'>npm multer</li>
            <li className='hover:ml-3 duration-300'>express</li>
            <li className='hover:ml-3 duration-300'>react-router-dom</li>
        </div>
      </div>
      <hr className="h-[2px] dark:bg-sky-400 border-0 rounded bg-red-500" />
      <p className='text-center py-10 text-gray-500 hover:text-red-500 duration-300'>&copy; 2019-2023 Dharia | All Rights Reserved.</p>
    </>
  )
}

export default Footer