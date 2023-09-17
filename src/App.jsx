import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useToggleContext } from "./hooks/useToggle"
import { useAuthContext } from "./hooks/useAuthContext"



function App() {
  const { mode } = useToggleContext()
  const { user } = useAuthContext()
  return (
    <>
      <div className={mode == 'dark' ? 'dark' : ''}>



        <div className="dark:bg-slate-900 bg-white dark:text-white text-black min-h-screen overflow-hidden">
          <div className="container mx-auto">
            <Routes>
              
            <Route path="/" element={ user ? <Home /> : <Login/>}/>
            { user ? "" : <Route path="/login" element={<Login />} />}
            { user ? "" : <Route path="/register" element={<Register />} />}
            <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

