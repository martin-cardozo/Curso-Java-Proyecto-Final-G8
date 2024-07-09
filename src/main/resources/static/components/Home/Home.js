import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import './home.css'

function Main() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className='bienvenida'>
                <h1>¡Bienvenido a <span class="blue-letter">P</span><span class="pink-letter">I</span><span class="blue-letter">S</span><span class="pink-letter">A</span><span class="blue-letter">D</span><span class="pink-letter">A</span><span class="blue-letter">S</span>! Tu tienda ideal para encontrar los mejores calzados en Argentina.</h1>
                <p>Descubre nuestro catálogo completo de calzados haciendo clic <a onClick={() => navigate('/catalogue')}>acá</a> y encontrá el par que se adapte a tu estilo!</p>
            </div>
            <Carousel />
        </div>
    );
}

export default Main;
