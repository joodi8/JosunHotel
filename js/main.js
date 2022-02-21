let roomSwiper = new Swiper(".swiperContainer.roompage", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

let diningSwiper = new Swiper(".swiperContainer.diningpage", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

$('.facilitiesMenu.01').hover(
    function() {
    $('#facilities_imgBox').css("background", "url(../img/content/04FacilitiesSection/Facilities_img_01.jpeg)");
},
function() {
    $('#facilities_imgBox').css("background", "url(../img/content/04FacilitiesSection/Facilities_img_main.jpeg)");
});