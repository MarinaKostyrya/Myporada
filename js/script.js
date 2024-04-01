$(document).ready(function () {
    $(".reviews__slider").owlCarousel({
        items: 3,
        dots: false,
        stageClass: "owl-stage-flex",
        center: true,
        loop: true,
        smartSpeed: 800,
        nav: false,



    });
    $(".reviews__buttons .owl-prev").click(function () {
        $(".owl-prev").trigger("prev.owl.carousel")
    });

    $(".reviews__buttons .owl-next").click(function () {
        $(".owl-next").trigger("next.owl.carousel")
    });



});

const burgerBtn = document.getElementById('burgerBtn')
const burger = document.getElementById('burger')
const main = document.querySelector('main')
burgerBtn.addEventListener('click', function () {
    burger.classList.toggle('burgerActive')
    main.classList.toggle('closeMain')
})

// function chnageStage(step) {
//     console.log('hello');
// let stages = document.querySelectorAll('.howItWorks__stage')
// stages.forEach(function(stage) {
//     stage.classList.remove('active')
// })
// let currentStep = document.getElementById('step' + step)
// currentStep.classList.add('active')

// let mainImage = document.getElementById('howItWorlMainImage')
// switch(step) {
//     case 1: 
//     mainImage.src = './img/advisior1.png'
//     break;
//     case 2: 
//     mainImage.src = './img/advisior2.png'
//     break;
//     case 3: 
//     mainImage.src = './img/advisior3.png'
//     break;
//     case 4: 
//     mainImage.src = './img/advisior4.png'
//     break;
//     default: break;
// }

// let numverIcon = document.getElementById('step' + step).querySelector('img')
// let fillValue = (step === 1) ? '#FFC61A' : '#1C5E25'
// numverIcon.setAttribute('fill', fillValue)
// }

// function chnageStage() {
//     let stages = document.querySelectorAll('.howItWorks__stage')
//     let howItWorlMainImage = document.getElementById('howItWorlMainImage')

//     let currentIndex = 0

//     stages.forEach(function (stage, index) {
//         if (stage.classList.contains('howItWorks__active')) {
//             currentIndex = index
//             stage.classList.remove('howItWorks__active')
//         }
//     })

//     let nextIndex = (currentIndex + 1) % stages.length
//     stages[nextIndex].classList.add('howItWorks__active')

//     if(nextIndex === 0) {
//         howItWorlMainImage.src = './img/advisior1.png'

//     }
// }


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


