import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formError, setFormError] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;

        if (!email) {
            setEmailError('El correo electrónico es obligatorio.');
            valid = false;
        } else if (!validateEmail(email)) {
            setEmailError('El correo electrónico no es válido.');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('La contraseña es obligatoria.');
            valid = false;
        } else if (!validatePassword(password)) {
            setPasswordError('La contraseña debe tener al menos 8 caracteres.');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            setFormError('');
            // lógica para manejar el inicio de sesión, ej: enviar los datos al servidor
            // Si la autenticación es exitosa, navega a la home
            navigate('/'); // Ejemplo de navegación a otra sección
        } else {
            setFormError('Por favor, corrige los errores antes de continuar.');
        }
    };

    return (
        <div className="container">
            <div className="card-body">
                <h2 className="card-title">Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Ingresa tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => {
                                if (!validateEmail(email)) {
                                    setEmailError('El correo electrónico no es válido.');
                                } else {
                                    setEmailError('');
                                }
                            }} 
                        />
                        {emailError && <p className="mensajeError">{emailError}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Ingresa tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={() => {
                                if (!validatePassword(password)) {
                                    setPasswordError('La contraseña debe tener al menos 8 caracteres.');
                                } else {
                                    setPasswordError('');
                                }
                            }} 
                        />
                        {passwordError && <p className="mensajeError">{passwordError}</p>}
                    </div>
                    {formError && <p className="mensajeError">{formError}</p>}
                    <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                </form>
                <a className="enlace-registro" onClick={() => navigate('/signup')}>¿No tenés una cuenta? Regístrate acá.</a>
            </div>
        </div>
    );
}

export default Login;
