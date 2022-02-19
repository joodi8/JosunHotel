// 모바일 사이즈일때 로고 이미지 변경
$(function(){
    $(window).resize(function(){
    }).resize();
});

$(function(){
    $(window).resize(function(){
        let width = window.innerWidth;
    }).resize();
});



$(function(){

    $(window).resize(function(){
    
    var width = window.innerWidth;
    
    if(width < 768){
    
    $('.topLogo').attr('src', './img/header/gnb/main_logoB_column.png')
    
    }
    
    else {$('.topLogo').attr('./img/header/gnb/main_logoB.png');}
    
    }).resize();
    
    });


let headerswiper = new Swiper(".swiperContainer.fade1", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



let today = new Date();   

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일
let tomorrow = today.getDay() + 1;
const week = ['일', '월', '화', '수', '목', '금', '토'];
let dayOfWeek = week[today.getDay()];
let plusOne = week[today.getDay() + 1];

let tomorrowDate= year + " . " + month + " . " + tomorrow + " (" + plusOne + ")"

// document.write(year + '.' + month + '.' + date)
// document.write('<br>')
// document.write(day);
document.getElementById("dateText").innerHTML = year + " . " + month + " . " + day + " (" + dayOfWeek + ")"+ " ~ " + tomorrowDate;
