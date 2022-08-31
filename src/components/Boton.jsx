import React from 'react';
import '../stylesheets/Boton.css';

/* Todo lo que este dentro de {props.children} se consiera*/
//Las comillas invertidas nos indican Template Literales (plantillas literales) que pueden contener codigo JS para definir cierto resultado.
//la className=boton-contenedor, el valor retornado por la funcion esOperador es true, sera operador, de lo contrario (false) sera nulo.
//La funcion esOperador tomara un parametro (valor) y retornara true o false.
//metoro .trim() permite eliminar espacios del inicio y final de una string. 

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  
  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;