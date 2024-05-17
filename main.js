let header = document.querySelector('header');
let menu = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
  header.classList.toggle('shadow', window.scrollY > 0);
} );

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll =() =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}


var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });


  var swiper = new Swiper(".coming-conatiner", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints:{
      0: {
        slidesPerView: 2,
      },
      568: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      }, 
      968: {
        slidesPerView: 5,
      },
      1168: {
        slidesPerView: 6,
      },
      1368: {
        slidesPerView: 7,
      },
      1568: {
        slidesPerView: 8,
      },
      1768: {
        slidesPerView: 9,
      },
      1968: {
        slidesPerView: 10,
      },
    }
   
  });