$(document).ready(function(){
    $(".reviews__slider").owlCarousel({
        items: 3,
        dots: false,
        stageClass: "owl-stage-flex",
        center: true,
        loop:true,
        smartSpeed:800,
        nav:false,

    });
    $(".reviews__buttons .owl-prev").click(function(){
        $(".owl-prev").trigger("prev.owl.carousel")
    });
    
    $(".reviews__buttons .owl-next").click(function(){
        $(".owl-next").trigger("next.owl.carousel")
    });

});

const burgerBtn = document.getElementById('burgerBtn')
const burger = document.getElementById('burger')
const main = document.querySelector('main')
const footer = document.getElementById('footer')
burgerBtn.addEventListener('click', function() {
    burger.classList.toggle('burgerActive')
    main.classList.toggle('closeMain')
    footer.classList.toggle('closeMain')
})

function changeStage(step) {
    let mainImage = document.getElementById('howItWorlMainImage');
    let imageName;
    switch (step) {
        case 1:
            imageName = "advisior1.png";
            break;
        case 2:
            imageName = "advisior2.png";
            break;
        case 3:
            imageName = "advisior3.png";
            break;
        case 4:
            imageName = "advisior4.png";
            break;
        default:
            imageName = "advisior1.png";
            break;
    }
    mainImage.src = "./img/" + imageName;


    let allIcons = document.querySelectorAll('.howItWorks__number img');
    allIcons.forEach(function(icon) {
        icon.src = icon.src.replace('_yellow.svg', '_green.svg');
    });


    let iconImage = document.getElementById('step' + step).querySelector('img');
    if (iconImage) {
        iconImage.src = iconImage.src.replace('_green.svg', '_yellow.svg');
    }
}
// ==============================
function changeStage2(step) {
    let mainImage = document.getElementById('howItWorlMainImage1');
    let imageName;
    switch (step) {
        case 1:
            imageName = "advisior1.png";
            break;
        case 2:
            imageName = "advisior6.png";
            break;
        case 3:
            imageName = "advisior7.png";
            break;
        case 4:
            imageName = "advisior8.png";
            break;
        default:
            imageName = "advisior1.png";
            break;
    }
    mainImage.src = "./img/" + imageName;


    let allIcons = document.querySelectorAll('.howItWorks__number2 img');
    console.log(allIcons)
    allIcons.forEach(function(icon) {
        icon.src = icon.src.replace('_yellow.svg', '_green.svg');
    });


    let iconImage = document.getElementById('step2' + step).querySelector('img');
    if (iconImage) {
        iconImage.src = iconImage.src.replace('_green.svg', '_yellow.svg');
    }
}



// ==============================
var getButton = document.getElementById('howItWorks__btn-get');
var becomeButton = document.getElementById('howItWorks__btn-become');
var getContent = document.getElementById('getContent');
var becomeContent = document.getElementById('becomeContent');

getButton.addEventListener('click', function() {
    getContent.style.display = 'block';
    becomeContent.style.display = 'none';
});

becomeButton.addEventListener('click', function() {
    getContent.style.display = 'none';
    becomeContent.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    var activeButton = document.querySelector('.active');
    var getContent = document.getElementById('getContent');
    var becomeContent = document.getElementById('becomeContent');

    if (activeButton && activeButton.id === 'howItWorks__btn-get') {
        getContent.style.display = 'block';
        becomeContent.style.display = 'none';
    }
});





function changeColor(button) {
    var buttons = document.querySelectorAll('.howItWorks__btn button');
    buttons.forEach(function(btn) {
        if (btn === button) {
            btn.style.backgroundColor = '#E5EDDE';
        } else {
            btn.style.backgroundColor = 'white';
        }
    });
}

// ================================


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        577: {
            slidesPerView: 2,
        },
    },
});




