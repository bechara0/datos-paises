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

  return (
    <div>
      <h1>Información Países del Mundo</h1>
      <form>
        <label>Ingrese País:</label>
        <input type="text" value={paisNombre} onChange={handlePaisChange} />
      </form>
      <div>
        {filtrar.length > 10 ? (
          <p>Ingrese más criterio de búsqueda</p>
        ) : filtrar.length > 1 && filtrar.length <= 10 ? (
          <ul>
            {filtrar.map((pais) => (
              <li>
                <div>
                  <h3>Nombre: {pais.name.common}</h3>
                  <p>Capital: {pais.capital}</p>
                  <p>Región: {pais.region}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          filtrar.map((pais) => (
            <div>
              <h3>
                Nombre: <strong>{pais.name.common}</strong>
                <span>
                  <img src={pais.coatOfArms.png} width="35px" />
                </span>
              </h3>

              <p>Capital: {pais.capital}</p>
              <p>Región: {pais.region}</p>
              <p>Population: {pais.population}</p>
              <p>
                Link Google Maps:{" "}
                <a href={pais.maps.googleMaps} target="_blank">
                  {pais.name.common}
                </a>
              </p>
              <img src={pais.flags.png} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
