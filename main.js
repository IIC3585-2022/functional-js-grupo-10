const prompt = require("prompt-sync")()
const _ = require('lodash');

//INICIALIZAR EL JUEGO --> array de jugadores (usarmos args para que funcione con +2 jugadores)
function init_game(...args) {
  console.log(`Juego inicializado con los jugadores ${args}\n`)
  const array_nombre = [...args[0]];
  // Puntajes iniciales
  const array_puntaje = array_nombre.map((element) => {
    return [element, 501];
  });
  return array_puntaje;
}

// Funcion que calcula puntajes despues de ingresar una jugada válida
const ingresar_jugada = (game, jugador, lanzamientos) => {
  const puntaje = game[jugador][1]
  const bulls =['SB', 'DB']
  const nuevo_puntaje = puntaje - lanzamientos.reduce((prev, curr) => {
    const match = elem => elem === curr
    const index = bulls.findIndex(match)
    if (index >=0) return prev + (bulls.findIndex(match)+1)*25
    const [mult, puntaje] = curr.split(',').map(elem => + elem)
    return prev + (mult * puntaje)
  },0 )
  game[jugador][1] = nuevo_puntaje < 0 ? nuevo_puntaje*-(1): nuevo_puntaje
  
} //OUTPUT: Actualiza el puntaje del jugador
 
const check_finish = (jugador, game) => {
  return game[jugador][1] === 0
} // OUTPUT : bool

// Funcion que formatea el string de jugada ingresado por el usuario
const format_lanzamientos = (lanzamientos) => {
  return lanzamientos.split(', ').map(elem => elem.replace(/[^a-zA-Z0-9, ]/g, ''));
} // OUTPUT: Lanzamientos en forma de array

// Funcion que maneja flujo de turnos
const play_turn = (game, turn, finish) => {
  if (finish) return;
  const input = prompt(`Ingrese los lanzamientos de ${game[turn][0]}:`)
  const lanzamientos = format_lanzamientos(input)
  const ingresar_jugada_curry = _.curry(ingresar_jugada)(game)
  ingresar_jugada_curry(turn, lanzamientos);
  console.log(`${game[turn][0]} queda con ${game[turn][1]} puntos`)
  finish = check_finish(turn, game)
  console.log(finish ? `Felicidades ${game[turn][0]}`: '')

  turn = (turn + 1) % game.length
  play_turn(game, turn, finish)
}

const play_game = (...args) => {
  // Variables de estado del juego
  let game;
  let turn = 0
  let finish = false;
  game = init_game(args);
  const play_turn_curry = _.curry(play_turn)(game)
  play_turn_curry(turn, finish)

}

play_game('Jaime', 'Ema', "Doc")






