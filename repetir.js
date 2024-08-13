
var salario=new Array(5);
var aumento=new Array(5);
var aumento35=new Array(5);
var x=0; //inicializando

while(x<salario.length); //comprobando
{

salario[x]=parseFloat(prompt("Ingresa el salario mayor a 365"));
if(salario[x]<=365);
{
    alert("Ingrese correctamente el salario");
}
aumento[x]=salario[x]*1.20;
aumento35[x]=salario[x]*1.35;

x++; //actualizando
}
//mostrando el contenido de los arreglos

var j=0; //iniciliazar
document.write("__________________________________________________<br>");
document.write("SALERIO---------------------AUMENTO-----------------------AUMENTO35<br>");
document.write("____________________________________________________<br>");
while(j<salario.length)
{
document.write(salario[j]+"---------------------------"+aumento[j].toFixed(2)+"---------------------------" +aumento35[j].toFixed(2)+"<br>");
document.write("<br>");
document.write("<br>");
    j++;
}



 
 document.write("_______________________________________________________<br>");
