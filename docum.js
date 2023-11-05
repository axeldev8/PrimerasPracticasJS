console.log("hola ", 12,true)
console.log("str es del tipo:", typeof "mesa")
var  num = typeof axel
console.log("num es de tipo:",  num)
console.log("str es del tipo:", typeof str)

//creando una funcion para tratar de alargar el temporalizador
const funcion = ()=> {
    console.log("hola ", 12,true)
    console.log("str es del tipo:", typeof "mesa")
    var  num = typeof axel
    console.log("num es de tipo:",  num)
    console.log("str es del tipo:", typeof str)    

}

// empezar
console.time("empezar_temporalizador")

const saludar = (nombre) => "q ondaaa " + nombre;
const despedir = (nombre) => "nos vemos " + nombre;


console.log(saludar("ramon"))
console.log(despedir("axel"))

console.timeEnd("empezar_temporalizador")