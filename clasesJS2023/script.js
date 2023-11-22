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
}
