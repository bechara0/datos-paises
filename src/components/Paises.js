import React, { useEffect, useState } from "react";
import axios from "axios";

export const Paises = () => {
  const [paises, setPaises] = useState([]);
  const [paisNombre, setPaisNombre] = useState("");
  useEffect(() => {
    console.log("Effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("Datos recibidos");
      setPaises(response.data);
    });
  }, []);
  const handlePaisChange = (e) => {
    setPaisNombre(e.target.value);
  };

  const filtrar = paises.filter((pais) => {
    return pais.name.common.toLowerCase().startsWith(paisNombre.toLowerCase());
  });
  console.log("resultado: ", filtrar);

  const condiciones = () => {
    if (filtrar.length > 10) {
      <p>Ingrese más criterio de búsqueda</p>;
    } else if (filtrar.length > 1 && filtrar.length <= 10) {
      filtrar.map((pais) => (
        <div>
          <p>Nombre: {pais.name.common}</p>
          <p>Capital: {pais.capital}</p>
          <p>Región: {pais.region}</p>
        </div>
      ));
    } else if ((filtrar.length = 1)) {
      filtrar.map((pais) => (
        <div>
          <p>Nombre: {pais.name.common}</p>
          <p>Capital: {pais.capital}</p>
          <p>Región: {pais.region}</p>
          <p>Population: {pais.population}</p>
          <p>Spoken Lenguajes</p>
          <ul>
            <li>{pais.lenguages}</li>
          </ul>
        </div>
      ));
    }
  };

  return (
    <div>
      <h1>Información Países del Mundo</h1>
      <form>
        <label>Ingrese País:</label>
        <input type="text" value={paisNombre} onChange={handlePaisChange} />
      </form>
      {condiciones}
    </div>
  );
};
