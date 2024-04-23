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
burgerBtn.addEventListener('click', function() {
    burger.classList.toggle('burgerActive')
    main.classList.toggle('closeMain')
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