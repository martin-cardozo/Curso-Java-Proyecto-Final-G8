import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

export default function Navegacion() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1 className="navbar-brand" href="/">
        Sistema de Recursos Humanos
      </h1>

      <ul>
        <li className="nav-item active">
          <a className="nav-link" onClick={() => navigate("/")}>
            Home
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" onClick={() => navigate("/admin/agregar")}>
            Agregar Empleados
          </a>
        </li>
      </ul>
    </div>
  )
}
