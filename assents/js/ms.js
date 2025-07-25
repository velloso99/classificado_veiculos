let menu = document.querySelector(".menulinks");
let menudois = document.querySelector("#menubtn");

menudois.onclick = () => {
    menu.classList.toggle('active');
}
/*scroll*/
window.onscroll = () =>{
    let topoSite = document.querySelector("header");

    topoSite.classList.toggle('sticky', window.scrollY> 100);
}

/*slide destaque*/
var swiper = new Swiper(".msSlider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 4500,
    disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*Contador de veiculos*/
let campoConta = document.querySelectorAll(".numero");

let intervalo = 1000;
campoConta.forEach((campoConta) =>{
    let valorInicial = 0;
    let finalValor= parseInt(campoConta.getAttribute("msflix-c-valor"));
    let duracao = Math.floor(intervalo/finalValor);
    let Contador = setInterval(function(){
        valorInicial +=1;
        campoConta.textContent = valorInicial;
        if(valorInicial == finalValor){
            clearInterval(Contador);
        }
    }, duracao);

});


