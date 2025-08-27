function simulador() {
    
    const contpre =document.getElementById("pre-simulation");
    const contpost= document.getElementById("post-simulation");

    contpost.classList.remove('disabled');
    contpre.classList.add('disabled');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calcular').addEventListener('click',simulador);
});