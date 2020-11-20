(function (){



    document.getElementById('texto').textContent="Ingrese los 2 numeros a sumar:";
       
    function suma(){

        var num1 = document.getElementById('num1').value;
        var num2 = document.getElementById('num2').value;
        var suma = parseInt(num1) + parseInt(num2);

        alert('La suma de los dos numeros es: '+ suma)
    }

    var sumarnumeros = document.getElementById('sumanum').addEventListener('click', suma);

    
 

}());