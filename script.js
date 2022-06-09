let arrRepetido = [1,5,22,7,8,22]
let arrayAux = [];

for (let p = 0; p < arrRepetido.length; p++) {
    const index = arrRepetido[p]
    const count = arrayAux[index] ? arrayAux[index] += 1 : 1
    arrayAux[index] = count
    if (arrayAux[arrRepetido[p]] > 1) {
       console.log("repetido " + arrRepetido[p])
    }
}


let array = []
var input = document.getElementById("tarea");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
   let tarea = document.getElementById("tarea").value;
   array.push(tarea)
   if (array > 5){
alert("no puedes poner un numero mayor a 5")
   }
alert(array)
  }
});
    
let tocame = document.getElementById("tocame")
tocame.addEventListener("click",() =>{
//let m = Math.min.apply(null, array)

//funcion burbuja
function burbuja(arr){
  for (i=0;i<arr.length - 1;i+=1){
    for (j=0; j<arr.length - 1; j+=1){
      if (arr[j] > arr[j + 1]){
        let aux = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = aux
      }
    }
  }
  return arr
}

let mayorMenor = {
  numeroMayor:1000,
  numeroMenor:0
}

alert(burbuja(array))  

//let valueComparar_menor = mayor_menor.numeroMayor
//let valueComparar_mayor = mayor_menor.numeroMenor

array.forEach(element => {
  if (element > mayorMenor.numeroMenor){
    mayorMenor.numeroMenor = element
  }
  if (element < mayorMenor.numeroMayor){
    mayorMenor.numeroMayor = element
  }
});


alert(`el numero mayor es ${mayorMenor.numeroMenor}`)

alert(`el menor numero es ${mayorMenor.numeroMayor}`)
});



