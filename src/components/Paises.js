import React, { useEffect, useState } from "react";
import axios from "axios";

export const Paises = () => {
  const [paises, setPaises] = useState([]);
  useEffect(() => {
    console.log("Effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("Datos recibidos");
      setPaises(response.data);
    });
  }, []);
  console.log(paises);

  return <div>Paises</div>;
};
