const prompt = require("prompt-sync")()

const bulls = {'DB': 50, 'SB':25}
//1) INICIALIZAR EL JUEGO --> array de jugadores (no solo con dos)
function init_game(name1, name2) {
  console.log(`Juego inicializado con los jugadores ${name1} y ${name2}\n`)
  const array_nombre = [name1, name2];
  const array_puntaje = array_nombre.map((element) => {
    return [element, 501];
  });
  return array_puntaje;
}

// variables de estado
let game;
let turn = 0
let lanzamientos;
let finish;
//1) OUTPUT [ [ 'Jaime', 150 ], [ 'Emma', 150 ] ]

// const a = init_game('Jaime', 'Emma');
// a.forEach(element => console.log(element));

//2) Una función que reciba el nombre del jugador, 
//su puntaje y sus lanzamientos y devuelva el 
//nuevo score del jugador

//jugador es un numero  en este caso 
const ingresar_jugada = (jugador, puntaje, lanzamientos) => {
  const nuevo_puntaje = puntaje - lanzamientos.reduce((prev, curr) => {
    if (bulls[curr]) return prev+bulls[curr]
    const [mult, puntaje] = curr.split(',').map(elem => +elem)
    return prev+(mult*puntaje)
  },0 )
  game[jugador][1] = nuevo_puntaje < 0 ? 0: nuevo_puntaje
}
const check_finish = (jugador) => {
  return game[jugador][1] === 0
}

const format_lanzamientos = (lanzamientos) => {
  return lanzamientos.split(', ').map(elem => elem.replace(/[^a-zA-Z0-9, ]/g, ''));
}
// función de diálogo
const play_game = (jugador1, jugador2) => {
  game = init_game(jugador1, jugador2);
  turn = 0
  while (!finish) {
    const input = prompt(`Ingrese los lanzamientos de ${game[turn][0]}:`)
    lanzamientos = format_lanzamientos(input)
    ingresar_jugada(turn, game[turn][1], lanzamientos);
    console.log(`${game[turn][0]} queda con ${game[turn][1]} puntos`)
    finish = check_finish(turn)
    console.log(finish ? `Felicidades ${game[turn][0]}`: '')
    turn = (turn +1)%2
  }
}

play_game('Jaime', 'Ema')






