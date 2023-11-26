/*Primer ejercicio del modulo 3 

let inputTelefono = document.getElementById('telefono');
let inputCodigoPais = document.getElementById('codigoPais');

inputTelefono.addEventListener('keyup', function(event) {
let valorInputTelefono = inputTelefono.value;

let resultado = "Bienvenido, su telefono "+valorInputTelefono+ " fue registrado";
document.getElementById('resultado').innerHTML = resultado;
});

inputCodigoPais.addEventListener('keyup', function (event){
    let valorInputCodigoPais = inputCodigoPais.value;
    let resultado = detallePais(valorInputCodigoPais);
    document.getElementById('resultadoCodigoPais').innerHTML = resultado;
});

function detallePais(codigo){
    var paises = {
        '502': 'Guatemala',
        '503': 'El Salvador',
        'default': 'ERROR'

    };
    return 'Su telefono es de: '+ (paises[codigo] || paises['default']);
}*/
function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}


async function boton(){ //devuelve una promesa, puete contener una expresión await
    //await hace una pausa y espera una promesa
    //asíncrono, dos o más eventos no ocurren al mismo tiempo. No sucesivos.
    //promise -> pendiente, cumplida, rechazada

    let time = document.getElementById('entrada').value;
    for (var i = time ; i >= 0; i--) {
        document.getElementById('mostrar').innerHTML = time;
        console.log(time);
        await delay(1000);
        time --;
    }
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
