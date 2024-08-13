function calcular() {
    let nombre=document.getElementById("name1") .value;
    let edad=parseInt(document.getElementById)("edad1") .value;
    //obteniendo el genero
    var genero=document.querySelector ("input[name='sexo' ]:checked") .value;
    let aumento;
    aumento=edad+10;
    //Imprimiendo la edad de acuerdo al genero
    if (genero=="masculino")
    {
        alert("Excelente caballero, su edad aumentada es" + aumento);
    }
    else{
        alert("Excelente señorita, su edad aumentada es" + aumento);
    }
} //fin calcular