import { useEffect, useState } from "react";

function Fetching() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} alt={product.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Category: {product.category}</h6>
                <p className="card-text">ID: {product.id}</p>
                <h3 className="card-text">$ {product.price}</h3>
                <p className="card-text">Rating: {product.rating.rate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Fetching;