
//1



const sumaPares = () =>{
  
  let n = prompt("cantidad de numeros:")
  let pares = 0
  let impares = 0

  for (let i = 0; i < n; i++) {
    
    let numero = Number(prompt("ingresa un numero:"))
    if (numero % 2 === 0) pares += numero
    if (numero % 2 === 1) impares += numero


  }

  alert("la suma de los numeros pares son: " + pares + " la suma de los numeros impares son: " + impares);
}

//sumaPares()

//2

const factorial = () => {

  let numero = Number(prompt("ingresa un numero:"))
  let total = 1
  
  for (let i=1; i<=numero; i++) {
  total = total * i; 
  }
  
  alert("el factorial es: " + numero)

}


factorial()

