import "./../../styles/anguibell.css";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import img from "../../img/registro.jpg";

const Registro = () => {

  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [position, setPosition] = useState('');
  const navigate = useNavigate();
  const [oculto, setOculto] = useState('visually-hidden');

  useEffect(() => {
    if (store.token) {
      navigate("/");
    }
  }, [store.token]);

  const handlePositionChange = (value) => {
    setPosition(value);
    setUser ({ ...user, type_user: value }); // Actualiza el type_user en el estado
  };

  return (
    <>
      <div className="d-flex">
        <div className="lado-izquierdo ">
          <h1><strong>Hello,</strong></h1>
          <p>welcome to the registration page. Please fill out the form on the side to get more complete features. Please click login below if you already have an account!</p>
          <button className="d-flex justify-content-start m-0"><Link to="/login" className="text-decoration-none text-white "> Login </Link></button>
        </div>
        <div className="lado-derecho">
          <h2 className="text-center pt-3 text-decoration-underline text-black mb-5"><strong>SIGN UP</strong></h2>
          <form>
            <div className="d-flex justify-content-between row">
              <div className="mb-3 col-6">
                <label class="form-label text-black"><strong>First name</strong></label>
                <input type="text" aria-label="First name" placeholder="First name" class="form-control" required onChange={(event) => setUser({
                  ...user,
                  first_name: event.target.value
                })} />
              </div>
              <div className="mb-3 col-6">
                <label class="form-label text-black"><strong>Last name</strong></label>
                <input type="text" aria-label="Last name" placeholder="Last name" class="form-control" required onChange={(event) => setUser({
                  ...user,
                  last_name: event.target.value
                })} />
              </div>
            </div>
            <div className="mb-3 ">
              <label for="exampleInputEmail1" class="form-label text-black"><strong>Email address</strong></label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com" aria-describedby="emailHelp" required onChange={(event) => setUser({
                ...user,
                email: event.target.value
              })} />
              <div className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <label className="form-label text-black"><strong>Elige tu posición:</strong></label>
              <div className="d-flex gap-3">
                <div className="form-check d-flex align-items-center">
                  <input
                      type="radio"
                      className="form-check-input small-radio"
                      id="guest"
                      name="position"
                      value="guest"
                      checked={position === 'guest'}
                      onChange={() => handlePositionChange('guest')}
                    />
                  <label className="form-check-label" htmlFor="guest">Guest</label>
                </div>
                <div className="form-check d-flex align-items-center">
                  <input
                      type="radio"
                      className="form-check-input small-radio"
                      id="host"
                      name="position"
                      value="host"
                      checked={position === 'host'}
                      onChange={() => handlePositionChange('host')}
                    />
                  <label className="form-check-label" htmlFor="host">Host</label>
                </div>
              </div>
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label text-black"><strong>Password</strong></label>
              <div className="d-flex align-items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control shadow"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                  onChange={(event) => setUser ({ ...user, password: event.target.value })} // Actualiza el estado de user.password
                />
                <span
                  className="input-group-text"
                  id="mostrar"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🔒" : "👀"}
                </span>
              </div>
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword2" className="form-label text-black"><strong>Confirm Password</strong></label>
              <div className="d-flex align-items-center">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control shadow"
                  id="exampleInputPassword2"
                  placeholder="Confirm Password"
                  required
                  onChange={(event) => setConfirmPassword(event.target.value)} // Actualiza el estado de confirmPassword
                />
                <span
                  className="input-group-text"
                  id="mostrar"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "🔒" : "👀"}
                </span>
              </div>
              {/* {user.password !== confirmPassword && (
                <div className="text-danger">Las contraseñas no coinciden</div>
              )} */}
              <div className={`text-danger ${oculto}`}>Las contraseñas no coinciden</div>
            </div>
            <button type="submit" className="registro w-100 mt-2"
              onClick={async (event) => {
                event.preventDefault(); // Evita el comportamiento por defecto del formulario
                if (user.password === confirmPassword) {
                  try {
                    await actions.registro(user.email, user.password, user.first_name, user.last_name, user.type_user);
                    // Redirigir o mostrar un mensaje de éxito si el registro es exitoso
                    navigate("/"); // O la ruta que desees
                  } catch (error) {
                    // Manejo de errores
                    alert(error.message || 'Ocurrió un error al registrarse. Inténtalo de nuevo.'); // Muestra el mensaje de error
                  }
                } else {
                  setOculto('')
                }
              }}
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registro;