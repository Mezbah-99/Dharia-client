import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectsContext";



export const useProjectsContext = () => {
    const context = useContext(ProjectContext)
    if(!context){
        throw new Error(
            "You must call useAuthContext inside a AuthContextProvider"
        )
    }
    return context;
}