import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider.jsx"
import { useNavigate } from "react-router-dom"

export const CerrarSesion = () => {
    const {logout, user} = useContext(AuthContext)
    const navigate = useNavigate()
    const cerrarSesion = () => {
        console.log('Cerrando sesión')
        logout()
        navigate('/')
        localStorage.removeItem('token')
    }
  return (
    <div className="col-md-3 text-end">
        <a style={{cursor: 'pointer'}} onClick={cerrarSesion}>
            <button type="button" className="btn btn-primary">
                Cerrar Sesión
            </button>
        </a>
        {user?.rol?.nombre === "Admin" && (
        <a href="/Register" className="RegisterBtn">
            <button type="button" className="btn btn-primary">
                Registro
            </button>
        </a>
        )}
    </div>
  )
}
