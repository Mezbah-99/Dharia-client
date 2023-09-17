import { createContext, useReducer } from "react";


export const ToggleContext = createContext("dark");

const initialState = {
    mode: ['dark'],
    model: false,
    unAuthorized: null
}
const reducer = (state, action) => {
    switch (action.type) {
        case "DARK": {
            return {
                ...state,
                mode: 'dark'
            }
        }
        case "LIGHT": {
            return {
                ...state,
                mode: 'light'
            }
        }
        case 'MODEL_SHOW': {
            return {
                ...state,
                model: true
            }
        }
        case 'MODEL_HIDE': {
            return {
                ...state,
                model: false
            }
        }
        case 'UN_AUTHORIZE': {
            return {
                ...state,
                unAuthorized: action.payload
            }
        }
        case 'UN_AUTHORIZE_CLEAR': {
            return {
                ...state,
                unAuthorized: null
            }
        }
        default:
            return state
    }
}




export const ToggleContextProvider = ({ children }) => {
    const [state_toggle, dispatch_toggle] = useReducer(reducer, initialState);
    return (
        <ToggleContext.Provider value={{ ...state_toggle, dispatch_toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}