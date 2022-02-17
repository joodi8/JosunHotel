let swiper = new Swiper(".swiperContainer.fade1", {
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
let tomorrowDate= year + "." + month + "." + tomorrow + dayOfWeek

// document.write(year + '.' + month + '.' + date)
// document.write('<br>')
// document.write(day);
document.getElementById("dateText").innerHTML = year + "." + month + "." + day + dayOfWeek + "_" + tomorrowDate;
