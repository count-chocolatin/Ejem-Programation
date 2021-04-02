 text = document.querySelector('#texto')
 boton = document.querySelector('#boton')
 resultado = document.querySelector('#resultado')
boton.onclick = function() {
   resultado.innerHTML =''
   for( exito of productos){
      encontrado = exito.nombre.toLowerCase()
       texto =  text.value.toLowerCase()
      if(encontrado.indexOf(texto) !== -1 ){
        resultado.innerHTML += `<li> ${exito.nombre}</li>`

      }
   }
}

productos = [
  {nombre: 'Platanos', valor: '$500'},
  {nombre: 'Pera', valor: '$580'},
  {nombre: 'Sandia', Valor: '$500'},
  {nombre: 'Melon', valor: '$500'},
  {nombre: 'Mango', valor: '$500'},
  {nombre: 'Fresa', valor: '$30'},
]
   
