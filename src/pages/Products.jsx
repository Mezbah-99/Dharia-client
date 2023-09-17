import { useEffect } from "react"
import { useProjectsContext } from "../hooks/useProjectContext"
import { useToggleContext } from "../hooks/useToggle";
import { useAuthContext } from '../hooks/useAuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = ({ handleUpdate }) => {
    const { projects, dispatch } = useProjectsContext();
    const { unAuthorized, dispatch_toggle } = useToggleContext()
    const { user } = useAuthContext()
    // get all projects
    useEffect(() => {
        const getAllProjects = async () => {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/projects`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            const json = await res.json();
            if (res.ok) {
                dispatch({ type: 'ADD_ALL_PROJECT', payload: json })
            }
            if (!res.ok) {
                dispatch_toggle({ type: "UN_AUTHORIZE", payload: json.error })
            }
        }
        getAllProjects();
    }, [])

    const handleDelete = async (id) => {

        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/projects/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        const json = await res.json();
        console.log(json.message)
        if (res.ok) {
            const id = json.project._id;
            dispatch({ type: 'DELETE_PROJECT', payload: id })

            toast.info("This project is Deleted !", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
    const showToastMessage = () => {
        toast.error("It's not Your post !", {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
        <>
            {
                unAuthorized && <h1 className="h-[70vh] w-full justify-center flex items-center text-2xl">{unAuthorized}</h1>

            }
            <h1 className="text-4xl text-red-500 md:-mb-4 md:mt-4 ml-8 mt-8 font-mono">All posts</h1>
            <div className="products grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:p-3 m-5 overflow-hidden sm:mt-5 -mt-6 p-8">
                {
                    projects && projects.map((product, index) => {//check if the number is even
                        
                        return (
                            <div data-aos="flip-left" className="rounded-md shadow-lg shadow-slate-700 flex flex-col justify-center items-center mb-3 border border-red-500" key={product._id}>
                                <div className="img overflow-hidden w-full">
                                    <img src={product.banner && `${import.meta.env.VITE_BASE_URL}/${product.banner}`} alt="" className="sm:w-[400px] sm:h-[200px] p-4 object-cover w-full" />
                                </div>
                                <div className="profile-content flex items-start w-full px-4 py-1">
                                    <div className="profile">
                                        <img src={`${import.meta.env.VITE_BASE_URL}/${product.profile}`} alt="" className="w-[60px] h-[60px] rounded-full border" />
                                    </div>
                                    <div className="username mt-4 ml-2">
                                        <span className="text-xl hover:underline">{product.name}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="title">
                                        <h4 className="whitespace-normal tracking-wide font-medium text-lg px-4 py-1">{product.title} </h4>
                                    </div>
                                    <hr className="h-[1px] bg-red-500 border-none" />
                                    <div className="price px-4 py-3 text-right flex justify-between items-center">
                                        <div className="flex justify-between items-center gap-6 mr-2">
                                            { // condition of authorize Update
                                                user.id === product.userid ?
                                                    <button onClick={() => handleUpdate(product)} className="text-white bg-red-500 py-1 px-2 rounded hover:bg-red-900 duration-300">Update</button>
                                                    :
                                                    <button onClick={showToastMessage} className="text-white bg-red-500 py-1 px-2 rounded hover:bg-red-900 duration-300">Update</button>
                                            }
                                            { // condition of authorize delete
                                                user.id === product.userid ?
                                                    <button onClick={() => handleDelete(product._id)} className="text-white bg-red-500 py-1 px-2 rounded hover:bg-red-900 duration-300">Delete</button>
                                                    :
                                                    <button onClick={showToastMessage} className="text-white bg-red-500 py-1 px-2 rounded hover:bg-red-900 duration-300">Delete</button>

                                            }

                                        </div>
                                        <span>STARTING AT:- <span className="text-lg">${product.price}</span></span>
                                    </div>
                                </div>
                            </div>
                            
                        )

                    })
                }


                <ToastContainer />
            </div>
        </>
    )
}

export default Products