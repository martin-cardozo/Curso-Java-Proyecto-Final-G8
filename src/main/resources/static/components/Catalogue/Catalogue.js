import React from 'react';
import './catalogue.css'
import ProductCard from './ProductCard';

const products = [
  { 
    id: 1, 
    name: "Zapato 1", 
    description: "Un zapato cómodo y versátil para cualquier ocasión", 
    price: 120.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 2, 
    name: "Sandalias 2", 
    description: "Un par de sandalias ligeras y frescas para el verano", 
    price: 45.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 3, 
    name: "Botas 3", 
    description: "Botas resistentes y duraderas para cualquier aventura", 
    price: 150.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 4, 
    name: "Zapatillas 4", 
    description: "Zapatillas cómodas y elegantes para el día a día", 
    price: 80.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 5, 
    name: "Tacones 5", 
    description: "Tacones elegantes para ocasiones formales", 
    price: 95.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 6, 
    name: "Mocasines 6", 
    description: "Mocasines clásicos y cómodos", 
    price: 110.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 7, 
    name: "Zapatos de Golf 7", 
    description: "Zapatos diseñados para estabilidad y confort en el campo de golf", 
    price: 135.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 8, 
    name: "Zapatillas de Baloncesto 8", 
    description: "Zapatillas con diseño innovador para máximo rendimiento en la cancha", 
    price: 130.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 9, 
    name: "Botas de Invierno 9", 
    description: "Botas con tecnología de aislamiento para mantener los pies calientes y secos", 
    price: 140.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 10, 
    name: "Zapatillas de Ciclismo 10", 
    description: "Zapatillas ligeras y duraderas para ciclistas exigentes", 
    price: 160.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 11, 
    name: "Zapatos de Danza 11", 
    description: "Zapatos flexibles y con soporte para cada movimiento", 
    price: 90.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 12, 
    name: "Sandalias de Senderismo 12", 
    description: "Sandalias robustas y preparadas para cualquier aventura", 
    price: 70.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 13, 
    name: "Zapatos Náuticos 13", 
    description: "Zapatos funcionales y estilosos para deportes acuáticos", 
    price: 100.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 14, 
    name: "Zapatillas de Tenis 14", 
    description: "Zapatillas con agarre y comodidad para el juego rápido", 
    price: 115.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 15, 
    name: "Botines de Fútbol 15", 
    description: "Botines para un control y precisión excepcionales en cada paso", 
    price: 125.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 16, 
    name: "Slippers de Casa 16", 
    description: "Slippers para un confort absoluto en tus días en casa", 
    price: 50.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 17, 
    name: "Calzado de Seguridad 17", 
    description: "Calzado garantizado para protección en ambientes de trabajo riesgosos", 
    price: 130.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 18, 
    name: "Zapatos Derby 18", 
    description: "Zapatos con un toque de distinción para tu vestuario profesional", 
    price: 110.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 19, 
    name: "Zapatillas de Running Minimalistas 19", 
    description: "Zapatillas minimalistas para sentir el camino con cada paso", 
    price: 105.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  },
  { 
    id: 20, 
    name: "Zapatos Veganos 20", 
    description: "Zapatos ecológicos y libres de materiales de origen animal", 
    price: 85.00,
    image: "https://via.placeholder.com/300" // Enlace a imagen genérica
  }
];



function Catalogue() {
  return (
    <div className="catalogo-container">
      <div className="catalogo">
        {products.map(product => (
          <div key={product.id} className="catalogo-item">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
