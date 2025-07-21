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
var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
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



