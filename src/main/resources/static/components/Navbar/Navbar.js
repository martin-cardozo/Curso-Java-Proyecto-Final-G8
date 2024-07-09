import React from 'react';
import './navbar.css'
import { useNavigate } from 'react-router-dom';
import logo_light from '../../assets/navbar/pisadas-logo-black.ico'
import logo_dark from '../../assets/navbar/pisadas-logo-white.ico'
import search_icon_light from '../../assets/navbar/search-w.png'
import search_icon_dark from '../../assets/navbar/search-b.png'
import toogle_light from '../../assets/navbar/night.png'
import toggle_dark from '../../assets/navbar/day.png'
import login_icon from '../../assets/navbar/login.png'

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <img className="nav-link logo" onClick={() => navigate('/')} src={logo_light} alt="Logo de la tienda" />
            
            <ul>
                <li className="nav-item active">
                    <a className="nav-link" onClick={() => navigate('/')}>HOME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/catalogue')}>CATALOGO</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/catalogueAPI')}>CATALOGO API</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/faq')}>PREGUNTAS FRECUENTES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/contact')}>CONTACTO</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/admin')}>ADMIN</a>
                </li>
            </ul>

            <div className='search-box'>
                <input type="text" placeholder="Buscar..." />
                <img src={search_icon_light} alt='' />
            </div>

            {/* <img src={toogle_light} alt='' className='toggle-mode-icon' /> */}

            <img src={login_icon} alt='' className="login-icon" onClick={() => navigate('/login')} />
                  
                
        </div>
    );
}

export default Navbar;
