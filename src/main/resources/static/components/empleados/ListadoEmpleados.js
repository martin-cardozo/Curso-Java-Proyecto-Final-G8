import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom'
import './empleados.css';

export default function ListadoEmpleados() {

    const navigate = useNavigate();

    const urlBase = "http://localhost:8080/rh-app/empleados";

    const[empleados, setEmpleados] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBase);
        console.log("Resultado cargar empleados");
        console.log(resultado.data);
        setEmpleados(resultado.data);
    }

    const eliminarEmpleado = async(id) => {
    await axios.delete (`${urlBase}/${id}`);
    cargarEmpleados();

    }

  return (
    <div className="container">
        <div className="container text-center" style={{margin: "30px"}}>
            <h3>Listado de Empleados</h3>
        </div>

        <table className="table table-striped table-hover align-middle">
        <thead className='table-dark'>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Empleado</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {
            //Iteramos el arreglo de empleados
            empleados.map((empleado, indice) => (
                <tr key={indice}>
                <th scope="row">{empleado.idEmpleado}</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.departamento}</td>
                <td><NumericFormat value={empleado.sueldo}
                    displayType={'text'}
                    thousandSeparator=',' prefix={'$'}
                    decimalScale={2} fixedDecimalScale/>
                </td>
                <td className='text-center'>
                    <div>
                        <a className="btn btn-warning btn-sm me-3" onClick={() => navigate(`/admin/editar/${empleado.idEmpleado}`)}>Editar</a>
                        <button onClick={()=> eliminarEmpleado(empleado.idEmpleado)} 
                        className='btn btn-danger btn-sm'>Eliminar</button>

                    </div>

                </td>
            </tr>
            ))
            }
        </tbody>
        </table>

    </div>
  )
}
