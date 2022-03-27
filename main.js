const prompt = require("prompt-sync")();
//1) INICIALIZAR EL JUEGO --> array de jugadores (no solo con dos)
let game_array = []
let counter = 0  

function init_game(...args) {

  args.forEach(function (element){
    game_array.push([element, 501]);
  });
  play_game(game_array[0])

  console.log (game_array);


};

function ingresar_jugada(...args) {
  console.log(`args: ${args}`)
  console.log(`args 0: ${args[0]}`)
  console.log(`args 1: ${args[1]}`)
  console.log(`args 1: ${args[2]}`)

  game_array.forEach(function (player_array){
    if (player_array[0] == args[0]){
      let a = [args[2]]
      console.log(args[2][1])
      a.forEach(function (element){
        // args[2] = ['DB', [3,20], [3,19]]
          if (element=='DB') {
            args[1] -= 50
          } else if (element=='SB'){
            args[1] -= 25
          } else {
            console.log(`jugada ${element[0]} con ${element[1]}`)
            args[1] -= (element[0] * element[1])

          }
        });
    }
  })
}


function play_game(...args){

  console.log(`args: ${args}`)
  console.log(`args 0: ${args[0][0]}`)
  console.log(`args 1: ${args[0][1]}`)


  const input = prompt(`Ingrese jugada de ${args[0][0]}: `);

  console.log(input)

  ingresar_jugada(args[0][0], args[0][1], input)


  if (args[0][1] > 0){
    counter += 1
    if (counter > (game_array.length - 1)){
      counter = 0
      play_game(game_array[counter])
    } else {
      console.log("adasdas")
      play_game(game_array[counter])
    }
  } else{
    console.log(`el juego ha terminado, ganador: ${args[0][0]}`)
  }
}

//1) OUTPUT [ [ 'Jaime', 150 ], [ 'Emma', 150 ] ]

// const a = init_game('Jaime', 'Emma');
// a.forEach(element => console.log(element));

//2) Una función que reciba el nombre del jugador, 
//su puntaje y sus lanzamientos y devuelva el 
//nuevo score del jugador

function main(){
  init_game('Jaime', 'Emma');
  //ingresar_jugada('Jaime', 501, ['DB', [3,20], [3,19]])
}

main()


