import { useState } from "react"
import InputControllers from "./InputControllers"
import { useProjectsContext } from "../hooks/useProjectContext"
import { useToggleContext } from "../hooks/useToggle"
import { useAuthContext } from "../hooks/useAuthContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


const Model = ({ updateProjectData }) => {
    const inputClass = "w-full p-2 border-r-1 focus:border-red-500 focus:border outline-none text-black rounded mt-2"
    const inputDiv = "flex justify-center w-full mt-4 flex-col"
    const buttonClass = "text-center w-[70px] mx-auto block mt-8 dark:bg-red-500 py-2 rounded dark:text-white text-black bg-white hover:bg-red-500 hover:text-white duration-300"
    const { dispatch } = useProjectsContext();
    const { dispatch_toggle } = useToggleContext();
    const [file, setFile] = useState()
    console.log(file)
    const { user } = useAuthContext()

    // form dataP

    const [formsData, setFormData] = useState({
        banner: updateProjectData ? updateProjectData.banner : '',
        title: updateProjectData ? updateProjectData.title : '',
        price: updateProjectData ? updateProjectData.price : '',
        profile: user && user.profile,
        name: user && user.name,
        userid: user && user.id
    })
    // form data handle
    const inputHandle = (e) => {
        setFormData({
            ...formsData,
            [e.target.name]: e.target.value
        })
    }



    // form submit
    const submit = async (e) => {
        e.preventDefault();

        // set condition update project or create project
        if (updateProjectData) {
            console.log(updateProjectData)
            const formData = new FormData()
            formData.append('file', file)
            axios.post(`${import.meta.env.VITE_BASE_URL}/update/banner`, formData)
                .then(res => { })
                .catch(er => console.log(er))


            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/projects/${updateProjectData._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`
                },
                body: JSON.stringify(formsData)
            })
            const json = await res.json();



            dispatch({ type: 'UPDATE_PROJECT', payload: json.project })
            dispatch_toggle({ type: 'MODEL_HIDE' })
            toast.info("Your Gig is Updated !", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            // Create a project

            const formDataTwo = new FormData()
            formDataTwo.append('file', file)
            axios.post(`${import.meta.env.VITE_BASE_URL}/upload/`, formDataTwo)
                .then(res => {
                })
                .catch(err => console.log(err))


            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`
                },
                body: JSON.stringify(formsData)
            })


            const json = await res.json();
            if (res.ok) {
                dispatch({ type: 'ADD_PROJECT', payload: json })
                setFormData({
                    title: '',
                    price: ''
                })
                dispatch_toggle({ type: 'MODEL_HIDE' })
                toast.success("Your Gig is Created !", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            if (!res.ok) {
                console.log(json.error)
                toast.info("Please Wait, image uploading....Again click create 'Button'", {
                    position: toast.POSITION.TOP_RIGHT
                })
            }

        }
    }
    return (
        <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
            <div className="dark:bg-[#112356] md:w-[40%] relative p-10 rounded-md bg-red-900 text-white">
                <div onClick={() => dispatch_toggle({ type: 'MODEL_HIDE' })} className="absolute close text-right font-extralight text-2xl cursor-pointer rounded-md p-5 right-0 top-0">X</div>
                <div>
                    <h2 className="text-2xl my-5 font-mono text-center ">Add your Post</h2>
                    <form onSubmit={submit}>
                        <div className={inputDiv}>
                            <label htmlFor="title" className="text-lg">Title</label>
                            <InputControllers type="text" placeholder="Input your Title" value={formsData.title} name="title" id="title" inputClass={inputClass} inputHandle={inputHandle} />
                        </div>
                        <div className={inputDiv}>
                            <label htmlFor="price" className="text-lg">Price</label>
                            <InputControllers type="number" placeholder="Your demanding price." value={formsData.price} name="price" id="price" inputClass={inputClass} inputHandle={inputHandle} />
                        </div>
                        <div className={inputDiv}>
                            <label htmlFor="file" className="text-lg">Banner image upload</label>

                            <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} required className="text-lg w-full bg-white text-red-500 block p-1 rounded" />

                        </div>
                        <button className={buttonClass} type="submit">{updateProjectData ? 'Update' : 'Create'}</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Model