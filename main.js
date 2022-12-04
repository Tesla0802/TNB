// let Display = document.querySelector(".none");
// let GETARRAY = getArrayFromFirebase("User");

const Influencer = document.querySelector(".Influencer");
const buisnes = document.querySelector(".buisnes");

// // var swiper = new Swiper(".mySwiper", {
// //   slidesPerView: 1,
// //   spaceBetween: 10,
// //   pagination: {
// //     el: ".swiper-pagination",
// //     clickable: true,
// //   },
// //   autoplay: {
// //     delay: 5000,
// //     disableOnInteraction: false,
// //   },
// //   navigation: {
// //     nextEl: ".swiper-button-next",
// //     prevEl: ".swiper-button-prev",
// //   },
// //   breakpoints: {
// //     640: {
// //       slidesPerView: 2,
// //       spaceBetween: 20,
// //     },
// //     768: {
// //       slidesPerView: 2,
// //       spaceBetween: 40,
// //     },
// //     1024: {
// //       slidesPerView: 3,
// //       spaceBetween: 50,
// //     },
// //   },
// // });
$(window).scroll(function () {
  if ($(document).scrollTop() > 20) {
    $(".navigation").addClass("fix-icon");
  } else {
    $(".navigation").removeClass("fix-icon");
  }
});

function displayAlert(title, text, icon) {
  Swal.fire({
    icon: icon,
    text: text,
    title: title,
  });
}



