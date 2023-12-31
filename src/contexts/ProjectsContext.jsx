import { createContext, useReducer } from "react";


export const ProjectContext = createContext();

const initialState = {
    projects: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ALL_PROJECT": {
            return {
                ...state,
                projects: action.payload
            }
        }
        case "DELETE_PROJECT":{
            return{
                ...state,
                projects: state.projects.filter((project)=> project._id !== action.payload)
            }
        }
        case "ADD_PROJECT":{
            return{
                projects: [action.payload, ...state.projects]
            }
        }
        case "UPDATE_PROJECT":{
            return{
                ...state,
                projects: [
                    action.payload,
                    ...state.projects.filter(project => project._id !== action.payload._id)
                ]
            }
        }
        default:
            return state
    }
}




export const ProjectContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //console.log(state)
    return (
        <ProjectContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ProjectContext.Provider>
    )
}