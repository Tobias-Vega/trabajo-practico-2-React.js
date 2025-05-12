import { useEffect, useState } from "react";
import './HomePage.css';


export const HomePage = () => {

  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');
  const [nombreValido, setNombreValido] = useState(false);
  const [mensaje, setMensaje] = useState('');


  const validarUsuario = async () => {

    setMensaje('');
    setError('');

    try {
      const response = await fetch(`http://localhost:3000/validar/${nombre.toLowerCase()}`);
      const data = await  response.json();
  
      if (!response.ok) {
        setError(data.error);
        setNombreValido(false);
        return;
      }
      setNombreValido(true);
    } catch (error) {
      setError('Error de conexión');
    }
  }

  useEffect(() => {
    const obtenerSaludo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/saludar/${nombre}`);
        const data = await response.json();
        setMensaje(data.message);
      } catch (error) {
        setError('Error de conexión');
      }
    }

    if (nombreValido) {
      obtenerSaludo();
    }

  }, [nombreValido]);

  useEffect(() => {
    setNombreValido(false)
  }, [nombre]);

  return (
    <div className="input">
      <label htmlFor="input-text">Ingrese un nombre</label>
      <input type="text" id="input-text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      <button onClick={validarUsuario}>Enviar</button>
      {error && <p className="error">{error}</p>}
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  )
}