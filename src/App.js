{/*import LogoTitulo from './components/LogoTitulo';
import GridPlatillos from './components/GridPlatillos';
import './App.css';

function App() {
const platillos = [
  { id: 1, nombre: 'Nuggets de Pollo Cajún', descripcion: 'Nuestros exclusivos nuggets de pollo con soya, empanizados en panko con condimento cajún y romero y fritos. Servido con nuestro aderezo vidalia ahumado con nogal americano.', precio: '$100', imagen: '/img/food/CreoleSoulChicken.png' },
  { id: 2, nombre: 'Rollitos De Col Verde', descripcion: 'Tres rollitos fritos rellenos de col salteada y jamón de soja. Servido con salsa de chile dulce.', precio: '$80', imagen: '/img/food/CollardGreenRolls.png' },
  { id: 3, nombre: 'Dumplings del Dragón', descripcion: 'Tres bolas de arroz fritas rellenas de proteína de soja rallada, zanahoria y repollo. Servido sobre una mezcla de verduras verdes y aderezo de jengibre, lima y soja.', precio: '$100', imagen: '/img/food/DragonflyDumplings.png' },
  { id: 4, nombre: 'Pollo Gyro', descripcion: 'Pollo asado con soya, hierbas y limón, cubierto con lechuga, tomates cortados en cubitos, cebolla morada, pepino y salsa tahini vegana sobre pan pita. Servido con papas fritas o ensalada.', precio: '$200', imagen: '/img/food/ChickenGyro.png' },
  { id: 5, nombre: 'Ensalada De Pollo Con Hierbas Y Limón A La Parrilla', descripcion: 'Pollo asado con soya, hierbas y limón, servido sobre una cama de arugula, tomates cherry, zanahorias ralladas, pepinos y champiñones. Servido con aderezo de tu elección.', precio: '$200', imagen: '/img/food/GrilledLemonHerbChickenSalad.png' },
  { id: 6, nombre: 'Carne Cítrica', descripcion: 'Carne de res con soja y cítricos salteada con brócoli, pimientos rojos y amarillos, calabacines y calabaza amarilla. Servido con arroz integral o blanco.', precio: '$280', imagen: '/img/food/CitrusBeef.png' },
  { id: 7, nombre: 'Chuletas con Soja estilo Mariposa', descripcion: 'Chuletas de cerdo con soya ligeramente empanizadas y cubiertas con manzanas asadas y pasas. Servido con col salteada con jamón de soya y puré de papa con ajo y salsa.', precio: '$240', imagen: '/img/food/ButterflySoyChops.png' },
  { id: 8, nombre: 'Curry de carne tailandés', descripcion: 'Carne de res de soja desmenuzada cocida a fuego lento con patatas, zanahorias y judías verdes cocidas a fuego lento. Servido con arroz blanco o integral. Todo esto en una cama de Curry dulce de leche de coco.', precio: '$250', imagen: '/img/food/ThaiBeefCurry.png' },
];

  return (
    <div className="App">
      <header className="App-header">
        <LogoTitulo></LogoTitulo>
      </header>
      <GridPlatillos platillos={platillos} />
    </div>
  );
}
*/}

import { useEffect, useState } from "react";
import { Container, InputGroup, Form, Button, Row, Col } from "react-bootstrap";
import PokemonCard from "./Components/PokemonCard";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      });
  }, []);

  // Función para filtrar los Pokémon por nombre
  const filterPokemon = (pokemon) => {
    return pokemon.name.toLowerCase().includes(searchText.toLowerCase());
  };

  // Función para dividir la lista de Pokémon en filas y columnas
  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Buscar Pokémon"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="outline-secondary">Buscar</Button>
        </InputGroup>

        {chunkArray(pokemonList.filter(filterPokemon), 3).map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((pokemon, index) => (
              <Col key={index} md={4}>
                <PokemonCard
                  name={pokemon.name}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.url.split("/")[6]}.png`}
                />
              </Col>
            ))}
          </Row>
        ))}

      </Container>
    </div>
  );
}


export default App;
