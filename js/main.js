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

$(function(){
    $('.facilitiesSlider.slick').slick({
        slide: 'div',
        infinite : true,  
        slidesToShow : 3,
        slidesToScroll : 1,
        speed : 100,
        arrows : true,
        dots : false,
        autoplay : true,
        autoplaySpeed : 10000,
        pauseOnHover : true,
        vertical : false,
        prevArrow : "<button type='button' class='slick-prev'><img src='../img/content/04FacilitiesSection/Larrow_icon_b.png'></button>",
        nextArrow : "<button type='button' class='slick-next'><img src='../img/content/04FacilitiesSection/Rarrow_icon_b.png'></button>",
        draggable : true,
        
        responsive: [ 
            {  
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:3 
                } 
            },
            { 
                breakpoint: 768, //화면 사이즈 768px
                settings: {    
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:2 
                } 
            }
        ]

    });
  })