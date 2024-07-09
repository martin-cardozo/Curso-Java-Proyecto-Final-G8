import React from 'react';
import './signup.css'; 

function SignUp() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title text-center mb-4">Registro de Usuario</h1>
                    <form id="registroForm" action="#" method="POST">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" id="apellido" name="apellido" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico:</label>
                            <input type="email" id="email" name="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="direccion">Dirección:</label>
                            <input type="text" id="direccion" name="direccion" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono:</label>
                            <input type="text" id="telefono" name="telefono" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" name="password" className="form-control" required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
