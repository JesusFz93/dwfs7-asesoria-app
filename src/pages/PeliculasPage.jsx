import React, { useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const formularioInicial = {
  nombre: "",
  descripcion: "",
  precio: 0,
};

const PeliculasPage = () => {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState(formularioInicial);

  const obtenerPeliculas = async () => {
    const resp = await getDocs(collection(db, "peliculas"));
    const data = resp.docs.map((pelicula) => ({
      id: pelicula.id,
      ...pelicula.data(),
    }));

    setMovies(data);
  };

  const crearPelicula = async () => {
    const coleccionPeliculas = collection(db, "peliculas");
    await addDoc(coleccionPeliculas, form);
    await obtenerPeliculas();
  };

  const actualizarPelicula = async (idPelicula) => {
    const documento = doc(db, "peliculas", idPelicula);
    await updateDoc(documento, form);
    await obtenerPeliculas();
  };

  const eliminarPelicula = async (idPelicula) => {
    const documento = doc(db, "peliculas", idPelicula);
    await deleteDoc(documento);
    await obtenerPeliculas();
  };

  return (
    <>
      <header>
        <h1>Peliculas</h1>
      </header>
      <main>
        <article>
          <form>
            <div className="mb-3">
              <label htmlFor="nombrePelicula" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombrePelicula"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcionPelicula" className="form-label">
                Descripcion
              </label>
              <input
                type="text"
                className="form-control"
                id="descripcionPelicula"
                value={form.descripcion}
                onChange={(e) =>
                  setForm({ ...form, descripcion: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="precioPelicula" className="form-label">
                Precio
              </label>
              <input
                type="text"
                className="form-control"
                id="precioPelicula"
                value={form.precio}
                onChange={(e) => setForm({ ...form, precio: e.target.value })}
              />
            </div>
          </form>
        </article>
      </main>
      <section>
        <article>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary"
              onClick={obtenerPeliculas}
            >
              Obtener peliculas
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={crearPelicula}
            >
              Crear pelicula
            </button>
          </div>
        </article>
      </section>
      <section>
        <article>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie.id}>
                  <th scope="row">{movie.id}</th>
                  <td>{movie.nombre}</td>
                  <td>{movie.descripcion}</td>
                  <td>{movie.precio}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => actualizarPelicula(movie.id)}
                    >
                      Actualizar pelicula
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => eliminarPelicula(movie.id)}
                    >
                      Eliminar pelicula
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
};

export default PeliculasPage;
