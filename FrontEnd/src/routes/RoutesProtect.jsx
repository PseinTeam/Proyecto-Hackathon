import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

export const ProtectRoutes = ({ requiredRole, loggedInRedirect }) => {
  const { state, user } = useContext(AuthContext);

  if (loggedInRedirect && state.logged) {
    // Si el usuario ya está autenticado y trata de acceder a /login, redirigir a la página de inicio
    return <Navigate to="/" />;
  }

  if (!state.logged && !loggedInRedirect) {
    // Si el usuario no está autenticado y trata de acceder a una ruta protegida, redirigir al inicio de sesión
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.rol.nombre !== requiredRole) {
    // Si no tiene el rol adecuado, redirigir a una página de acceso denegado o inicio
    return <Navigate to="/access-denied" />;
  }

  return <Outlet />;
};
