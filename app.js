

function resumen(){
    
    var cant =document.getElementById("cantidad").value;
    console.log(cant)
    var Est =document.getElementById("categoria").value;
    console.log(Est)
    var a= parseInt(cant)
    console.log(a)
    if (Est=="Estudiante"){
        var total= a * (200*0.2)
        
    }else if(Est=="Trainee"){
        var total= a * (200*0.5)
    }else
        var total= a * (200*0.85)
    
    console.log(total)
    
    document.getElementById("pagar").innerHTML= "Total a pagar $" + total;

}
function reset(){
    let formulario = document.getElementById('formulario');
    formulario.reset();
    document.getElementById("pagar").innerHTML= "Total a pagar $";
}



