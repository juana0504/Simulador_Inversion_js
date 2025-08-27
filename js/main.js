function simulador() {
    
    const contpre =document.getElementById("pre-simulation");
    const contpost= document.getElementById("post-simulation");

    contpost.classList.remove('disabled');
    contpre.classList.add('disabled');

    //Valores que capturan los valores de los campos
    let Cnombres = document.getElementById("nombres").value;
    let Ctelefono = document.getElementById("telefono").value;
    let Cemail = document.getElementById("email").value;
    let Cmonto = document.getElementById("monto").value;
    let Ctiempo = document.getElementById("tiempo").value;

    //constantes que capturan las etiquetas span en las que se muestran los valores por eso la S de show
    const Stiempom = document.getElementById("Stiempo");
    const Sinteres = document.getElementById("Sinteres");
    const Stotal = document.getElementById("Stotal");
    const Sganancia = document.getElementById("Sganancia");
    const Snombre = document.getElementById("Snombre");
    const Semail = document.getElementById("Semail");

    //Variables para realizar los calculos 
    let ganancia;
    let total;

    switch (Ctiempo) {
        case '1':
            //En este case realizaremos el calculo si el tiempo corresponde a un año
            ganancia = (Cmonto*0.008)*12;
            total = parseInt(Cmonto) + parseInt(ganancia);
            Sinteres.textContent='0.8%';
            Stiempom.textContent='12 Meses';
            break;
        case '2':
            //En este case realizaremos el calculo si el tiempo correponde a dos años 
            ganancia = (Cmonto*0.013)*24;
            total  = parseInt(Cmonto) + parseInt(ganancia);
            Sinteres.textContent='1.3%';
            Stiempom.textContent='24 Meses';
            break;
        case '3':
            //En este case realizaremos el calculo si el tiempo correponde a tres años 
            ganancia = (Cmonto*0.017)*36;
            total = parseInt(Cmonto) + parseInt(ganancia);
            Sinteres.textContent='1.7%';
            Stiempom.textContent='36 Meses';
            break;
        default:
            break;
    }

    Stotal.textContent = total;
    Sganancia.textContent = ganancia;
    Snombre.textContent=Cnombres;
    Semail.textContent=Cemail;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calcular').addEventListener('click',simulador);
});