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
// facilitiesMenu 이미지 변경

// const bgs = [
//     {    
//         imgUrl: "1",
//         categoryText: "2",
//         titleText: "3"
//     },
//     {
//         imgUrl: "4",
//         categoryText: "5",
//         titleText: "6"
//     },
// ]

// bgs.map((bg) => {
//     console.log(bg);
// });

// $('.test').hover






$('.facilitiesMenu.01').hover(
    function() {
    $('#facilities_imgBox').css("background", "url(../img/content/04FacilitiesSection/Facilities_img_01.jpeg)");
    $('#categoryText').text('GRAND JOSUN JEJU');
    $('#titleText').text('Garden Pool & Cabana');
    $('.txt.01').text('아이부터 어른까지 모두가 즐길 수 있는 가든 풀은');
    $('.txt.02').text('사계절 따뜻하게 이용할 수 있습니다.');
},
function() {
    $('#facilities_imgBox').css("background", "url(../img/content/04FacilitiesSection/Facilities_img_main.jpeg)");
    $('#categoryText').text('GRAND JOSUN JEJU & GRAND JOSUN HILL SUITE');
    $('#titleText').text('Iconic Facilities');
    $('#txt.01').text('고객님의 여행이 더욱 즐거울 수 있도록');
    $('#txt.01').text('다양한 시설을 제공해 드립니다.');
});


$('.facilitiesMenu.02').hover(
    function() {
    $('#facilities_imgBox').css("background", "url(../img/content/04FacilitiesSection/Facilities_img_02.jpeg)");
},
function() {
    $('#facilities_imgBox').css("background", "url(../img/content/04FacilitiesSection/Facilities_img_main.jpeg)");
});
