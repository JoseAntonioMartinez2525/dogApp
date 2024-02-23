// Componente para el botón de 'seleccionar'
function BotonSeleccionar() {
  return <button className="boton-seleccionar">Agregar pedido</button>;
}

// Componente para una tarjeta de platillo
function TarjetaPlatillo({ platillo }) {
  return (
    <div>
      <img src={platillo.imagen} alt={platillo.nombre} className="platillo-imagen" />
      <h2>{platillo.nombre}</h2>
      <p>{platillo.descripcion}</p>
      <p>{platillo.precio}</p>
      <BotonSeleccionar />
    </div>
  );
}

// Componente para el grid de platillos
function GridPlatillos({ platillos }) {
  return (
    <div className="grid-platillos">
      {platillos.map(platillo => (
        <TarjetaPlatillo key={platillo.id} platillo={platillo} />
      ))}
    </div>
  );
}


export default GridPlatillos;