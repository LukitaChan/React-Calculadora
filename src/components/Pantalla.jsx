import React from "react";
import '../stylesheets/Pantalla.css'

/*Con sintaxis de desestructuracion. Asignamos como const para que no se reasigne ese valor de pantalla y que lo retorne ( => ) el valor, que es la estructura del componente*/
const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;