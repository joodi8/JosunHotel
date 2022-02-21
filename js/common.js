// 모바일 사이즈일때 로고 이미지 변경 & nav 클릭이벤트 활성
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
    
    let width = window.innerWidth;
    
    if(width < 768){
    
    $('.topLogo').attr('src', './img/header/gnb/main_logoB_column.png')
    $('.firstWrap > li').attr('onclick','showHide(this)')
    
    }
    
    else {
        $('.topLogo').attr('./img/header/gnb/main_logoB.png');
        $('.firstWrap > li').attr('onclick','null')
    }
    
    }).resize();
    
    });

    const showHide = (e) => {
        const MListDrop = e.children[0];
        const displayAttr = window.getComputedStyle(MListDrop).display;
    
        if (displayAttr == 'none') {
            MListDrop.style.display = 'block';
        } else {
            MListDrop.style.display = 'none';
        }
    }

// 스위퍼
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

// nav활성화
$ (function(){
    let gnbFlag = false;
    let gnbIndex;
    
    $(".all_menuIcon").on({
        "click" : function() {
            
            if (gnbIndex != undefined) {
                $('#all_menu').eq(gnbIndex).css('display', 'none');
            }
            
            gnbIndex = $(this).index();
            gnbFlag = true;
            
            $("#all_menu").removeClass("disappear")
            $("#all_menu").addClass("appear")
            $("#all_menu").show();
            
            $("#all_menu").eq(gnbIndex).css("display","block");
        }
    });
    
    $("#all_menu").on({
        "mouseleave" : function() {
            if(gnbFlag) {
                $("#all_menu").removeClass("appear")
                $("#all_menu").addClass("disappear")
                $("#all_menu").hide();
            } else {
                return;
            }
        }
    });
});




// 날짜 불러오기 (보류)
// let today = new Date();   

// let year = today.getFullYear(); 
// let month = today.getMonth() + 1; 
// let date = today.getDate();  
// let day = today.getDay();  
// let tomorrow = today.getDay() + 1;
// const week = ['일', '월', '화', '수', '목', '금', '토'];
// let dayOfWeek = week[today.getDay()];
// let plusOne = week[today.getDay() + 1];

// let tomorrowDate= year + " . " + month + " . " + tomorrow + " (" + plusOne + ")"
// document.getElementById("dateText").innerHTML = year + " . " + month + " . " + day + " (" + dayOfWeek + ")"+ " ~ " + tomorrowDate;
