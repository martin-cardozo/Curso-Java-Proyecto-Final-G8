import React from 'react';
import './footer.css';
import instagram from '../../assets/icon-instagram-bk.svg';
import tiktok from '../../assets/icon-tiktok-bk.svg';
import whatsapp from '../../assets/icon-whatsapp-bk.svg';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-row">
                    <div className="footer-column">
                        <p>&copy; PISADAS 2024. Curso CAC. Grupo 8</p>
                    </div>
                    <div className="footer-column">
                        <ul className="footer-list">
                            <li className="footer-list-item"><a href="#terminos">Términos y condiciones</a></li>
                            <li className="footer-list-item"><a href="#politicadeprivacidad">Política de privacidad</a></li>
                        </ul>
                    </div>
                    <div className='footer-column social-media'>
                        <a href="#instagram">
                            <img src={instagram} alt="Instagram" className="social-icon" />
                        </a>
                        <a href="#tiktok">
                            <img src={tiktok} alt="Tiktok" className="social-icon" />
                        </a>
                        <a href="#whatsapp">
                            <img src={whatsapp} alt="Whatsapp" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
