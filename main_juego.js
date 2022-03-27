
function init_game(array_names) {
  const array_puntaje = array_names.map(function(element) {
    return [element, 150];
  });
  return array_puntaje;
}
function calcular_funcion(lanzamientos) {
  
  let puntaje_array = [];
  lanzamientos.forEach(function(valor, indice, array) {
    if (valor == 'DB') {
        puntaje_array.push(50);
      } else if (valor == 'SB'){
        puntaje_array.push(25);
      } else {
        puntaje_array.push(valor[0]*valor[1]);
      };
});
  puntaje = puntaje_array.reduce( (x,y) => (x+y) );
  return puntaje;
}
//Calcular puntaje restante
function ingresar_jugada(nombre, puntaje_actual, lanzamientos) {
  puntaje_lanzamientos = calcular_funcion(lanzamientos);
  if ( puntaje_actual-puntaje_lanzamientos < 0){
    puntaje_final = 0;
  } else {
    puntaje_final = puntaje_actual-puntaje_lanzamientos;
  }
  return [nombre,(puntaje_final)];
}

function modify_score(name_score, name_new_score){
  name_score.forEach((element) => {
      if(element[0] == name_new_score[0]){
          element[1] = name_new_score[1];
      }
    });
    return name_score;
}


function turno(name_score, nombre,puntaje){

  console.log(" Ingrese lanzamientos de "+nombre+ " con puntaje "+ puntaje);
  let lanzamientos = [[2,3], 'DB', 'DB'];
  puntaje_actual = ingresar_jugada(nombre, puntaje, lanzamientos);

  console.log("puntaje_actual" +puntaje_actual);
  console.log(nombre +" queda con " + puntaje_actual[1] + " puntos");


  if (puntaje_actual[1] == 0){
    // modify_score(name_score, [ nombre, puntaje_actual[1]]);
    console.log(nombre + " queda con 0 puntos y gana el juego.  Felicitaciones " + nombre + " !!");
    return true;

  }else{
    // modify_score(name_score,[nombre, puntaje_actual[1]]);
    return false;}
}

//---------------------------------------------------------

function play_game(...args) {

  name_score = init_game(args);
  console.log("Juego inicializado con jugadores " + args);
  let duplicate_name_score = [...name_score];
  let list = [];



  duplicate_name_score.forEach((v, index, arr) => {
    turno(name_score, v[0],v[1])

    // if (turno(name_score, v[0],v[1]) == true) {
    //   arr.length = index + 1; // Behaves like `break`
    //   list.push(true);

    // }
    // else{
    //   list.push(false);
    // }

  // console.log(list);
    
  })


}

play_game('Jaime', 'Ema');
