const megaMenu = document.querySelector('.mega-menu');
const menuBar = document.getElementById('menuBar');
const menuLinks = document.getElementById('menu-links')
menuBar.onclick = () => {
    menuBar.classList.toggle('move');
    megaMenu.classList.toggle('active');
    notify.classList.remove('active');
};



// Notifacation
const notify = document.querySelector('.notify');
const notifacationBall = document.getElementById('notifacation-bell');

notifacationBall.onclick= () => {
    notify.classList.toggle("active");
};

// Swiper Js


const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination : {
        el : '.swiper-pagination' , 
        clickable :true,
    }, 
    autoplay: {
        delay:3000,
        disableOnInteraction:false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 18,
        },
        1068: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    }
})