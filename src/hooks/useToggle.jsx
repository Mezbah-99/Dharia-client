import { useContext } from "react";
import { ToggleContext } from "../contexts/ToggleContext";

export const useToggleContext = () => {
    const context = useContext(ToggleContext)
    if(!context){
        throw new Error(
            "You must call useAuthContext inside a AuthContextProvider"
        )
    }
    return context;
}