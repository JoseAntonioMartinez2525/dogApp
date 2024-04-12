import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

function PokemonCard({ name, brief, image }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchPokemonDetails = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonDetails(data);
        setShowModal(true);
      });
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{brief}</Card.Text>
          <Button variant="primary" onClick={fetchPokemonDetails}>
            Ver
          </Button>
        </Card.Body>
      </Card>

      {/* Modal para mostrar los detalles del Pokémon */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{pokemonDetails && pokemonDetails.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {pokemonDetails && (
            <>
              <p>Height: {pokemonDetails.height}</p>
              <p>Weight: {pokemonDetails.weight}</p>
              {/* Agrega más detalles según sea necesario */}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PokemonCard;
