import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="wrapper">
      <h1>Preguntas Frecuentes</h1>

      {/* Pregunta 1 */}
      <div className="faq">
        <button
          className={`accordion ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleAccordionClick(0)}
          aria-expanded={activeIndex === 0 ? 'true' : 'false'}
        >
          Pregunta 1
          <i className={`fa-solid fa-chevron-${activeIndex === 0 ? 'up' : 'down'}`}></i>
        </button>
        <div className={`pannel ${activeIndex === 0 ? 'active' : ''}`}>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.
          </p>
        </div>
      </div>

      {/* Pregunta 2 */}
      <div className="faq">
        <button
          className={`accordion ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleAccordionClick(1)}
          aria-expanded={activeIndex === 1 ? 'true' : 'false'}
        >
          Pregunta 2
          <i className={`fa-solid fa-chevron-${activeIndex === 1 ? 'up' : 'down'}`}></i>
        </button>
        <div className={`pannel ${activeIndex === 1 ? 'active' : ''}`}>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.
          </p>
        </div>
      </div>

      {/* Pregunta 3 */}
      <div className="faq">
        <button
          className={`accordion ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleAccordionClick(2)}
          aria-expanded={activeIndex === 2 ? 'true' : 'false'}
        >
          Pregunta 3
          <i className={`fa-solid fa-chevron-${activeIndex === 2 ? 'up' : 'down'}`}></i>
        </button>
        <div className={`pannel ${activeIndex === 2 ? 'active' : ''}`}>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.
          </p>
        </div>
      </div>

      {/* Pregunta 4 */}
      <div className="faq">
        <button
          className={`accordion ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => handleAccordionClick(3)}
          aria-expanded={activeIndex === 3 ? 'true' : 'false'}
        >
          Pregunta 4
          <i className={`fa-solid fa-chevron-${activeIndex === 3 ? 'up' : 'down'}`}></i>
        </button>
        <div className={`pannel ${activeIndex === 3 ? 'active' : ''}`}>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
