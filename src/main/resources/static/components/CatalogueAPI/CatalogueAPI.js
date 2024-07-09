import React, { useEffect, useState } from "react"
import "../Catalogue/catalogue.css"
import ProductCard from "../Catalogue/ProductCard"

function CatalogueAPI() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="catalogo-container">
      <div className="catalogo">
        {products.map((product) => (
          <div key={product.id} className="catalogo-item">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CatalogueAPI
