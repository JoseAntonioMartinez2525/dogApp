var express = require('express');
var router = express.Router();

  //bd
let usersDb = [
  { nombre: "Luna", age: 3, breed: "Labrador Retriever", adopted: true },
  { nombre: "Max", age: 2, breed: "Golden Retriever", adopted: false },
  { nombre: "Bella", age: 4, breed: "German Shepherd", adopted: false },
  { nombre: "Fido", age: 1, breed: "Pomeranian", adopted: false },
];


// POST para agregar un nuevo usuario (en este caso, un perro)
router.post('/', function(req, res, next) {
  let newDog = req.body;
  usersDb.push(newDog);
  res.status(201).json(newDog);
});

// PUT para actualizar la información de un perro
router.put('/:id', function(req, res, next) {
  let id = req.params.id;
  let updatedDog = req.body;
  usersDb[id] = updatedDog;
  res.json(updatedDog);
});

// DELETE para eliminar un perro de la lista
router.delete('/:id', function(req, res, next) {
  let id = req.params.id;
  let deletedDog = usersDb.splice(id, 1);
  res.json(deletedDog);
});

// GET para obtener todos los perros
router.get('/', function(req, res, next) {
  res.json(usersDb);
});

// GET para obtener un perro específico por su ID
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  if (id < 0 || id >= usersDb.length) {
    res.status(404).json({ error: "Perro no encontrado" });
  } else {
    res.json(usersDb[id]);
  }
});

module.exports = router;
