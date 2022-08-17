import { useState } from "react";
import { getProducts } from "../apis/productsApi";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const obtenerProductos = async () => {
    const resp = await getProducts();
    console.log(resp.data.data);
    setProducts(resp.data.data);
  };

  return (
    <>
      <header className="row col">
        <h1>Products Page</h1>
      </header>
      <main className="row">
        <article className="col">
          <p>Lista de productos</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={obtenerProductos}
          >
            Obtener productos
          </button>
        </article>
      </main>
      <section className="row">
        <article className="col">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => {
              return (
                <div className="col" key={product.id}>
                  <div className="card h-100">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">{product.price}</small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <ul>
            {products.map((product) => {
              return ()
            })}
          </ul> */}
        </article>
      </section>
    </>
  );
};

export default ProductsPage;
