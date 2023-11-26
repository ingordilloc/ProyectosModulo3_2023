function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}


async function palindromo (){
    
    var cadena = document.getElementById('entrada').value;
    cadena = cadena.toLowerCase().replace(/ /g,"");
    var reves = cadena.split("").reverse().join("");
    var caracteres = reves.length;
    let time = reves.length;
    
    if (cadena == reves){
        document.getElementById('mostrar').innerHTML = reves;
        document.getElementById('cuadrado').innerHTML = caracteres;
        
        //alert('El texto es palindromo');
    } else {
        document.getElementById('mostrar').innerHTML = 'No es palindrome';
        document.getElementById('cuadrado').innerHTML = caracteres;
        
        
        //alert('El texto no es palindromo');
    }
    
    for (var i = time ; i >= 0; i--) {
        document.getElementById('contador').innerHTML = time;
        console.log(time);
        await delay(1000);
        time --;
    }
}
function palabras (){
    let palabra = document.getElementById('entrada').value;
    let cantidad = palabra.split(" ");
    let numeroPalabras = cantidad.length;
    document.getElementById('palabras').innerHTML = numeroPalabras;

}

const cargarDatos = async () => {
    try{
      const url = "https://jsonplaceholder.typicode.com/todos/1";
      const res = await fetch(url);
      const datos = await res.json();
      return datos
    } catch(err) {
      console.log(err)
    }
  };
  const datos = cargarDatos().then(datos => console.log(datos));
