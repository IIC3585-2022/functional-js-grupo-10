const lanzamientos = '[DB, [3,20], [3,19]]'
var array = lanzamientos.split(', ').map(elem => {
  return elem.replace(/[^a-zA-Z0-9, ]/g, '')

});
console.log(array)