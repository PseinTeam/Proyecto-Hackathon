import {useState, useContext} from "react";
import {AuthContext} from "../context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/pages/Login.css";

export const Login = () => {
  const [user, setUser] = useState({
    full_name: "",
    password: "",
    puesto_trabajo: "",
  })

  const {login} = useContext(AuthContext);

  const navigate = useNavigate();



  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.full_name === "" || user.password === "") {
      return;
    }
    try{
      const response = await fetch('http://127.0.0.1:8000/Usuarios/login',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
    
      if (!response.ok){
        console.log('Error al iniciar sesion');
        return;
      }
    
      if (response.status == 200){
        const data = await response.json();
        console.log('Data del loguin',data);
        login(data);
        localStorage.setItem('token', data);
        setTimeout(()=>{
          navigate('/');
        })
      }
    }catch(error){
      console.log(error);
    }
  };



  return (
    <div
      className=" d-flex align-items-center py-4 bg-body-tertiary"
      style={{ height: "100vh" }}
    >
      <main
        className=" LoginC form-signin w-100 m-auto"
        style={{ maxWidth: "330px" }}
      >
        <form onSubmit={handleSubmit} onChange={handleChange} >
          <h1 className="h3 mb-3 fw-normal text-center">Bienvenido</h1>

          <div className="input-groupRE form-floating mb-1">
            <select
              id="puesto-select"
              name="puesto_trabajo"
              className="inputRE"
            >
              <option className="Options" value="">
                Seleccione un puesto
              </option>
              <option className="Options" value="Electricidad">
                Electricidad
              </option>
              <option className="Options" value="Construccion">
                Construccion
              </option>
              <option className="Options" value="Quimica">
                Quimica
              </option>
              <option className="Options" value="Agropecuaria">
                Agropecuaria
              </option>
              <option className="Options" value="Administrador">
                Administrador
              </option>
              <option className="Options" value="Area de seguridad">
                Area de seguridad
              </option>
            </select>
          </div>

          <div className="form-floating mb-1">
            <input
              type="text"
              name="full_name"
              className="form-control"
              id="floatingInput"
              placeholder="Usuario"
            />
            <label htmlFor="floatingInput">Usuario</label>
          </div>

          <div className="form-floating mb-1">
            <input
              type="password"
              name="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Recordarme
            </label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Ingresar
          </button>
          <div className="text-center mt-2">
            <a href="/">Volver al inicio</a>
          </div>
        </form>
      </main>
    </div>
  );
};
