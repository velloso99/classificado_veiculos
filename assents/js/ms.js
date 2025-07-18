let menu = document.querySelector(".menulinks");
let menudois = document.querySelector("#menubtn");



menudois.onclick = () => {
    menu.classList.toggle('active');
}
/*menu do site*/
window.onscroll = () =>{
    let topoSite = document.querySelector("header");

    topoSite.classList.toggle('sticky', window.scrollY> 100);
}


/*slide destaque*/
var swiper = new Swiper(".msSlider",{
    spaceBetween: 30,
    centeredSlide: true,
    loop: true,
    autoplay: {
        delay: 4500,
        disbledOnInteraction: false,
    },
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



