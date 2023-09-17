import { useState } from "react"
import { useAuthContext } from "./useAuthContext"


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const {auth_dispatch} = useAuthContext()

    const signup = async (name, profile, email, password) => {
        setLoading(true)
        setError(null)

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, profile, email, password})
        })
        const json = await res.json();
         if(!res.ok){
            setLoading(false)
            setError(json.error)
         }

         if(res.ok){
            localStorage.setItem('user', JSON.stringify(json))
            auth_dispatch({type: 'LOGIN', payload: json})
            setLoading(false)
         }

    }
    return {
       signup, error, loading
    }
}