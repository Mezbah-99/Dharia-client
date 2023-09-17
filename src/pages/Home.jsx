import { useEffect, useState } from "react";
import Footer from "../componets/Footer"
import Header from "../componets/Header"
import Products from "./Products";
import Model from "../componets/Model";
import { useToggleContext } from "../hooks/useToggle";


const Home = () => {
  const [updateProjectData, setUpdateProjectData] = useState(null)
  const {model,dispatch_toggle} = useToggleContext()
  //console.log(mode)
  const handleModel = () => {
    dispatch_toggle({type: 'MODEL_SHOW'})
    setUpdateProjectData(null)
  }

  const handleUpdate = (project) => {
    dispatch_toggle({type: 'MODEL_SHOW'})
    setUpdateProjectData(project)
  }
  return (
    <>
      <div className={model ? "opacity-10" : ''}>
        <Header handleModel={handleModel}/>
        <Products handleUpdate={handleUpdate}/>

        <Footer />
      </div>
        {
          model && <Model updateProjectData={updateProjectData}/>
        }
    </>
  )
}

export default Home