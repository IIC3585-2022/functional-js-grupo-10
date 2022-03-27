const prompt = require("prompt-sync")()

//1) INICIALIZAR EL JUEGO --> array de jugadores (no solo con dos)
function init_game(...args) {
  console.log(`Juego inicializado con los jugadores ${args}\n`)
  const array_nombre = [...args[0]];
  const array_puntaje = array_nombre.map((element) => {
    return [element, 501];
  });
  return array_puntaje;
}

//1) OUTPUT [ [ 'Jaime', 150 ], [ 'Emma', 150 ] ]

const ingresar_jugada = (jugador, puntaje, lanzamientos, game) => {
  const bulls = {'DB': 50, 'SB':25}
  const nuevo_puntaje = puntaje - lanzamientos.reduce((prev, curr) => {
    if (bulls[curr]) return prev+bulls[curr]
    
    const [mult, puntaje] = curr.split(',').map(elem => + elem)
    return prev+(mult * puntaje)
  },0 )
  game[jugador][1] = nuevo_puntaje < 0 ? 0: nuevo_puntaje
}
const check_finish = (jugador, game) => {
  return game[jugador][1] === 0
}

const format_lanzamientos = (lanzamientos) => {
  return lanzamientos.split(', ').map(elem => elem.replace(/[^a-zA-Z0-9, ]/g, ''));
}
// función de diálogo
const play_turn = (game, turn, finish) => {
  if (finish) return;
  const input = prompt(`Ingrese los lanzamientos de ${game[turn][0]}:`)
  const lanzamientos = format_lanzamientos(input)
  ingresar_jugada(turn, game[turn][1], lanzamientos, game);
  console.log(`${game[turn][0]} queda con ${game[turn][1]} puntos`)
  finish = check_finish(turn, game)
  console.log(finish ? `Felicidades ${game[turn][0]}`: '')

  if (turn == (game.length - 1)){
    turn = 0
  } else {
    turn = turn + 1
  }
  play_turn(game, turn, finish)
}

const play_game = (...args) => {
  // variables de estado
  let game;
  let turn = 0
  let finish = false;
  game = init_game(args);
  play_turn(game, turn, finish)
}

play_game('Jaime', 'Ema', "Doc")






