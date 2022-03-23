
//1) INICIALIZAR EL JUEGO --> array de jugadores (no solo con dos)
function init_game(name1, name2) {
  const array_nombre = [name1, name2];
  const array_puntaje = array_nombre.map(function(element) {
    return [element, 150];
  });
  return array_puntaje;
}
console.log(init_game('Jaime', 'Emma'));
//1) OUTPUT [ [ 'Jaime', 150 ], [ 'Emma', 150 ] ]

// const a = init_game('Jaime', 'Emma');
// a.forEach(element => console.log(element));

//2) Una función que reciba el nombre del jugador, 
//su puntaje y sus lanzamientos y devuelva el 
//nuevo score del jugador









