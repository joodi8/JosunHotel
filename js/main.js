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

const mainBuildingsOrigin = [
    {    
        facilities_imgBox: "url(./img/content/04FacilitiesSection/Facilities_img_main.jpeg)",
        categoryText: 'GRAND JOSUN JEJU & GRAND JOSUN HILL SUITE',
        titleText: 'Iconic Facilities',
        txt01: '고객님의 여행이 더욱 즐거울 수 있도록',
        txt02: '다양한 시설을 제공해 드립니다.'
    }
]

const mainBuildings = [
    {    
        facilities_imgBox: "url(./img/content/04FacilitiesSection/Facilities_img_01.jpeg)",
        categoryText: 'GRAND JOSUN JEJU',
        titleText: 'Garden Pool & Cabana',
        txt01: '아이부터 어른까지 모두가 즐길 수 있는 가든 풀은',
        txt02: '사계절 따뜻하게 이용할 수 있습니다.'
    },
]

const suiteBuildingsOrigin = [
    {    
        facilities_imgBox: "url(./img/content/04FacilitiesSection/Facilities_img_main.jpeg)",
        categoryText: 'GRAND JOSUN JEJU & GRAND JOSUN HILL SUITE',
        titleText: 'Iconic Facilities',
        txt01: '고객님의 여행이 더욱 즐거울 수 있도록',
        txt02: '다양한 시설을 제공해 드립니다.'
    }
]

const suiteBuildings = [
    {    
        facilities_imgBox: "url(./img/content/04FacilitiesSection/Facilities_img_01.jpeg)",
        categoryText: 'GRAND JOSUN JEJU',
        titleText: 'Garden Pool & Cabana',
        txt01: '아이부터 어른까지 모두가 즐길 수 있는 가든 풀은',
        txt02: '사계절 따뜻하게 이용할 수 있습니다.'
    },
]

  $(".main_buildings").hover(function() {
    const idx = $(this).index();

    $('#facilities_imgBox').css("background", mainBuildings[idx].facilities_imgBox);
    $('#categoryText').text(mainBuildings[idx].categoryText);
    $('#titleText').text(mainBuildings[idx].titleText);
    $('.txt.01').text(mainBuildings[idx].txt01);
    $('.txt.02').text(mainBuildings[idx].txt02);
  }, function(){
    const idx = $(this).index();

    $('#facilities_imgBox').css("background", mainBuildingsOrigin[idx].facilities_imgBox);
    $('#categoryText').text(mainBuildingsOrigin[idx].categoryText);
    $('#titleText').text(mainBuildingsOrigin[idx].titleText);
    $('.txt.01').text(mainBuildingsOrigin[idx].txt01);
    $('.txt.02').text(mainBuildingsOrigin[idx].txt02);
  });


  $(".suite_buildings").hover(function() {
    const idx = $(this).index();

    $('#facilities_imgBox').css("background", suiteBuildings[idx].facilities_imgBox);
    $('#categoryText').text(suiteBuildings[idx].categoryText);
    $('#titleText').text(suiteBuildings[idx].titleText);
    $('.txt.01').text(suiteBuildings[idx].txt01);
    $('.txt.02').text(suiteBuildings[idx].txt02);
  }, function(){
    const idx = $(this).index();

    $('#facilities_imgBox').css("background", suiteBuildingsOrigin[idx].facilities_imgBox);
    $('#categoryText').text(suiteBuildingsOrigin[idx].categoryText);
    $('#titleText').text(suiteBuildingsOrigin[idx].titleText);
    $('.txt.01').text(suiteBuildingsOrigin[idx].txt01);
    $('.txt.02').text(suiteBuildingsOrigin[idx].txt02);
  });






// $('.facilitiesMenu.01').hover(
//     function() {
//     $('#facilities_imgBox').css("background", "url(../img/content/04FacilitiesSection/Facilities_img_01.jpeg)");
//     $('#categoryText').text('GRAND JOSUN JEJU');
//     $('#titleText').text('Garden Pool & Cabana');
//     $('.txt.01').text('아이부터 어른까지 모두가 즐길 수 있는 가든 풀은');
//     $('.txt.02').text('사계절 따뜻하게 이용할 수 있습니다.');
// },
// function() {
//     $('#facilities_imgBox').css("background", "url(../img/content/04FacilitiesSection/Facilities_img_main.jpeg)");
//     $('#categoryText').text('GRAND JOSUN JEJU & GRAND JOSUN HILL SUITE');
//     $('#titleText').text('Iconic Facilities');
//     $('#txt.01').text('고객님의 여행이 더욱 즐거울 수 있도록');
//     $('#txt.01').text('다양한 시설을 제공해 드립니다.');
// });


// $('.facilitiesMenu.02').hover(
//     function() {
//     $('#facilities_imgBox').css("background", "url(../img/content/04FacilitiesSection/Facilities_img_02.jpeg)");
// },
// function() {
//     $('#facilities_imgBox').css("background", "url(../img/content/04FacilitiesSection/Facilities_img_main.jpeg)");
// });