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