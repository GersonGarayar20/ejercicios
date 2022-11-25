
//1



const sumaPares = () =>{
  
  let n = prompt("cantidad de numeros:")
  let resultado = 0

  for (let i = 0; i < n; i++) {
    
    let numero = Number(prompt("ingresa un numero:"))
    if (numero % 2 === 0) resultado += numero

  }

  alert(resultado);
}

//sumaPares()

//2

const factorial = (numero = undefined) => {

  if (!numero) return console.warn("numero no introducido")
  if (typeof(numero) !== "number") return console.error(`el valor "${numero}" no es una cadena de texto`)

  let total = 1
  
  for (let i=1; i<=numero; i++) {
  total = total * i; 
}

  return total
}

let numero = Number(prompt("ingresa un numero:"))

alert("el factorial es: " + factorial(numero))

